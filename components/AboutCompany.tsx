import { useRef } from "react";
import useVisible from "../hooks/useVisible";
import styles from "../styles/AboutCompany.module.css";

const AboutCompany = () => {
  const titleRef = useRef(null);
  const isVisibleTitle = useVisible(titleRef);

  const contentRef = useRef(null);
  const isVisibleContent = useVisible(contentRef);

  const linkRef = useRef(null);
  const isVisibleLink = useVisible(linkRef);

  return (
    <div className={styles.container}>
      <div className={styles.video}>
        <video preload="auto" playsInline autoPlay loop muted>
          <source src="/assets/video/video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={styles.about}>
        <h3 ref={titleRef} className={`${isVisibleTitle && styles.visible_h3}`}>
          О компании
        </h3>
        <div
          ref={contentRef}
          className={`${styles.content} ${
            isVisibleContent && styles.visible_content
          }`}
        >
          <p>
            Мы собираем в нашем магазине самые трендовые позиции в стиле
            последних мировых тенденций.
          </p>
          <p>
            Работаем с крупнейшими фабриками напрямую, сохраняя для своих
            покупателей доступные цены.
            <br /> А свою премиум линейку мы изготавливаем на производстве в
            Санкт-Петербурге, используя высококачественные итальянские
            материалы.
          </p>
          <p>
            Наш offline магазин располагается в центре Санкт-Петербурга, ждём
            вас на примерку ежедневно!:)
          </p>
        </div>
        <a
          href="https://www.instagram.com/"
          className={`${styles.link} ${isVisibleLink && styles.visible_link}`}
          ref={linkRef}
        >
          Instagram
        </a>
      </div>
    </div>
  );
};

export default AboutCompany;
