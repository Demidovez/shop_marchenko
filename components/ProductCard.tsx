import Image from "next/image";
import styles from "../styles/ProductCard.module.css";
import { IProduct } from "../types/types";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
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
      <div>
        <span>
          {product.price_new} {product.price_symbol}
        </span>
        <span>
          {product.price_old} {product.price_symbol}
        </span>
      </div>
      <p>
        {product.material} / {product.seasons?.join(", ")}
      </p>
    </div>
  );
};

export default ProductCard;
