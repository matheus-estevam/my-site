import React, { useContext } from "react";
import styles from "./Portfolio.module.css";
import ThemeContext from "../Context/ThemeContext";
const Portfolio = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section>
      <h2
        className={`${styles.title} ${
          theme === "light" ? styles.lightTheme : styles.darkTheme
        }`}
        id="h2"
      >
        Portfólio
      </h2>
      <div className={styles.portfolioContainer}>
        <a
          href="https://github.com/matheus-estevam/clone-tabnews"
          target="_blank"
          rel="noreferrer"
        >
          {theme === "light" ? (
            <img src="https://github-readme-stats.vercel.app/api/pin/?username=matheus-estevam&repo=clone-tabnews"></img>
          ) : (
            <img src="https://github-readme-stats.vercel.app/api/pin/?username=matheus-estevam&repo=clone-tabnews&theme=tokyonight"></img>
          )}
        </a>
        <a
          href="https://github.com/matheus-estevam/Advice-Generator"
          target="_blank"
          rel="noreferrer"
        >
          {theme === "light" ? (
            <img src="https://github-readme-stats.vercel.app/api/pin/?username=matheus-estevam&repo=Advice-Generator"></img>
          ) : (
            <img src="https://github-readme-stats.vercel.app/api/pin/?username=matheus-estevam&repo=Advice-Generator&theme=tokyonight"></img>
          )}
        </a>
        <a
          href="https://github.com/matheus-estevam/Conversor-De-Berries-Para-Real"
          target="_blank"
          rel="noreferrer"
        >
          {theme === "light" ? (
            <img src="https://github-readme-stats.vercel.app/api/pin/?username=matheus-estevam&repo=Conversor-De-Berries-Para-Real"></img>
          ) : (
            <img src="https://github-readme-stats.vercel.app/api/pin/?username=matheus-estevam&repo=Conversor-De-Berries-Para-Real&theme=tokyonight"></img>
          )}
        </a>
        <a
          href="https://github.com/matheus-estevam/Buscador-De-Cep"
          target="_blank"
          rel="noreferrer"
        >
          {theme === "light" ? (
            <img src="https://github-readme-stats.vercel.app/api/pin/?username=matheus-estevam&repo=Buscador-De-Cep"></img>
          ) : (
            <img src="https://github-readme-stats.vercel.app/api/pin/?username=matheus-estevam&repo=Buscador-De-Cep&theme=tokyonight"></img>
          )}
        </a>
        <a
          href="https://github.com/matheus-estevam/Rock-Paper-Scissors-UI"
          target="_blank"
          rel="noreferrer"
        >
          {theme === "light" ? (
            <img src="https://github-readme-stats.vercel.app/api/pin/?username=matheus-estevam&repo=Rock-Paper-Scissors-UI"></img>
          ) : (
            <img src="https://github-readme-stats.vercel.app/api/pin/?username=matheus-estevam&repo=Rock-Paper-Scissors-UI&theme=tokyonight"></img>
          )}
        </a>
        <a
          href="https://github.com/matheus-estevam/animal-fun-fact"
          target="_blank"
          rel="noreferrer"
        >
          {theme === "light" ? (
            <img src="https://github-readme-stats.vercel.app/api/pin/?username=matheus-estevam&repo=animal-fun-fact"></img>
          ) : (
            <img src="https://github-readme-stats.vercel.app/api/pin/?username=matheus-estevam&repo=animal-fun-fact&theme=tokyonight"></img>
          )}
        </a>
        <a
          href="https://github.com/matheus-estevam/tip-calculator"
          target="_blank"
          rel="noreferrer"
        >
          {theme === "light" ? (
            <img src="https://github-readme-stats.vercel.app/api/pin/?username=matheus-estevam&repo=tip-calculator"></img>
          ) : (
            <img src="https://github-readme-stats.vercel.app/api/pin/?username=matheus-estevam&repo=tip-calculator&theme=tokyonight"></img>
          )}
        </a>
        <a
          href="https://github.com/matheus-estevam/mini-calendar"
          target="_blank"
          rel="noreferrer"
        >
          {theme === "light" ? (
            <img src="https://github-readme-stats.vercel.app/api/pin/?username=matheus-estevam&repo=mini-calendar"></img>
          ) : (
            <img src="https://github-readme-stats.vercel.app/api/pin/?username=matheus-estevam&repo=mini-calendar&theme=tokyonight"></img>
          )}
        </a>
      </div>
      <div className={styles.iconsContainer}>
        <img
          alt="Javascript"
          src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
        ></img>
        <img
          alt="HTML"
          src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
        ></img>
        <img
          alt="CSS"
          src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
        ></img>
        <img
          alt="React"
          src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
        ></img>
      </div>
    </section>
  );
};

export default Portfolio;
