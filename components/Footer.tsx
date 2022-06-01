import { useEffect, useState } from "react";
import styles from "../styles/Footer.module.css";
import { ISocial, IPayment } from "../types/types";
import Image from "next/image";
import logo from "../public/assets/images/logo_white.png";

const Footer = () => {
  const [socials, setSocials] = useState<ISocial[]>([]);
  const [payments, setPayments] = useState<IPayment[]>([]);

  useEffect(() => {
    const socials: ISocial[] = [
      {
        id: 1,
        link: "https://instagram.com",
        iconName: "instagram",
      },
      {
        id: 2,
        link: "https://watsup.com",
        iconName: "whatsapp",
      },
      {
        id: 3,
        link: "https://telegram.com",
        iconName: "telegram_foot",
      },
      {
        id: 4,
        link: "https://vkontakte.com",
        iconName: "vk",
      },
    ];

    const payments: IPayment[] = [
      {
        id: 1,
        iconName: "visa_logo",
      },
      {
        id: 2,
        iconName: "mastercard_logo",
        width: 50,
        height: 30,
      },
      {
        id: 3,
        iconName: "mir_logo",
      },
    ];

    setSocials(socials);
    setPayments(payments);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div>
            <Image src={logo} width="100px" height="50px" />
          </div>
          <div>
            <h5>Забота о клиентах</h5>
            <ul>
              <li>
                <a href="/info/deleviry">Условия доставки</a>
              </li>
              <li>
                <a href="/info/payment">Оплата</a>
              </li>
              <li>
                <a href="/info/recovery">Возврат и обмен</a>
              </li>
              <li>
                <a href="https://www.cdek.ru/ru/tracking" target="_blank">
                  Отслеживание заказа
                </a>
              </li>
              <li>
                <a href="/privacy-policy">Политика конфиденциальности</a>
              </li>
              <li>
                <a href="/oferta">Публичная оферта</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Контакты</h5>
            <ul>
              <li>
                <p>Санкт-Петербург, ул. Садовая 32</p>
              </li>
              <li>
                <a href="tel:111111111">1 (111) 111 - 11 - 11</a>
              </li>
              <li>
                <a href="email:shop_mail@mail.ru">shop_mail@mail.ru</a>
              </li>
              <li>
                <a href="https://t.me/" target="_blank">
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=1111111&text&app_absent=0"
                  target="_blank"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://vk.com/" target="_blank">
                  Vkontakte
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.copyright}>
            {new Date().getFullYear()} © shop.ru — интернет-магазин обуви
          </div>
          <div className={styles.socials}>
            {socials.map((social) => (
              <div key={social.id}>
                <a href={social.link}>
                  <Image
                    src={`/assets/images/${social.iconName}.svg`}
                    width="27px"
                    height="27px"
                  />
                </a>
              </div>
            ))}
          </div>
          <div className={styles.payments}>
            {payments.map((payment) => (
              <div key={payment.id}>
                <Image
                  src={`/assets/images/${payment.iconName}.svg`}
                  width={`${payment.width || 60}px`}
                  height={`${payment.height || 35}px`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
