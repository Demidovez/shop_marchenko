import { useEffect, useState } from "react";
import styles from "../styles/Filter.module.scss";
import { EOptionType, ICategory, IFilterOption } from "../types/types";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";

const Filter = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [options, setOptions] = useState<IFilterOption[]>([]);
  const [tags, setTags] = useState<string[]>([]);

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

    const options: IFilterOption[] = [
      {
        title: "Материал",
        type: EOptionType.SIMPLE_LIST,
        children: ["Натуральная кожа", "Текстиль", "Экокожа"],
      },
      {
        title: "Сезон",
        type: EOptionType.SIMPLE_LIST,
        children: ["Демисезонные", "Зима", "Лето"],
      },
      {
        title: "Цвет",
        type: EOptionType.CHECKBOX_LIST,
        children: ["Светлый", "Хаки", "Черный"],
      },
      {
        title: "Цена",
        type: EOptionType.PRICE,
      },
      {
        title: "Размер",
        type: EOptionType.CHECKBOX_LIST,
        children: [
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41",
          "L",
          "M",
          "One size",
          "S",
          "XL",
          "XS",
          "XXL",
        ],
      },
    ];

    setOptions(options);

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
      <div className={styles.options}>
        {options.map((option) => (
          <span key={option.title}>
            {option.title} <IoIosArrowDown />
          </span>
        ))}
      </div>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag}>
            <IoMdClose /> {tag}
          </span>
        ))}
        {tags.length > 1 && (
          <div className={styles.clear_all}>Очистить все</div>
        )}
      </div>
      <p className={styles.count_found}>Найдено: 6</p>
    </div>
  );
};

export default Filter;
