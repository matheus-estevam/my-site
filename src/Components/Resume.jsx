import React, { useContext } from "react";
import styles from "./Resume.module.css";
import pdfFile from "../ResumePdf/Matheus Estevam de Oliveira.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import ThemeContext from "../Context/ThemeContext";
const Resume = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section>
      <h2
        className={`${styles.title} ${
          theme === "light" ? styles.lightTheme : styles.darkTheme
        }`}
        id="title"
      >
        Currículo
      </h2>
      <iframe src={pdfFile} width="100%" height="800px"></iframe>
      <p
        className={`${styles.textDownload} ${
          theme === "light" ? styles.lightTheme : styles.darkTheme
        }`}
      >
        Download
      </p>
      <a href={pdfFile} className={styles.linkDownload} download>
        <FontAwesomeIcon icon={faFilePdf} size="5xs" />
        PDF Download
      </a>
    </section>
  );
};

export default Resume;
