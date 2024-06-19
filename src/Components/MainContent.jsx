import React, { useContext } from "react";
import styles from "./MainContent.module.css";
import MainHead from "./MainHead";
import Intro from "./Intro";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Resources from "./Resources";
import ThemeContext from "../Context/ThemeContext";

const MainContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      className={`${styles.container} ${
        theme === "light" ? styles.lightTheme : styles.darkTheme
      }`}
    >
      <MainHead />
      <Intro />
      <Resume />
      <Portfolio />
      <Resources />
    </main>
  );
};

export default MainContent;
