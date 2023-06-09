import styles from './Banner.module.css';

const Banner = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Sandwich</span>
        <span className={styles.title2}>Connoisseur</span>
      </h1>
      <p className={styles.subTitle}>
        Discover the best sandwich shops near you
      </p>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={props.onBannerBtnClick}>
          {props.buttonText}
        </button>
      </div>
    </div>
  );
};

export default Banner;
