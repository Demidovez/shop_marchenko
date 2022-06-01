import { useEffect, useRef, useState } from "react";
import useVisible from "../hooks/useVisible";
import styles from "../styles/PopularCategories.module.css";
import { ICategory } from "../types/types";
import CategoryCard from "./CategoryCard";

const PopularCategories = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  const titleRef = useRef(null);
  const isVisibleTitle = useVisible(titleRef);

  useEffect(() => {
    const categories: ICategory[] = [
      {
        id: 1,
        title: "Одежда",
        image: "IMG_6775.JPG",
      },
      {
        id: 2,
        title: "Кроссовки и кеды",
        image: "IMG_6775.JPG",
      },
      {
        id: 3,
        title: "Лоферы и туфли",
        image: "IMG_6775.JPG",
      },
      {
        id: 4,
        title: "Боссоножки и сандалии",
        image: "IMG_6775.JPG",
      },
    ];

    setCategories(categories);
  }, []);

  return (
    <div className={styles.container}>
      <h3 ref={titleRef} className={`${isVisibleTitle && styles.visible_h3}`}>
        Популярные категории
      </h3>
      <div className={styles.categories}>
        {categories.map((category) => (
          <CategoryCard category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
