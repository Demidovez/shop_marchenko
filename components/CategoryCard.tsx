import Image from "next/image";
import styles from "../styles/CategoryCard.module.css";
import { ICategory } from "../types/types";
import { VscArrowRight } from "react-icons/vsc";

interface IProps {
  category: ICategory;
}

const CategoryCard = ({ category }: IProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src="/assets/images/IMG_3423-min.jpeg"
          width="260px"
          height="400px"
        />
      </div>
      <h5>
        {category.title}{" "}
        <div className={styles.right}>
          <VscArrowRight size="22px" />
        </div>
      </h5>
    </div>
  );
};

export default CategoryCard;
