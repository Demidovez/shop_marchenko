import type { NextPage } from "next";
import Filter from "../components/Filter";
import Layout from "../components/Layout";
import styles from "../styles/Catalog.module.scss";

const Catalog: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Каталог товаров</h1>
        <Filter />
        <div className={styles.products}></div>
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
