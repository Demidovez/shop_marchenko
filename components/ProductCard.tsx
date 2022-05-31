import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/ProductCard.module.css";
import { IProduct } from "../types/types";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const [info, setInfo] = useState<string[]>([]);

  useEffect(() => {
    let info: string[] = [];

    if (product.material) {
      info.push(product.material);
    }

    if (product.seasons) {
      info.push(product.seasons.join(", "));
    }

    setInfo(info);
  }, [product]);

  return (
    <div className={styles.container}>
      <div>
        <Image
          src="/assets/images/IMG_7580.jpeg"
          width="260px"
          height="400px"
        />
      </div>
      <h5>{product.title}</h5>
      <div className={styles.price}>
        <span>
          {product.price_new.toLocaleString()} {product.price_symbol}
        </span>
        {product.price_old && (
          <span>
            {product.price_old.toLocaleString()} {product.price_symbol}
          </span>
        )}
      </div>
      <p className={styles.info}>{info.join(" / ")}</p>
    </div>
  );
};

export default ProductCard;
