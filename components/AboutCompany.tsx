import styles from "../styles/AboutCompany.module.css";

const AboutCompany = () => {
  return (
    <div className={styles.container}>
      <div className={styles.video}>
        <video preload="auto" playsInline autoPlay loop muted>
          <source src="/assets/video/video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={styles.about}>
        <h3>О компании</h3>
        <p>
          Мы собираем в нашем магазине самые трендовые позиции в стиле последних
          мировых тенденций.
        </p>
        <p>
          Работаем с крупнейшими фабриками напрямую, сохраняя для своих
          покупателей доступные цены.
          <br /> А свою премиум линейку мы изготавливаем на производстве в
          Санкт-Петербурге, используя высококачественные итальянские материалы.
        </p>
        <p>
          Наш offline магазин располагается в центре Санкт-Петербурга, ждём вас
          на примерку ежедневно!:)
        </p>
        <a href="">Instagram</a>
      </div>
    </div>
  );
};

export default AboutCompany;
