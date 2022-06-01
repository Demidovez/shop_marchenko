import { useEffect, useRef, useState } from "react";
import useVisible from "../hooks/useVisible";
import styles from "../styles/BestSellers.module.scss";
import { EProductOption, IProduct } from "../types/types";
import ProductCard from "./ProductCard";

const BestSellers = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const linkRef = useRef(null);
  const isVisibleLink = useVisible(linkRef);

  useEffect(() => {
    const products: IProduct[] = [
      {
        id: 1,
        title: "Мягкие лоферы в черном оттенке",
        link: "/product_1",
        price_new: 4500,
        price_symbol: "р.",
        material: "пресованная кожа",
        seasons: ["весна", "лето"],
        images: ["IMG_6775.jpeg", "IMG_4802_Facetune_22.jpeg"],
        options: [EProductOption.BEST],
      },
      {
        id: 2,
        title: "Женственные плетёные босоножки",
        link: "/product_2",
        price_new: 4900,
        price_symbol: "р.",
        material: "экокожа",
        seasons: ["лето"],
        images: ["IMG_8147_Facetune_24.jpeg", "IMG_5992.jpeg"],
      },
      {
        id: 3,
        title: "Белые сандалии с закрытым носом",
        link: "/product_3",
        price_new: 3800,
        price_old: 4500,
        price_symbol: "р.",
        images: ["IMG_7580.jpeg", "IMG_7572.jpeg"],
        options: [EProductOption.BEST, EProductOption.FAVORITE],
      },
      {
        id: 4,
        title: "Сандалии в бежевом оттенке на липучках",
        link: "/product_4",
        price_new: 3900,
        price_symbol: "р.",
        material: "экокожа",
        seasons: ["лето"],
        images: ["IMG_4768.jpeg", "IMG_7631.jpeg"],
      },
    ];

    setProducts(products);
  }, []);

  return (
    <div className={styles.container}>
      <h3>Бестселлеры</h3>
      <div className={styles.products}>
        {products.map((product, index) => (
          <ProductCard product={product} key={product.id} order={index} />
        ))}
      </div>
      <a
        href="/catalog"
        className={`${styles.link} ${isVisibleLink && styles.visible_link}`}
        ref={linkRef}
      >
        Смотреть хиты обуви
      </a>
    </div>
  );
};

export default BestSellers;
