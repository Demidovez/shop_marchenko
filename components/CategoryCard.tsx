import Image from "next/image";
import styles from "../styles/CategoryCard.module.scss";
import { ICategory } from "../types/types";
import { VscArrowRight } from "react-icons/vsc";
import { useRef } from "react";
import useVisible from "../hooks/useVisible";

interface IProps {
  category: ICategory;
}

const CategoryCard = ({ category }: IProps) => {
  const lineRef = useRef(null);
  const isVisibleLine = useVisible(lineRef);

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <a href={category.link}>
          <Image
            src="/assets/images/IMG_3423-min.jpeg"
            width="260px"
            height="400px"
          />
        </a>
      </div>
      <h5>
        <a href={category.link}>
          {category.title}{" "}
          <div className={styles.right}>
            <VscArrowRight size="22px" />
          </div>
        </a>
      </h5>
      <div
        className={`${styles.line} ${isVisibleLine && styles.visible_line}`}
        ref={lineRef}
      />
    </div>
  );
};

export default CategoryCard;
