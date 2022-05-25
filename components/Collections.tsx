import Image from "next/image";
import { useEffect, useState } from "react";
import { ICollection } from "../types/types";
import styles from "../styles/Collections.module.css";

const Collections = () => {
  const [collectionList, setCollectionList] = useState<ICollection[]>([]);

  useEffect(() => {
    const list: ICollection[] = [
      {
        id: 1,
        title: "New collection",
        image: "IMG_0419.JPG",
      },
      {
        id: 2,
        title: "Весна/Осень",
        image: "photo.png",
      },
      {
        id: 3,
        title: "Лето",
        image: "IMG_0419.JPG",
      },
      {
        id: 4,
        title: "Зима",
        image: "photo.png",
      },
      {
        id: 5,
        title: "Sale",
        image: "IMG_0419.JPG",
      },
    ];

    setCollectionList(list);
  }, []);
  return (
    <div className={styles.container}>
      <h3>Коллекции</h3>
      <div className={styles.content}>
        <div className={styles.collections}>
          {collectionList.map((collection) => (
            <div>{collection.title}</div>
          ))}
        </div>
        <div className={styles.image}>
          <Image
            src="/assets/images/photo_colle.png"
            width="300px"
            height="500px"
          />
        </div>
      </div>
    </div>
  );
};

export default Collections;
