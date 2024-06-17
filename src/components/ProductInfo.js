import React from "react";
import styles from "../styles/ProductInfo.css"; 

const ProductTitle = ({ title, position }) => {
  const maxLength = position % 10 === 2 || position % 10 === 7 ? 48 : 22;
  const displayTitle =
    title.length > maxLength ? `${title.slice(0, maxLength)}...` : title;

  return <p className={styles["product-title"]}>{displayTitle}</p>;
};

const ProductPrice = ({ price, mrp, discountPercent }) => {
  return (
    <div className={styles["product-price"]}>
      <span className="font-bold">Rs. {price.value}</span>
      {mrp && mrp.value && mrp.value !== price.value && (
        <>
          <span className={styles["product-mrp"]}>Rs. {mrp.value}</span>
          <span className={styles["product-discount"]}>{discountPercent}%</span>
        </>
      )}
    </div>
  );
};

const ProductInfo = ({
  brand,
  title,
  position,
  price,
  mrp,
  discountPercent,
  url,
}) => {
  return (
    <a href={url} className={styles["product-info-container"]}>
      <div className={styles["product-brand"]}>{brand[0].name}</div>
      <div>
        <ProductTitle title={title} position={position} />
        <ProductPrice
          price={price}
          mrp={mrp}
          discountPercent={discountPercent}
        />
      </div>
    </a>
  );
};

export default ProductInfo;
