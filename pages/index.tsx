import type { NextPage } from "next";
import AboutCompany from "../components/AboutCompany";
import BestSellers from "../components/BestSellers";
import Collections from "../components/Collections";
import CompleteYourLook from "../components/CompleteYourLook";
import HomeBanner from "../components/HomeBanner";
import Layout from "../components/Layout";
import MovingString from "../components/MovingString";
import PopularCategories from "../components/PopularCategories";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
      <HomeBanner />
      <MovingString />
      <BestSellers />
      <PopularCategories />
      <CompleteYourLook />
      <Collections />
      <MovingString />
      <AboutCompany />
    </Layout>
  );
};

export default Home;
