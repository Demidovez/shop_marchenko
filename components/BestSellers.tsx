import { useEffect, useState } from "react";
import styles from "../styles/BestSellers.module.css";
import { IProduct } from "../types/types";
import ProductCard from "./ProductCard";

const BestSellers = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const products: IProduct[] = [
      {
        id: 1,
        title: "Мягкие лоферы в черном оттенке",
        price_new: 4500,
        price_symbol: "р.",
        material: "пресованная кожа",
        seasons: ["весна", "лето"],
        images: ["IMG_6775.JPG", "IMG_4802_Facetune_22.jpg"],
      },
      {
        id: 2,
        title: "Женственные плетёные босоножки",
        price_new: 4900,
        price_symbol: "р.",
        material: "экокожа",
        seasons: ["лето"],
        images: ["IMG_8147_Facetune_24.jpeg", "IMG_5992.jpeg"],
      },
      {
        id: 3,
        title: "Белые сандалии с закрытым носом",
        price_new: 3800,
        price_old: 4500,
        price_symbol: "р.",
        images: ["IMG_7580.jpeg", "IMG_7572.jpeg.jpeg"],
      },
      {
        id: 4,
        title: "Сандалии в бежевом оттенке на липучках",
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
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
      <a href="">Смотреть хиты обуви</a>
    </div>
  );
};

export default BestSellers;
