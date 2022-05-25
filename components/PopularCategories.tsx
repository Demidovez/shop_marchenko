import { useEffect, useState } from "react";
import styles from "../styles/PopularCategories.module.css";
import { ICategory } from "../types/types";
import CategoryCard from "./CategoryCard";

const PopularCategories = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    const categories: ICategory[] = [
      {
        id: 1,
        title: "Мягкие лоферы в черном оттенке",
        images: "IMG_6775.JPG",
      },
      {
        id: 2,
        title: "Мягкие лоферы в черном оттенке",
        images: "IMG_6775.JPG",
      },
      {
        id: 3,
        title: "Мягкие лоферы в черном оттенке",
        images: "IMG_6775.JPG",
      },
      {
        id: 4,
        title: "Мягкие лоферы в черном оттенке",
        images: "IMG_6775.JPG",
      },
    ];

    setCategories(categories);
  }, []);

  return (
    <div className={styles.container}>
      <h3>Популярные категории</h3>
      <div className={styles.categories}>
        {categories.map((category) => (
          <CategoryCard category={category} />
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
