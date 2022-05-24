import Image from "next/image";
import logo from "../public/assets/images/logo.png";
import styles from "../styles/Header.module.css";

import { IoIosHeartEmpty } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [height] = useState(75);

  return (
    <div
      className={styles.container}
      style={{ height: `${height}px`, marginBottom: `${-height}px` }}
    >
      <div
        className={styles.under_content}
        style={{ marginBottom: `${-height}px` }}
      ></div>
      <div className={styles.content_wrapper}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Image src={logo} width={88} height={21} />
          </div>
          <ul className={styles.menu}>
            <li>Главная</li>
            <li>Каталог</li>
            <li>Условия доставки</li>
            <li>Контакты</li>
          </ul>
          <div className={styles.icons}>
            <div>
              <IoIosHeartEmpty size="27px" />
            </div>
            <div>
              <IoBagHandleOutline size="27px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
