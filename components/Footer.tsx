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
        iconName: "watsup",
      },
      {
        id: 3,
        link: "https://telegram.com",
        iconName: "telegram",
      },
      {
        id: 4,
        link: "https://vkontakte.com",
        iconName: "vkontakte",
      },
    ];

    const payments: IPayment[] = [
      {
        id: 1,
        iconName: "visa",
      },
      {
        id: 2,
        iconName: "mastercard",
      },
      {
        id: 3,
        iconName: "mir",
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
            <p>
              <a href="">Условия доставки</a>
            </p>
            <p>
              <a href="">Оплата</a>
            </p>
            <p>
              <a href="">Возврат и обмен</a>
            </p>
            <p>
              <a href="">Отслеживание заказа</a>
            </p>
            <p>
              <a href="">Политика конфиденциальности</a>
            </p>
            <p>
              <a href="">Публичная оферта</a>
            </p>
          </div>
          <div>
            <h5>Контакты</h5>
            <p>Санкт-Петербург, ул. Садовая 32</p>
            <p>
              <a href="tel:111111111">1 (111) 111 - 11 - 11</a>
            </p>
            <p>
              <a href="email:shop_mail@mail.ru">shop_mail@mail.ru</a>
            </p>
            <p>
              <a href="https://t.me/" target="_blank">
                Telegram
              </a>
            </p>
            <p>
              <a
                href="https://api.whatsapp.com/send/?phone=1111111&text&app_absent=0"
                target="_blank"
              >
                WhatsApp
              </a>
            </p>
            <p>
              <a href="https://vk.com/" target="_blank">
                Vkontakte
              </a>
            </p>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.copyright}>
            {new Date().getFullYear()} © shop.ru — интернет-магазин обуви
          </div>
          <div className={styles.socials}>
            {socials.map((social) => (
              <div>
                <Image
                  src="/assets/images/instagram.svg"
                  width="50px"
                  height="50px"
                />
              </div>
            ))}
          </div>
          <div className={styles.payments}>
            {payments.map((payment) => (
              <div>
                <Image
                  src="/assets/images/Visa_Inc_logo.svg"
                  width="50px"
                  height="50px"
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
