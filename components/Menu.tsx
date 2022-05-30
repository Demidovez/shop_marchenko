import styles from "../styles/Menu.module.css";
import {
  AiFillCaretDown,
  AiFillCaretRight,
  AiFillCaretUp,
} from "react-icons/ai";
import { useState } from "react";
import { IMenuItem } from "../types/types";

interface IProps {
  menu: IMenuItem[];
}

const Menu = ({ menu }: IProps) => {
  const [hoverCategory, setHoverCategory] = useState("");

  const onHoverCategory = (category?: string) => {
    setHoverCategory(category || "");
  };

  return (
    <ul className={styles.menu}>
      {menu.map((item) => (
        <li key={item.title}>
          <a href={item.link}>
            {item.title}{" "}
            {item.children && (
              <AiFillCaretDown size="12px" style={{ marginTop: "4px" }} />
            )}
          </a>
          {item.children && (
            <div
              className={styles.children_wrapper}
              onMouseLeave={onHoverCategory.bind(this, "")}
            >
              <div className={styles.children}>
                <AiFillCaretUp size="35px" className={styles.arrow_up} />
                {item.children.map((child) => (
                  <p onMouseEnter={onHoverCategory.bind(this, child.title)}>
                    {child.link ? (
                      <a href={child.link}>{child.title}</a>
                    ) : (
                      child.title
                    )}
                    {child.children && (
                      <AiFillCaretRight
                        size="10px"
                        className={styles.arrow_right}
                        style={{
                          transform: `rotate(${
                            hoverCategory === child.title ? 180 : 0
                          }deg)`,
                        }}
                      />
                    )}
                  </p>
                ))}
              </div>

              {item.children.map(
                (child) =>
                  child.children && (
                    <div
                      className={styles.sub_children_wrapper}
                      style={{
                        display:
                          hoverCategory === child.title ? "inherit" : "none",
                      }}
                    >
                      <div className={styles.left_side}></div>
                      <div className={styles.sub_children}>
                        {child.children.map((child) => (
                          <a href={child.link}>{child.title}</a>
                        ))}
                      </div>
                    </div>
                  )
              )}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
