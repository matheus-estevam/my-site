import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faCodeFork,
  faUser,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./NavbarLeft.module.css";
import { Link, NavLink } from "react-router-dom";

const NavbarLeft = () => {
  return (
    <nav>
      <ul className={styles.fixedElements}>
        <li>
          <FontAwesomeIcon
            icon={faUser}
            size="3x"
            style={{ color: "#ffffff" }}
          />
          <a href="#">Sobre mim</a>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faFileLines}
            size="3x"
            style={{ color: "#ffffff" }}
          />
          <a href="#">Currículo</a>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faCodeFork}
            size="3x"
            style={{ color: "#ffffff" }}
          />
          <a href="#">Portifólio</a>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faBookmark}
            size="3x"
            style={{ color: "#ffffff" }}
          />
          <a href="#">Recursos</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarLeft;
