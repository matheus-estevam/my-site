import React, { useContext } from "react";
import styles from "./Resources.module.css";
import ThemeContext from "../Context/ThemeContext";
const Resources = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section>
      <h2
        className={`${styles.title} ${
          theme === "light" ? styles.lightTheme : styles.darkTheme
        }`}
        id="h2"
      >
        Recursos
      </h2>
      <table
        className={`${styles.resourceTable} ${
          theme === "light" ? styles.lightTheme : styles.darkTheme
        }`}
      >
        <thead>
          <tr>
            <th>Nome</th>
            <th>Ano</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>João</td>
            <td>Silva</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Maria</td>
            <td>Souza</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Carlos</td>
            <td>Oliveira</td>
            <td>35</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Resources;
