import { useEffect, useRef } from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "../styles/Layout.module.css";
import Scrollbar from "smooth-scrollbar";

const Layout = ({ children }: any) => {
  const scrollContentRef = useRef(null);

  useEffect(() => {
    scrollContentRef.current &&
      Scrollbar.init(scrollContentRef.current, {
        damping: 0.07,
        alwaysShowTracks: true,
      });

    return () => {
      Scrollbar.destroyAll();
    };
  }, []);

  return (
    <div>
      <Header />
      <div ref={scrollContentRef} className={styles.content}>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
