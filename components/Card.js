import Image from 'next/image';
import Link from 'next/link';
import cls from 'classnames';
import styles from './Card.module.css';

const Card = (props) => {
  const imageSource = `/static/images/shops/${props.imgUrl}`;

  return (
    <Link href={props.href} className={styles.cardLink}>
      <div className={cls('glass', styles.container)}>
        <div className={styles.cardHeaderWrapper}>
          <h2 className={styles.cardHeader}>{props.name}</h2>
        </div>
        <div className={styles.cardImageWrapper}>
          <Image
            src={imageSource}
            width={260}
            height={160}
            alt={props.name}
            className={styles.cardImage}
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;
