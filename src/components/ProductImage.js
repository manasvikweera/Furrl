import React from 'react';
import share from '../assests/svg/share.svg';
import styles from '../styles/ProductImage.css';

const ProductImage = ({ position, image, title, onShare, url }) => {
  const isLargeImage = position % 10 === 2 || position % 10 === 7;

  return (
    <div className={styles.container}>
      <a href={url} className={styles.link}>
        <img
          className={`${isLargeImage ? styles.imageLarge : styles.imageSmall} ${styles.image}`}
          src={image[0].src}
          alt={title}
        />
      </a>
      <div className={styles.shareButton} onClick={onShare}>
        <img src={share} alt="Share" />
      </div>
    </div>
  );
};

export default ProductImage;
