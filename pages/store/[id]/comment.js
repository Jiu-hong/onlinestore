import Layout from '../../../components/layout';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useIns, useInsDispatch } from '../../contexts/CartContext';
import { usefunctions } from '../../contexts/functionContext';
import { useUser } from '../../contexts/userContext';
import styles from '../../../styles/comment.module.css';
import { formatNumber } from '../../../utils/utils';

function TempImg1({ i, imgfile, flag, show }) {
  const [sym, setSym] = useState(true);
  const [dlt, setDlt] = useState(false);

  useEffect(() => {
    if (imgfile.size > 1048576) {
      setDlt(true);
      flag[i] = false;
    } else {
      setDlt(false);
      flag[i] = true;
    }
    setSym(true);
  }, [imgfile]);

  var imgurl = URL.createObjectURL(imgfile);
  URL.revokeObjectURL(imgfile);

  const handledlt = (e) => {
    console.log('sym in handledlt: ', sym);
    e.preventDefault();
    flag[i] = !flag[i];
    setSym(flag[i]);
  };
  return (
    <>
      {show && dlt && (
        <div className='mr-3'>
          <img src={imgurl} width={50} height={50} className='mr-3 mb-3' />
          <span className='text-danger'>size exceeded, it will not upload</span>
        </div>
      )}
      {show && !dlt && (
        <div className='mr-3'>
          <img src={imgurl} width={50} height={50} className='mr-3 mb-3' />

          <button
            className={sym ? 'btn btn-sm btn-success' : 'btn btn-sm btn-danger'}
            onClick={handledlt}
          >
            {sym ? 'delete' : 'retain'}
          </button>
        </div>
      )}
    </>
  );
}

export default function Comment() {
  const [error, setError] = useState([]);
  const { user, tmpuser } = useUser();
  const textEL = useRef(null);
  const imgEL = useRef(null);

  const { PostComment, GetAllOrder } = usefunctions();

  const { grouporders } = useIns();
  const { setOrders, setCmtmsg } = useInsDispatch();

  const router = useRouter();
  var ins;
  if (router.query.ins) {
    ins = JSON.parse(router.query.ins);
  }

  const [cflag, setCflag] = useState([]);
  const [imgfiles, setimgfiles] = useState([]);
  const [uploadmg, setUploadmg] = useState('');
  const [show, setShow] = useState(true);

  const [imgurlfordb, setImgurlfordb] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('I am in handleSubmit imgurlfordb: ', imgurlfordb);
    var usr = user || tmpuser;

    PostComment(
      ins._id,
      textEL.current.value,
      imgurlfordb,
      usr,
      grouporders,
      setOrders,
      setError
    ).then((res) => {
      if (res.status === 201) {
        // GetAllOrder(user, setOrders); //??
        setCmtmsg(ins._id);
        setTimeout(() => {
          setCmtmsg('');
        }, 3000);
        //router.push(`/order/#${ins._id}`);
        router.back();
      } else {
        console.log('res in else in comment: ', res);
      }
    });
  };

  const handletmpimg = (e) => {
    setImgurlfordb([]);
    var length = e.target.files.length > 5 ? 5 : e.target.files.length;
    var flag = [];
    var img = [];
    for (let i = 0; i < length; i++) {
      flag.push(true);
      img.push(e.target.files[i]);
    }
    setCflag(flag);
    setimgfiles(img);
    setUploadmg('');
    setShow(true);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    router.back();
  };

  const handleSubImg = (e) => {
    setUploadmg('loading...');
    setShow(false);
    e.preventDefault();
    var fileArray = [];
    var imgurls = [];

    for (let i = 0; i < imgEL.current.files.length; i++) {
      console.log('cflag[i]: ', cflag[i]);
      if (cflag[i]) {
        fileArray.push(imgEL.current.files[i]);
      }
    }

    console.log('fileArray: ', fileArray);

    fileArray.map((file) => {
      const filename = encodeURIComponent(file.name);
      fetch(`/api/upload-url?file=${filename}`)
        .then((res) => res.json())
        .then(({ url, fields }) => {
          const formData = new FormData();

          Object.entries({ ...fields, file }).forEach(([key, value]) => {
            formData.append(key, value);
            console.log('key: ', key);
            console.log('value: ', value);
          });

          fetch(url, {
            method: 'POST',
            body: formData,
          })
            .then((result) => {
              if (result.ok) {
                console.log('result: ', result);
                imgurls.push(result.url + '/' + 'comment/' + file.name);
                setImgurlfordb(imgurls);
                if (fileArray.length === imgurls.length) {
                  setUploadmg('upload successfully!');
                }
              }
            })
            .catch((err) => console.log('err: ', err));
        });
    });
  };
  useEffect(() => {
    setShow(false);
  }, []);
  return (
    <Layout>
      {ins && (
        <div className='container-fluid mt-3'>
          <div className={styles.gridcontainer}>
            <div>
              <Image src={ins.item.image[0]} height={70} width={70} />
              <div>{ins.item.title}</div>
            </div>

            <div>unit price: {formatNumber(ins.item.price)}</div>
            <div>quantity: {ins.quantity}</div>
            <div>price: {formatNumber(ins.item.price * ins.quantity)}</div>
          </div>

          {ins.commenttext && (
            <div>
              <div className={styles.oldtitle}>Original Comment</div>
              <div>{ins.commenttext}</div>
              <div className='mt-3'>
                {ins.commentimage.map((imgfile, index) => (
                  <img key={index} src={imgfile} height={50} width={50} />
                ))}
              </div>
            </div>
          )}
          <hr />
          <form onSubmit={handleSubImg}>
            <div className={styles.title}>
              Image(s) preview <span className='ml-3'> {uploadmg}</span>
            </div>
            {imgfiles.map((imgfile, index) => (
              <TempImg1
                key={index}
                imgfile={imgfile}
                flag={cflag}
                i={index}
                show={show}
              />
            ))}
            <div className='custom-file'>
              <label className='custom-file-label'>
                Select image(s) for preview
                <input
                  ref={imgEL}
                  onChange={handletmpimg}
                  name='commentattach'
                  type='file'
                  className='file-control-file'
                  hidden
                  multiple
                />
              </label>
              <p>click</p>
              <div>
                <button className='btn btn-success mr-3'>Upload</button>
                <span>
                  {imgurlfordb.map((url) => (
                    <img src={url} width={50} height={50} />
                  ))}
                </span>
              </div>
            </div>
          </form>
          <form
            //    ref={formEL}
            onSubmit={handleSubmit}
            method='post'
            //   encType='multipart/form-data'
          >
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className={styles.title}>New Comment (15-500 characters)</div>

            <textarea
              name='textarea'
              ref={textEL}
              className='form-control mb-3 mt-3'
              rows='5'
              required
              minLength='15'
              maxLength='500'
            ></textarea>

            <button className='btn btn-success mr-3'>submit</button>
            <button className='btn btn-warning mr-3' onClick={handleCancel}>
              cancel
            </button>
          </form>
        </div>
      )}
    </Layout>
  );
}
