import Layout from '../../../components/layout';
import Image from 'next';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useIns, useInsDispatch } from '../../contexts/CartContext';
import { usefunctions } from '../../contexts/functionContext';
import { useUser } from '../../contexts/userContext';
import styles from '../../../styles/comment.module.css';
import { formatNumber } from '../../../utils/utils';

function TempImg({ imgsrc }) {
    return <img src={imgsrc} width={50} height={50} className="mr-3 mb-3" />;
}
export default function Comment() {
    const [error, setError] = useState([]);
    const { user, tmpuser } = useUser();
    const textEL = useRef(null);
    const formEL = useRef(null);
    const imgEL = useRef(null);
    const oimgEL = useRef(null);
    const { PostComment, GetAllOrder } = usefunctions();

    const { grouporders } = useIns();
    const { setOrders, setCmtmsg } = useInsDispatch();

    const router = useRouter();
    var ins;
    if (router.query.ins) {
        ins = JSON.parse(router.query.ins);
    }

    var img = [];
    const [imgsrcs, setImgsrcs] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(formEL.current);
        PostComment(formData, grouporders, setOrders, setError).then((res) => {
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
        for (let i = 0; i < e.target.files.length; i++) {
            img.push(URL.createObjectURL(e.target.files[i]));
            URL.revokeObjectURL(e.target.files[i]);
        }
        setImgsrcs(img);
    };
    const handleCancel = (e) => {
        e.preventDefault();
        router.back();
    };

    return (
        <Layout>
            {ins && (
                <div className="container-fluid mt-3">
                    <div className={styles.gridcontainer}>
                        <div>
                            <img
                                src={ins.item.image[0]}
                                height={70}
                                width={70}
                            />
                            <div>{ins.item.title}</div>
                        </div>

                        <div>unit price: {formatNumber(ins.item.price)}</div>
                        <div>quantity: {ins.quantity}</div>
                        <div>
                            price: {formatNumber(ins.item.price * ins.quantity)}
                        </div>
                    </div>

                    {ins.commenttext && (
                        <form>
                            <div className={styles.oldtitle}>
                                Original Comment
                            </div>
                            <div className="mt-3">
                                {ins.commentimage.map((imgsrc, index) => (
                                    <img
                                        key={index}
                                        src={imgsrc}
                                        height={50}
                                        width={50}
                                        className="mr-3"
                                    />
                                ))}
                            </div>
                            <textarea
                                name="textarea"
                                className="form-control mb-3 mt-3"
                                rows="5"
                                defaultValue={ins.commenttext}
                                readOnly
                            ></textarea>
                        </form>
                    )}
                    <form
                        ref={formEL}
                        onSubmit={handleSubmit}
                        method="post"
                        encType="multipart/form-data"
                    >
                        <input name="insid" value={ins._id} hidden readOnly />
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <div className={styles.title}>New Comment</div>
                        <textarea
                            name="textarea"
                            ref={textEL}
                            className="form-control mb-3 mt-3"
                            rows="5"
                        ></textarea>
                        <div className={styles.title}>Imge(s) preview</div>
                        {imgsrcs.map((imgsrc, index) => (
                            <TempImg key={index} imgsrc={imgsrc} />
                        ))}

                        <div className="custom-file">
                            <label className="custom-file-label">
                                Click to upload imge(s)
                                <input
                                    ref={imgEL}
                                    onChange={handletmpimg}
                                    name="commentattach"
                                    type="file"
                                    className="file-control-file"
                                    hidden
                                    multiple
                                />
                            </label>
                        </div>

                        <button className="btn btn-success mr-3">submit</button>
                        <button
                            className="btn btn-warning mr-3"
                            onClick={handleCancel}
                        >
                            cancel
                        </button>
                    </form>
                </div>
            )}
        </Layout>
    );
}
