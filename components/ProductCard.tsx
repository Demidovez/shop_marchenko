import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/ProductCard.module.css";
import { EProductOption, IProduct } from "../types/types";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import useVisible from "../hooks/useVisible";

interface IProps {
  product: IProduct;
  order?: number;
}

const ProductCard = ({ product, order = 0 }: IProps) => {
  const [info, setInfo] = useState<string[]>([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isBest, setIsBest] = useState(false);

  const cardRef = useRef(null);
  const isVisibleCard = useVisible(cardRef);

  useEffect(() => {
    let info: string[] = [];

    if (product.material) {
      info.push(product.material);
    }

    if (product.seasons) {
      info.push(product.seasons.join(", "));
    }

    product.options?.map((option) => {
      option === EProductOption.BEST && setIsBest(true);
      option === EProductOption.FAVORITE && setIsFavorite(true);
    });

    setInfo(info);
  }, [product]);

  const onFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      className={`${styles.container} ${isVisibleCard && styles.visible_card}`}
      ref={cardRef}
      style={{ animationDelay: `${order / 10}s` }}
    >
      <div className={styles.icons}>
        <div>{isBest && <div className={styles.best}>BEST</div>}</div>
        <div>
          <div className={styles.favorite} onClick={onFavorite}>
            {isFavorite ? (
              <IoMdHeart size="27px" color="#ed5952" />
            ) : (
              <IoMdHeartEmpty size="27px" />
            )}
          </div>
        </div>
      </div>
      <div className={styles.images}>
        {product.images.map((image) => (
          <div key={image} className={styles.image}>
            <a href={product.link}>
              <Image
                src={`/assets/images/${image}`}
                layout="fill"
                objectFit="cover"
              />
            </a>
          </div>
        ))}
      </div>
      <h5>
        <a href={product.link}>{product.title}</a>
      </h5>
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
