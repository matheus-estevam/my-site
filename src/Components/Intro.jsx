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
          Menos
        </button>
        <button
          className={`${styles.button} ${
            activeButton === "default" && styles.activeButton
          } ${theme === "light" ? styles.lightTheme : styles.darkTheme}`}
          onClick={viewContent}
          value="default"
        >
          Padrão
        </button>
        <button
          className={`${styles.button} ${
            activeButton === "more" && styles.activeButton
          } ${theme === "light" ? styles.lightTheme : styles.darkTheme}`}
          onClick={viewContent}
          value="more"
        >
          Mais
        </button>
      </div>
      <div className="content" id="tldr">
        <h3>Resumo Do Resumo</h3>
        <p>Oi! Eu sou Matheus!</p>
        <p>
          Sou estudante de Ciência da Computação na Faculdade Nova Roma adoro
          construir coisas novas! Tenho me destacado nos estudos no Ensino Médio
          como aluno destaque e estou sempre em busca de novos desafios.
        </p>
        <p>
          Embora ainda não tenha estagiado, estou ativamente procurando
          oportunidades de estágio para ganhar experiência prática.Além de
          desenvolver projetos pessoais e contribuir para código aberto. Estou
          sempre empenhado em aprender e crescer na área de tecnologia!
        </p>
      </div>

      <div className="content" id="less">
        <h3>Menos</h3>
        <p>
          Ei! Eu sou o Matheus, desenvolvedor de software e estudante.Em Ciência
          da Computação na Faculdade Nova Roma.
        </p>
        <p>
          Sou um estudante apaixonado por TI e em busca de um estágio na área.
          Tenho uma sólida base acadêmica e habilidades em HTML, CSS, React e
          JavaScript.
        </p>
        <p>
          Participei de projetos acadêmicos e pessoais, aplicando conhecimentos
          teóricos na prática. Destaco minha capacidade analítica e proatividade
          em resolver problemas e colaborar em equipe. Minhas experiências
          incluem a criação e design de websites, planejamento e criação de
          bancos de dados, desenvolvimento de aplicativos mobile,projetos em
          Python e BI,Design e prototipação de um projeto IOT usando o
          Tinkercard e o ThingSpeak, Conhecimento em IA e Machine Learning.
          Tenho um forte desejo de aprender novas tecnologias e contribuir para
          projetos inovadores. Estou determinado a integrar uma equipe dinâmica,
          trazendo entusiasmo e comprometimento para o sucesso coletivo. Estou
          aberto a oportunidades que me permitam crescer profissionalmente e
          colaborar com colegas inspiradores.
        </p>
      </div>
      <div className="content" id="more">
        <h3>Mais</h3>
        <p>
          Ei! Eu sou o Matheus, desenvolvedor de software e estudante.Em Ciência
          da Computação na Faculdade Nova Roma.
        </p>
        <p>
          Sou um estudante apaixonado por TI e em busca de um estágio na área.
          Tenho uma sólida base acadêmica e habilidades em HTML, CSS, React e
          JavaScript.
        </p>
        <p>
          Participei de projetos acadêmicos e pessoais, aplicando conhecimentos
          teóricos na prática. Destaco minha capacidade analítica e proatividade
          em resolver problemas e colaborar em equipe. Minhas experiências
          incluem a criação e design de websites, planejamento e criação de
          bancos de dados, desenvolvimento de aplicativos mobile,projetos em
          Python e BI,Design e prototipação de um projeto IOT usando o
          Tinkercard e o ThingSpeak, Conhecimento em IA e Machine Learning.
          Tenho um forte desejo de aprender novas tecnologias e contribuir para
          projetos inovadores. Estou determinado a integrar uma equipe dinâmica,
          trazendo entusiasmo e comprometimento para o sucesso coletivo. Estou
          aberto a oportunidades que me permitam crescer profissionalmente e
          colaborar com colegas inspiradores.
        </p>
        <p>
          Além disso, possuo um forte desejo de aprender e me adaptar a novas
          tecnologias.
        </p>
        <p>
          Estou determinado a não apenas acompanhar, mas dar o meu melhor.Meu
          objetivo é integrar uma equipe dinâmica na área de TI, contribuindo
          com meu entusiasmo e comprometimento.
        </p>

        <p>
          Estou certo de que minhas experiência, habilidades técnicas e atitude
          positiva me tornarão um membro valioso em um ambiente de estágio
          desafiador. Estou aberto a oportunidades que me permitam crescer
          profissionalmente, colaborar com colegas inspiradores e, acima de
          tudo, contribuir para o sucesso da equipe.
        </p>

        <p>
          Fora do desenvolvimento de software, adoro jogar Futebol, Games e
          aprender idiomas. Acho reconfortante ter hobbies fora da ciência da
          computação, pois me ajuda a focar no panorama geral e também é muito
          legal (não posso fazer truques nem nada ainda, mas atualizarei esta
          página quando puder).
        </p>
      </div>

      <div className="content" id="default">
        <h3>Padrão</h3>
        <p>
          Ei! Eu sou o Matheus, desenvolvedor de software e estudante.Em Ciência
          da Computação na Faculdade Nova Roma.
        </p>
        <p>
          Sou um estudante apaixonado por TI e em busca de um estágio na área.
          Tenho uma sólida base acadêmica e habilidades em HTML, CSS, React e
          JavaScript.
        </p>
        <p>
          Participei de projetos acadêmicos e pessoais, aplicando conhecimentos
          teóricos na prática. Destaco minha capacidade analítica e proatividade
          em resolver problemas e colaborar em equipe. Minhas experiências
          incluem a criação e design de websites, planejamento e criação de
          bancos de dados, desenvolvimento de aplicativos mobile,projetos em
          Python e BI,Design e prototipação de um projeto IOT usando o
          Tinkercard e o ThingSpeak, Conhecimento em IA e Machine Learning.
          Tenho um forte desejo de aprender novas tecnologias e contribuir para
          projetos inovadores. Estou determinado a integrar uma equipe dinâmica,
          trazendo entusiasmo e comprometimento para o sucesso coletivo. Estou
          aberto a oportunidades que me permitam crescer profissionalmente e
          colaborar com colegas inspiradores.
        </p>
        <p>
          Além disso, possuo um forte desejo de aprender e me adaptar a novas
          tecnologias.
        </p>
        <p>
          Estou determinado a não apenas acompanhar, mas dar o meu melhor.Meu
          objetivo é integrar uma equipe dinâmica na área de TI, contribuindo
          com meu entusiasmo e comprometimento.
        </p>

        <p>
          Estou certo de que minhas experiência, habilidades técnicas e atitude
          positiva me tornarão um membro valioso em um ambiente de estágio
          desafiador. Estou aberto a oportunidades que me permitam crescer
          profissionalmente, colaborar com colegas inspiradores e, acima de
          tudo, contribuir para o sucesso da equipe.
        </p>

        <p>
          Fora do desenvolvimento de software, adoro Futebol, Games , Música e
          aprender idiomas.
        </p>
      </div>
    </section>
  );
};

export default Intro;
