import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ICollection } from "../types/types";
import styles from "../styles/Collections.module.scss";
import { VscArrowRight } from "react-icons/vsc";
import useVisible from "../hooks/useVisible";

const Collections = () => {
  const [collectionList, setCollectionList] = useState<ICollection[]>([]);
  const [hoverCollection, setHoverCollection] = useState("");

  const titleRef = useRef(null);
  const isVisibleTitle = useVisible(titleRef);

  useEffect(() => {
    const list: ICollection[] = [
      {
        id: 1,
        title: "New collection",
        image: "photo.png",
        link: "/catalog-new",
      },
      {
        id: 2,
        title: "Весна/Осень",
        image: "IMG_0419.jpeg",
        link: "/catalog-spring-autumn",
      },
      {
        id: 3,
        title: "Лето",
        image: "photo.png",
        link: "/catalog-summer",
      },
      {
        id: 4,
        title: "Зима",
        image: "IMG_0419.jpeg",
        link: "/catalog-winter",
      },
      {
        id: 5,
        title: "Sale",
        image: "photo.png",
        link: "/catalog-sale",
      },
    ];

    setCollectionList(list);
  }, []);

  const onHoverCategory = (collection: string) => {
    setHoverCollection(collection);
  };

  return (
    <div className={styles.container}>
      <h3 ref={titleRef} className={`${isVisibleTitle && styles.visible_h3}`}>
        Коллекции
      </h3>
      <div className={styles.content}>
        <div className={styles.collections}>
          {collectionList.map((collection) => (
            <div
              key={collection.id}
              onMouseEnter={onHoverCategory.bind(this, collection.title)}
              onMouseLeave={onHoverCategory.bind(this, "")}
            >
              <a href={collection.link}>
                {collection.title}{" "}
                <div className={styles.right}>
                  <VscArrowRight size="38px" />
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className={styles.images}>
          <div
            className={`${styles.image} ${
              hoverCollection === ""
                ? styles.image_active
                : styles.image_inactive
            }`}
          >
            <Image
              src={`/assets/images/photo_colle.png`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          {collectionList.map((collection, index) => (
            <div
              className={`${styles.image} ${
                hoverCollection === collection.title
                  ? styles.image_active
                  : styles.image_inactive
              }`}
              key={collection.id}
            >
              <Image
                src={`/assets/images/${collection.image}`}
                layout="fill"
                objectFit="none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
