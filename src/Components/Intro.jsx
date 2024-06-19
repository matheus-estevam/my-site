import React, { useState, useEffect, useContext } from "react";
import styles from "./Intro.module.css";
import ThemeContext from "../Context/ThemeContext";

const Intro = () => {
  const [activeButton, setActiveButton] = useState("default");
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const defaultContent = document.getElementById("default");
    defaultContent.classList.add("active");
  }, []);

  function viewContent(e) {
    const element = e.target.value;
    setActiveButton(element);
    const contents = document.querySelectorAll(".content");
    contents.forEach((content) => {
      content.classList.remove("active");
      if (element === content.id) {
        content.classList.add("active");
      }
    });
  }

  return (
    <section>
      <div className={styles.buttonsContainer}>
        <button
          className={`${styles.button} ${
            activeButton === "tldr" && styles.activeButton
          } ${theme === "light" ? styles.lightTheme : styles.darkTheme}`}
          onClick={viewContent}
          value="tldr"
        >
          TL:DR
        </button>
        <button
          className={`${styles.button} ${
            activeButton === "less" && styles.activeButton
          } ${theme === "light" ? styles.lightTheme : styles.darkTheme}`}
          onClick={viewContent}
          value="less"
        >
          Less
        </button>
        <button
          className={`${styles.button} ${
            activeButton === "default" && styles.activeButton
          } ${theme === "light" ? styles.lightTheme : styles.darkTheme}`}
          onClick={viewContent}
          value="default"
        >
          Default
        </button>
        <button
          className={`${styles.button} ${
            activeButton === "more" && styles.activeButton
          } ${theme === "light" ? styles.lightTheme : styles.darkTheme}`}
          onClick={viewContent}
          value="more"
        >
          More
        </button>
      </div>
      <div className="content" id="tldr">
        <h3>TL:DR</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sint
          cumque quasi, amet impedit tempore necessitatibus iste. Ratione
          possimus perspiciatis sapiente, ex alias, ipsam sint beatae vel
          repellat aperiam corrupti porro et molestiae nobis itaque recusandae
          vitae atque! Reiciendis voluptatum molestiae autem consectetur
          corporis libero itaque quo mollitia quod! Corrupti doloribus veniam
          iusto soluta laborum saepe debitis reiciendis atque nihil eaque
          ducimus quo ullam ipsum, laboriosam velit vitae sint, eius molestiae
          unde, tempora hic ipsam? Cupiditate, beatae. Nostrum eos, id velit
          nisi libero exercitationem, et fugiat assumenda mollitia debitis
          deleniti, illum iusto. Officiis, ratione ex? Magni, impedit vel. Quam,
          eaque.
        </p>
      </div>

      <div className="content" id="less">
        <h3>Less</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          molestiae doloremque enim deleniti voluptatum necessitatibus, facilis
          et quas, quasi magni obcaecati iusto ipsam ipsum amet autem labore
          dignissimos accusantium dolorem perspiciatis non harum, alias vel a
          asperiores? Qui amet tempora mollitia quos, facilis debitis nemo
          praesentium, optio facere nostrum, eum totam magnam quasi laborum sint
          repellendus quibusdam vero? Ipsum explicabo officiis culpa delectus
          quasi cumque saepe voluptates accusantium voluptatem omnis iste, sequi
          beatae quae dolor vero nostrum at amet eum dolores ut. Autem velit
          eius, libero adipisci dolore harum accusantium ipsum, voluptate ad
          recusandae vitae blanditiis? Harum nihil molestiae cum!
        </p>
      </div>
      <div className="content" id="more">
        <h3>More</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          asperiores magnam? In expedita laudantium magnam ratione alias minus
          nemo incidunt, dignissimos architecto placeat corporis molestiae
          labore vitae ullam laborum ut culpa eaque officiis, blanditiis sunt
          fugit ex? Neque quod mollitia delectus ipsa? Dolore veritatis, tenetur
          laudantium possimus unde debitis enim est illum, ea distinctio quod
          itaque quaerat ex sint eum optio in saepe labore sunt odit? Dolore,
          iusto! Ducimus sint laudantium consectetur. Velit facere culpa
          excepturi ad, quae distinctio iure incidunt. Odio alias laboriosam
          unde quo repudiandae corporis laborum quaerat asperiores minima quis
          in nam maxime recusandae iure, provident a?
        </p>
      </div>

      <div className="content" id="default">
        <h3>Default</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          asperiores magnam? In expedita laudantium magnam ratione alias minus
          nemo incidunt, dignissimos architecto placeat corporis molestiae
          labore vitae ullam laborum ut culpa eaque officiis, blanditiis sunt
          fugit ex? Neque quod mollitia delectus ipsa? Dolore veritatis, tenetur
          laudantium possimus unde debitis enim est illum, ea distinctio quod
          itaque quaerat ex sint eum optio in saepe labore sunt odit? Dolore,
          iusto! Ducimus sint laudantium consectetur. Velit facere culpa
          excepturi ad, quae distinctio iure incidunt. Odio alias laboriosam
          unde quo repudiandae corporis laborum quaerat asperiores minima quis
          in nam maxime recusandae iure, provident a?
        </p>
      </div>
    </section>
  );
};

export default Intro;
