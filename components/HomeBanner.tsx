import useScrollPosition from "../hooks/useScrollPosition";
import styles from "../styles/HomeBanner.module.css";

const HomeBanner = () => {
  const scrollPosition = useScrollPosition();

  return (
    <div className={styles.container}>
      <div
        className={styles.content}
        style={{
          transform: `translateY(${-scrollPosition * 0.3}px)`,
        }}
      >
        <h2>New collection</h2>
        <a href="" className={styles.link}>
          Перейти в каталог
        </a>
      </div>
    </div>
  );
};

export default HomeBanner;
