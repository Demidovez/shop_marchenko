import Image from "next/image";
import home_banner from "../public/assets/images/home_banner.jpeg";
import styles from "../styles/HomeBanner.module.css";

const HomeBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>New collection</h2>
        <a href="" className={styles.link}>
          Перейти в каталог
        </a>
      </div>
    </div>
  );
};

export default HomeBanner;
