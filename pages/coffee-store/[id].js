import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cls from 'classnames';
// import coffeeStoreData from '../../data/coffee-stores.json';
import styles from '../../styles/coffee-store.module.css';
import { fetchRestaurantData } from '../../lib/restaurant_api';

export async function getStaticProps(context) {
  const id = context.params.id;

  const coffeeStoreData = await fetchRestaurantData();
  const store = coffeeStoreData.find((store) => store.id.toString() === id);
  return {
    props: {
      store,
    },
  };
}

export async function getStaticPaths() {
  const coffeeStoreData = await fetchRestaurantData();
  const paths = coffeeStoreData.map((store) => {
    console.log(store);
    return { params: { id: store.id.toString() } };
  });
  return {
    paths,
    fallback: true,
  };
}

const CoffeeShopPage = (props) => {
  const handleUpvoteButton = () => {
    console.log('upVote, Thanks');
  };
  const router = useRouter();
  if (router.isFallback) {
    return <div>Fetching and Loading data now...</div>;
  }

  const { address, imgUrl, name, neighborhood } = props.store;
  const imageSource = `/static/images/shops/${imgUrl}`;

  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.column1}>
          <div className={styles.backToHomeLink}>
            <div className={styles.iconWrapper}>
              <Image
                src="/static/icons/backToHome.svg"
                width="24"
                height="24"
                alt="backIcon"
              />
              <p className={styles.text}>
                <Link href="/"> Return to Home Page</Link>
              </p>
            </div>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <Image
            src={imageSource}
            height={240}
            width={400}
            className={styles.storeImg}
            alt={name}
          />
        </div>
        <div className={cls('glass', styles.column2)}>
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/places.svg"
              width="24"
              height="24"
              alt="placesIcon"
            />
            <p className={styles.text}>{address}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/nearMe.svg"
              width="24"
              height="24"
              alt="nearMeIcon"
            />
            <p className={styles.text}>{neighborhood}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/star.svg"
              width="24"
              height="24"
              alt="starIcon"
            />
            <p className={styles.text}>1</p>
          </div>

          <button className={styles.upvoteButton} onClick={handleUpvoteButton}>
            Up vote!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeShopPage;
