import { useEffect, useState } from "react";
import styles from "../styles/FilterOptions.module.scss";
import { EOptionType, IFilterOption, IProduct } from "../types/types";
import { IoIosArrowDown } from "react-icons/io";

interface IProps {
  products: IProduct[];
}

const FilterOptions = ({ products }: IProps) => {
  const [options, setOptions] = useState<IFilterOption[]>([]);
  const [selectOptionCat, setSelectOptionCat] = useState("");
  const [titleOptions] = useState({
    material: "Материал",
    season: "Сезон",
    color: "Цвет",
    price: "Цена",
    size: "Размер",
  });

  useEffect(() => {
    const options: IFilterOption[] = [
      {
        name: "material",
        type: EOptionType.SIMPLE_LIST,
        children: ["Натуральная кожа", "Текстиль", "Экокожа"],
      },
      {
        name: "season",
        type: EOptionType.SIMPLE_LIST,
        children: ["Демисезонные", "Зима", "Лето"],
      },
      {
        name: "color",
        type: EOptionType.CHECKBOX_LIST,
        children: ["Светлый", "Хаки", "Черный"],
      },
      {
        name: "price",
        type: EOptionType.PRICE,
        children: ["1800", "3500"],
      },
      {
        name: "size",
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

    const handleClickOutside = () => setSelectOptionCat("");

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onSelectOptionCat = (name: string) => {
    setSelectOptionCat(name);
  };

  return (
    <div className={styles.options}>
      {options.map((option) => (
        <div
          onClick={onSelectOptionCat.bind(this, option.name)}
          key={option.name}
        >
          <span
            className={selectOptionCat === option.name ? styles.active : ""}
          >
            {(titleOptions as any)[option.name]} <IoIosArrowDown />
          </span>
          <div
            className={`${styles.option_children} ${
              selectOptionCat === option.name && styles.active
            }`}
          >
            {option.type === EOptionType.SIMPLE_LIST &&
              option.children?.map((child) => <div key={child}>{child}</div>)}
            {option.type === EOptionType.CHECKBOX_LIST &&
              option.children?.map((child) => <div key={child}>{child}</div>)}
            {option.type === EOptionType.PRICE &&
              option.children?.map((child) => <div key={child}>{child}</div>)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterOptions;
