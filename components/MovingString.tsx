import { useEffect, useState } from "react";
import styles from "../styles/MovingString.module.scss";

const listTexts = ['Скидка 10% на первую покупку по промокоду "HELLO"'];

const MovingString = () => {
  const [textLines, setTextLines] = useState<string[]>([]);

  useEffect(() => {
    const lines = listTexts;

    if (listTexts.length < 10) {
      for (let i = 0; i < 10 - listTexts.length; i++) {
        lines.push(listTexts[i % listTexts.length]);
      }
    }

    setTextLines(lines);
  }, []);

  return (
    <div className={styles.container}>
      <div>{textLines.join("\xa0\xa0 / \xa0\xa0")}</div>
    </div>
  );
};

export default MovingString;
