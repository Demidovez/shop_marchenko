import { useEffect, useState } from "react";
import styles from "../styles/Filter.module.scss";
import {
  EOptionType,
  ICategory,
  IFilterOption,
  IProduct,
} from "../types/types";
import { IoMdClose } from "react-icons/io";
import FilterOptions from "./FilterOptions";

interface IProps {
  products: IProduct[];
}

const Filter = ({ products }: IProps) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [selectOptionCat, setSelectOptionCat] = useState("");

  useEffect(() => {
    const categories: ICategory[] = [
      {
        id: 0,
        title: "New",
      },
      {
        id: 1,
        title: "Кроссовки и кеды",
      },
      {
        id: 2,
        title: "Лоферы и туфли",
      },
      {
        id: 3,
        title: "Сандалии и босоножки",
      },
      {
        id: 4,
        title: "Ботинки и сапоги",
      },
      {
        id: 5,
        title: "Летняя обувь",
      },
      {
        id: 6,
        title: "Весна/Осень",
      },
      {
        id: 7,
        title: "Зима",
      },
      {
        id: 8,
        title: "Одежда",
      },
      {
        id: 9,
        title: "Sale",
      },
    ];

    setCategories(categories);

    const tags: string[] = ["Демисезонные", "Натуральная кожа", "> 2000"];

    setTags(tags);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        <span>Все</span>
        {categories.map((category) => (
          <span key={category.id}>{category.title}</span>
        ))}
      </div>
      <FilterOptions products={products} />
      {/* <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag}>
            <IoMdClose /> {tag}
          </span>
        ))}
        {tags.length > 1 && (
          <div className={styles.clear_all}>Очистить все</div>
        )}
      </div>
      <p className={styles.count_found}>Найдено: 6</p> */}
    </div>
  );
};

export default Filter;
