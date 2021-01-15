import { useEffect, useRef, useState } from 'react';

import Layout from '../../components/layout';
import { useRouter } from 'next/router';
import dbConnect from '../../utils/dbConnect';
import Item from '../../models/item';
import Iteminstance from '../../models/iteminstance';
import Image from 'next/image';
import styles from '../../styles/store.module.css';
import { useIns, useInsDispatch } from '../../pages/contexts/CartContext';
import { useUser, useUserDispatch } from '../../pages/contexts/userContext';
import { usefunctions } from '../../pages/contexts/functionContext';

//import { TransitionGroup } from 'react-transition-group';
import { formatNumber } from '../../utils/utils';

const CustomImg = ({ smalls, zoomimg, count }) => {
  return (
    <div className="d-flex">
      <div>
        <Image
          src={smalls[count]}
          alt={smalls[count]}
          onMouseEnter={() => zoomimg(smalls[count])}
          height={50}
          width={50}
        />
      </div>
      {smalls.length > 1 && (
        <div>
          <Image
            src={smalls[(count + 1) % smalls.length]}
            alt={smalls[(count + 1) % smalls.length]}
            onMouseEnter={() => zoomimg(smalls[(count + 1) % smalls.length])}
            height={50}
            width={50}
          />
        </div>
      )}
      {smalls.length > 2 && (
        <div>
          <Image
            src={smalls[(count + 2) % smalls.length]}
            alt={smalls[(count + 2) % smalls.length]}
            onMouseEnter={() => zoomimg(smalls[(count + 2) % smalls.length])}
            height={50}
            width={50}
          />
        </div>
      )}
      {smalls.length > 3 && (
        <div>
          <Image
            src={smalls[(count + 3) % smalls.length]}
            alt={smalls[(count + 3) % smalls.length]}
            onMouseEnter={() => zoomimg(smalls[(count + 3) % smalls.length])}
            height={50}
            width={50}
          />
        </div>
      )}
      {smalls.length > 4 && (
        <div>
          <Image
            src={smalls[(count + 4) % smalls.length]}
            alt={smalls[(count + 4) % smalls.length]}
            onMouseEnter={() => zoomimg(smalls[(count + 4) % smalls.length])}
            height={50}
            width={50}
          />
        </div>
      )}
    </div>
  );
};
export default function Post({ item, commentsins }) {
  const nextrouter = useRouter();
  var temp;
  const { id } = nextrouter.query;
  const inputEL = useRef(null);

  const [incdis, setIncdis] = useState(false);
  const [decdis, setDecdis] = useState(false);
  const [normalimage, setNormalimage] = useState(item.image[0]);

  const [count, setCount] = useState(0);
  const [many, setMany] = useState(false);

  const [stylestab1, setStylestab1] = useState(styles.tabactive);
  const [stylestab2, setStylestab2] = useState(styles.tab);
  const [stylestab3, setStylestab3] = useState(styles.tab);
  const [stylestab4, setStylestab4] = useState(styles.tab);

  const { user, tmpuser } = useUser();
  const { setUser, setTmpuser } = useUserDispatch();
  var usr = user || tmpuser;

  const { GetAllCarts, AddToCart } = usefunctions();
  const { instances } = useIns();
  const { setInstances, setInsLen, setItemCount, setTotal } = useInsDispatch();

  const handleCount = (e) => {
    var v = e.target.value.replace(/\D+/g, '').replace(/^0+/, '');
    inputEL.current.value = v;
    setIncdis(parseInt(inputEL.current.value) >= 999);
    setDecdis(parseInt(inputEL.current.value) <= 1);
  };

  const handleCart = () => {
    setIncdis(true);
    setDecdis(true);

    //hanle DB -> plus value
    AddToCart(
      inputEL.current.value,
      item._id,
      usr,
      setInstances,
      setInsLen,
      setItemCount,
      setTotal
    ).then(() => {
      if (inputEL.current) {
        setIncdis(parseInt(inputEL.current.value) >= 999);
        setDecdis(parseInt(inputEL.current.value) <= 1);
      }
    });
  };
  const handleIncrease = (e) => {
    inputEL.current.value = parseInt(inputEL.current.value) + 1;
    if (inputEL.current) {
      setIncdis(parseInt(inputEL.current.value) >= 999);
      setDecdis(parseInt(inputEL.current.value) <= 1);
    }
  };

  const handleDecrease = (e) => {
    inputEL.current.value = parseInt(inputEL.current.value) - 1;
    if (inputEL.current) {
      setIncdis(parseInt(inputEL.current.value) >= 999);
      setDecdis(parseInt(inputEL.current.value) <= 1);
    }
  };

  const handlefocus = () => {
    !inputEL.current.value && (inputEL.current.value = 1);
    if (inputEL.current) {
      setIncdis(parseInt(inputEL.current.value) >= 999);
      setDecdis(parseInt(inputEL.current.value) <= 1);
    }
  };

  useEffect(() => {
    if (item.image.length > 5) {
      // left right arrow are shown
      setMany(true);
    }
  }, []);

  useEffect(() => {
    setIncdis(parseInt(item.quantity) <= 1);
    setDecdis(parseInt(item.quantity) <= 1);
  }, []);

  useEffect(() => {
    if (!user) {
      //set user
      if (localStorage.getItem('key')) {
        temp = localStorage.getItem('key');
      } else {
        temp = Math.random()
          .toString(36)
          .replace(/[^a-z]+/g, '')
          .substr(0, 12);
        localStorage.setItem('key', temp);
      }
      setTmpuser(temp);
    }
  }, [user, tmpuser]);

  useEffect(() => {
    //set user
    usr && GetAllCarts(usr, setInstances, setInsLen, setItemCount, setTotal);
  }, [user, tmpuser]);

  const zoomimg = (src) => {
    setNormalimage(src);
  };

  const slideshowright = () => {
    setCount((count + 1) % item.image.length);
  };

  const slideshowleft = () => {
    setCount((count - 1 + item.image.length) % item.image.length);
  };
  // Render post...

  return (
    <Layout>
      <div key={item._id} className="container-fluid mt-3">
        <div className="row">
          <div className="col-sm-6">
            <div>
              <Image src={normalimage} height={400} width={400} />
            </div>

            <div className="d-flex">
              <span
                className={many ? styles.prev : styles.hidden}
                onClick={slideshowright}
              >
                <p className={styles.p}>-</p>
              </span>

              <CustomImg smalls={item.image} zoomimg={zoomimg} count={count} />
              <span
                className={many ? styles.next : styles.hidden}
                onClick={slideshowleft}
              >
                <p className={styles.p}>+</p>
              </span>
            </div>
          </div>

          <div className="col-sm-6">
            <h3 className="">{item.title}</h3>
            <pre className={styles.pre}>
              {`If you were a teardrop
In my eye 👀 , 
For fear of losing you, I would never cry. 
And if the golden sun, Should cease to shine its light, 
Just one smile from you, Would make my whole world bright.`}
            </pre>
            <p className={styles.description}>
              Price:
              <span className={styles.price}>{formatNumber(item.price)}</span>
            </p>
            <div className="">
              <div className={styles.inputwraper}>
                <input
                  type="text"
                  ref={inputEL}
                  onInput={handleCount}
                  onBlur={handlefocus}
                  //  onChange={handleCount}
                  //    className='form-control'
                  defaultValue="1"
                  className={styles.input}
                />

                <button
                  className={styles.add}
                  onClick={() => handleIncrease(item)}
                  // className='border border-left-0 text-center'
                  // href=''
                  disabled={incdis}
                >
                  +
                </button>
                <button
                  className={styles.minus}
                  // className='border border-left-0 border-top-0  text-center'
                  // href=''
                  onClick={() => handleDecrease(item)}
                  disabled={decdis}
                >
                  -
                </button>
              </div>
              <button
                // className={styles.btnaddtocart}
                className="btn btn-success"
                onClick={handleCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <ul className="col d-flex mt-3">
            <button
              //   className='flex-fill'
              className={stylestab1}
              onClick={() => {
                setStylestab1(styles.tabactive);

                setStylestab2(styles.tab);

                setStylestab3(styles.tab);

                setStylestab4(styles.tab);
              }}
            >
              Comments
            </button>

            <button
              className={stylestab2}
              onClick={() => {
                setStylestab2(styles.tabactive);

                setStylestab1(styles.tab);

                setStylestab3(styles.tab);

                setStylestab4(styles.tab);
              }}
            >
              Dream and Poetry
            </button>
            <button
              className={stylestab3}
              onClick={() => {
                setStylestab3(styles.tabactive);

                setStylestab1(styles.tab);

                setStylestab2(styles.tab);

                setStylestab4(styles.tab);
              }}
            >
              Never give up
            </button>

            <button
              // className={styles.tab}
              className={stylestab4}
              onClick={() => {
                setStylestab4(styles.tabactive);

                setStylestab1(styles.tab);

                setStylestab2(styles.tab);

                setStylestab3(styles.tab);
              }}
            >
              The Star ✨
            </button>
          </ul>
        </div>

        {stylestab1 === styles.tabactive && (
          <div>
            <div className="row">
              <div className="col-sm-2">user</div>
              <div className="col-sm-10">comments</div>
            </div>
            <hr />
            {commentsins.map((commentsin) => (
              <div key={commentsin._id}>
                <div className="row">
                  <div className="col-sm-2">{commentsin.user}</div>
                  <div className="col-sm-10">
                    <div className={styles.comment}>
                      {commentsin.commenttext}
                    </div>
                    {commentsin.commentimage.map((img) => (
                      <Image src={img} key={img} width={50} height={50} />
                    ))}
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
        )}

        {stylestab2 === styles.tabactive && (
          <pre className={styles.pre}>
            {`By chance they emerge in a dream,
Turning out infinite new patterns.
It’s all ordinary feelings,
AH ordinary words.
By chance they encounter a poet,
Turning out infinite new verses.
Once intoxicated,
one learns the strength of wine,
Once smitten,
one learns the power of love;
You cannot write my poems
Just as I can not dream your dreams.
                       - Hu Shi`}
          </pre>
        )}
        {stylestab3 === styles.tabactive && (
          <pre className={styles.pre}>{`Never give up, Never lose hope. 
Always have faith, It allows you to cope. 
Trying times will pass, As they always do. 
Just have patience, Your dreams will come true. 
So put on a smile, You'll live through your pain.
Know it will pass, And strength you will gain`}</pre>
        )}
        {stylestab4 === styles.tabactive && (
          <pre className={styles.pre}>{`Twinkle, twinkle, little star! 
How I wonder what you are, 
Up above the world so high, 
Like a diamond in the sky. `}</pre>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  //get items from db like index
  // Call an external API endpoint to get posts
  await dbConnect();

  // find all the data in our database
  const result = await Item.find({});
  const items = JSON.parse(JSON.stringify(result));

  // Get the paths we want to pre-render based on posts
  const paths = items.map((item) => ({ params: { id: item._id } }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: false,
    //fallback: true or false // See the "fallback" section below
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1

  await dbConnect();

  // find all the data in our database
  const result = await Item.findById(params.id);
  const item = JSON.parse(JSON.stringify(result));

  const result2 = await Iteminstance.find({
    item: params.id,
    commenttext: { $ne: null },
  });
  const commentsins = JSON.parse(JSON.stringify(result2));
  // Pass post data to the page via props
  return { props: { item, commentsins } };
}
