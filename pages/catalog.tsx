import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import styles from "../styles/Catalog.module.scss";
import { EProductOption, IProduct } from "../types/types";

const Catalog: NextPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const products: IProduct[] = [
      {
        id: 1,
        title: "Мягкие лоферы в черном оттенке",
        link: "/product_1",
        price_new: 4500,
        price_symbol: "р.",
        material: "Пресованная кожа",
        seasons: ["Весна", "Лето"],
        color: "Светлый",
        sizes: ["35", "36", "37"],
        images: ["IMG_6775.jpeg", "IMG_4802_Facetune_22.jpeg"],
        options: [EProductOption.BEST],
      },
      {
        id: 2,
        title: "Женственные плетёные босоножки",
        link: "/product_2",
        price_new: 4900,
        price_symbol: "р.",
        material: "Экокожа",
        seasons: ["Лето"],
        sizes: ["35", "36", "37"],
        images: ["IMG_8147_Facetune_24.jpeg", "IMG_5992.jpeg"],
      },
      {
        id: 3,
        title: "Белые сандалии с закрытым носом",
        link: "/product_3",
        price_new: 3800,
        price_old: 4500,
        price_symbol: "р.",
        color: "Светлый",
        sizes: ["35", "36", "37"],
        images: ["IMG_7580.jpeg", "IMG_7572.jpeg"],
        options: [EProductOption.BEST, EProductOption.FAVORITE],
      },
      {
        id: 4,
        title: "Сандалии в бежевом оттенке на липучках",
        link: "/product_4",
        price_new: 3900,
        price_symbol: "р.",
        material: "Экокожа",
        seasons: ["Лето"],
        color: "Хаки",
        sizes: ["35", "36", "37"],
        images: ["IMG_4768.jpeg", "IMG_7631.jpeg"],
      },
      {
        id: 5,
        title: "Белые сандалии с закрытым носом",
        link: "/product_3",
        price_new: 3800,
        price_old: 4500,
        price_symbol: "р.",
        images: ["IMG_7580.jpeg", "IMG_7572.jpeg"],
        sizes: ["35", "36", "37"],
        options: [EProductOption.BEST, EProductOption.FAVORITE],
      },
      {
        id: 6,
        title: "Сандалии в бежевом оттенке на липучках",
        link: "/product_4",
        price_new: 3900,
        price_symbol: "р.",
        material: "Экокожа",
        color: "Светлый",
        seasons: ["Лето"],
        sizes: ["35", "36", "37"],
        images: ["IMG_4768.jpeg", "IMG_7631.jpeg"],
      },
      {
        id: 7,
        title: "Мягкие лоферы в черном оттенке",
        link: "/product_1",
        price_new: 4500,
        price_symbol: "р.",
        material: "Пресованная кожа",
        seasons: ["Весна", "Лето"],
        images: ["IMG_6775.jpeg", "IMG_4802_Facetune_22.jpeg"],
        sizes: ["35", "36", "37"],
        options: [EProductOption.BEST],
      },
      {
        id: 8,
        title: "Женственные плетёные босоножки",
        link: "/product_2",
        price_new: 4900,
        price_symbol: "р.",
        material: "Экокожа",
        seasons: ["Лето"],
        sizes: ["35", "36", "37"],
        images: ["IMG_8147_Facetune_24.jpeg", "IMG_5992.jpeg"],
      },
      {
        id: 9,
        title: "Белые сандалии с закрытым носом",
        link: "/product_3",
        price_new: 3800,
        price_old: 4500,
        color: "Светлый",
        price_symbol: "р.",
        images: ["IMG_7580.jpeg", "IMG_7572.jpeg"],
        sizes: ["35", "36", "37"],
        options: [EProductOption.BEST, EProductOption.FAVORITE],
      },
      {
        id: 10,
        title: "Мягкие лоферы в черном оттенке",
        link: "/product_1",
        price_new: 4500,
        price_symbol: "р.",
        color: "Светлый",
        material: "Пресованная кожа",
        seasons: ["Весна", "Лето"],
        images: ["IMG_6775.jpeg", "IMG_4802_Facetune_22.jpeg"],
        sizes: ["35", "36", "37"],
        options: [EProductOption.BEST],
      },
      {
        id: 11,
        title: "Женственные плетёные босоножки",
        link: "/product_2",
        price_new: 4900,
        price_symbol: "р.",
        color: "Светлый",
        material: "Экокожа",
        seasons: ["Лето"],
        sizes: ["35", "36", "37"],
        images: ["IMG_8147_Facetune_24.jpeg", "IMG_5992.jpeg"],
      },
      {
        id: 12,
        title: "Белые сандалии с закрытым носом",
        link: "/product_3",
        price_new: 3800,
        price_old: 4500,
        price_symbol: "р.",
        images: ["IMG_7580.jpeg", "IMG_7572.jpeg"],
        sizes: ["35", "36", "37"],
        options: [EProductOption.BEST, EProductOption.FAVORITE],
      },
      {
        id: 13,
        title: "Сандалии в бежевом оттенке на липучках",
        link: "/product_4",
        price_new: 3900,
        price_symbol: "р.",
        material: "Натуральная кожа",
        seasons: ["Лето"],
        sizes: ["35", "36", "37"],
        images: ["IMG_4768.jpeg", "IMG_7631.jpeg"],
      },
      {
        id: 14,
        title: "Белые сандалии с закрытым носом",
        link: "/product_3",
        price_new: 3800,
        price_old: 4500,
        price_symbol: "р.",
        color: "Светлый",
        images: ["IMG_7580.jpeg", "IMG_7572.jpeg"],
        sizes: ["35", "36", "37"],
        options: [EProductOption.BEST, EProductOption.FAVORITE],
      },
      {
        id: 15,
        title: "Сандалии в бежевом оттенке на липучках",
        link: "/product_4",
        price_new: 3900,
        price_symbol: "р.",
        material: "Экокожа",
        seasons: ["Лето"],
        sizes: ["35", "36", "37"],
        images: ["IMG_4768.jpeg", "IMG_7631.jpeg"],
      },
      {
        id: 16,
        title: "Мягкие лоферы в черном оттенке",
        link: "/product_1",
        price_new: 4500,
        price_symbol: "р.",
        material: "Пресованная кожа",
        seasons: ["Весна", "Лето"],
        color: "Светлый",
        images: ["IMG_6775.jpeg", "IMG_4802_Facetune_22.jpeg"],
        sizes: ["35", "36", "37"],
        options: [EProductOption.BEST],
      },
      {
        id: 17,
        title: "Женственные плетёные босоножки",
        link: "/product_2",
        price_new: 4900,
        price_symbol: "р.",
        material: "Экокожа",
        seasons: ["Лето"],
        sizes: ["35", "36", "37"],
        images: ["IMG_8147_Facetune_24.jpeg", "IMG_5992.jpeg"],
      },
      {
        id: 18,
        title: "Белые сандалии с закрытым носом",
        link: "/product_3",
        price_new: 3800,
        price_old: 4500,
        color: "Черный",
        price_symbol: "р.",
        images: ["IMG_7580.jpeg", "IMG_7572.jpeg"],
        sizes: ["35", "36", "37"],
        options: [EProductOption.BEST, EProductOption.FAVORITE],
      },
      {
        id: 19,
        title: "Мягкие лоферы в черном оттенке",
        link: "/product_1",
        price_new: 4500,
        price_symbol: "р.",
        material: "Пресованная кожа",
        seasons: ["Весна", "Лето"],
        sizes: ["35", "36", "37"],
        images: ["IMG_6775.jpeg", "IMG_4802_Facetune_22.jpeg"],
        options: [EProductOption.BEST],
      },
      {
        id: 20,
        title: "Женственные плетёные босоножки",
        link: "/product_2",
        price_new: 4900,
        price_symbol: "р.",
        material: "Экокожа",
        seasons: ["Лето"],
        sizes: ["35", "36", "37"],
        images: ["IMG_8147_Facetune_24.jpeg", "IMG_5992.jpeg"],
      },
      {
        id: 21,
        title: "Белые сандалии с закрытым носом",
        link: "/product_3",
        price_new: 3800,
        price_old: 4500,
        price_symbol: "р.",
        color: "Черный",
        sizes: ["S", "XL", "XS", "XXL"],
        images: ["IMG_7580.jpeg", "IMG_7572.jpeg"],
        options: [EProductOption.BEST, EProductOption.FAVORITE],
      },
      {
        id: 22,
        title: "Сандалии в бежевом оттенке на липучках",
        link: "/product_4",
        price_new: 3900,
        price_symbol: "р.",
        material: "Экокожа",
        seasons: ["Лето"],
        color: "Светлый",
        sizes: ["35", "36", "37"],
        images: ["IMG_4768.jpeg", "IMG_7631.jpeg"],
      },
      {
        id: 23,
        title: "Белые сандалии с закрытым носом",
        link: "/product_3",
        price_new: 3800,
        price_old: 4500,
        price_symbol: "р.",
        color: "Светлый",
        images: ["IMG_7580.jpeg", "IMG_7572.jpeg"],
        sizes: ["L", "M", "One size"],
        options: [EProductOption.BEST, EProductOption.FAVORITE],
      },
      {
        id: 24,
        title: "Сандалии в бежевом оттенке на липучках",
        link: "/product_4",
        price_new: 3900,
        price_symbol: "р.",
        material: "Экокожа",
        seasons: ["Лето"],
        sizes: ["35", "36", "37"],
        images: ["IMG_4768.jpeg", "IMG_7631.jpeg"],
      },
      {
        id: 25,
        title: "Мягкие лоферы в черном оттенке",
        link: "/product_1",
        price_new: 4500,
        price_symbol: "р.",
        material: "Пресованная кожа",
        seasons: ["Весна", "Лето"],
        sizes: ["35", "36", "37"],
        images: ["IMG_6775.jpeg", "IMG_4802_Facetune_22.jpeg"],
        options: [EProductOption.BEST],
      },
      {
        id: 26,
        title: "Женственные плетёные босоножки",
        link: "/product_2",
        price_new: 4900,
        price_symbol: "р.",
        material: "Экокожа",
        seasons: ["Лето"],
        color: "Хаки",
        sizes: ["L", "M", "One size"],
        images: ["IMG_8147_Facetune_24.jpeg", "IMG_5992.jpeg"],
      },
      {
        id: 27,
        title: "Белые сандалии с закрытым носом",
        link: "/product_3",
        price_new: 3800,
        price_old: 4500,
        price_symbol: "р.",
        sizes: ["38", "39", "40"],
        images: ["IMG_7580.jpeg", "IMG_7572.jpeg"],
        options: [EProductOption.BEST, EProductOption.FAVORITE],
      },
    ];

    setProducts(products);
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Каталог товаров</h1>
        <Filter products={products} />
        <div className={styles.products}>
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
        <div className={styles.pagination}>
          <a href="" className={styles.active}>
            1
          </a>
          <a href="">2</a>
        </div>
      </div>
    </Layout>
  );
};

export default Catalog;
