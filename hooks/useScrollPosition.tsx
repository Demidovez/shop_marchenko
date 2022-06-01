import { useEffect, useState } from "react";
import Scrollbar from "smooth-scrollbar";
import { ScrollListener } from "smooth-scrollbar/interfaces";

export default function useScrollPosition(): number {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const scrollbar = Scrollbar.getAll()[0];

      const listener: ScrollListener = ({ offset }) => {
        setPosition(offset.y);
      };

      scrollbar && scrollbar.addListener(listener);

      return () => {
        if (listener && scrollbar) scrollbar.removeListener(listener);
      };
    }, 0);
  }, []);

  return position;
}
