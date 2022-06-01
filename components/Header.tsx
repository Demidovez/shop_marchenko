import Image from "next/image";
import logo from "../public/assets/images/logo.png";
import styles from "../styles/Header.module.scss";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { useState } from "react";
import { IMenuItem } from "../types/types";
import Menu from "./Menu";
import useScrollPosition from "../hooks/useScrollPosition";

const Header = () => {
  const [height] = useState(75);

  const scrollPosition = useScrollPosition();

  const [menu] = useState<IMenuItem[]>([
    {
      title: "Главная",
      link: "/",
    },
    {
      title: "Каталог",
      link: "/catalog",
      children: [
        {
          title: "Одежда",
          link: "/clothes",
        },
        {
          title: "Обувь",
          children: [
            {
              title: "Sale",
              link: "/sale",
            },
            {
              title: "New collection",
              link: "/new",
            },
            {
              title: "Ботинки и сапоги",
              link: "/boots",
            },
            {
              title: "Кроссовки и кеды",
              link: "/sneakers",
            },
            {
              title: "Лоферы и туфли",
              link: "/loafers",
            },
            {
              title: "Боссоножки и сандалии",
              link: "/sandals",
            },
          ],
        },
      ],
    },
    {
      title: "Условия доставки",
      link: "/info/deleviry",
    },
    {
      title: "Контакты",
      link: "/info/contacts",
    },
  ]);

  return (
    <div
      className={styles.container}
      style={{ height: `${height}px`, marginBottom: `${-height}px` }}
    >
      <div
        className={styles.under_content}
        style={{ marginBottom: `${-height}px`, top: `${-scrollPosition}px` }}
      ></div>
      <div className={styles.content_wrapper}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <a href="/">
              {" "}
              <Image src={logo} width={88} height={21} />
            </a>
          </div>
          <Menu menu={menu} />
          <div className={styles.icons}>
            <div className={styles.favorites}>
              <a href="/favorites">
                <IoIosHeartEmpty size="27px" />
              </a>
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
