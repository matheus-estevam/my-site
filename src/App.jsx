import React from "react";
import "./App.css";
import NavbarLeft from "./Components/NavbarLeft";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";
import NavbarRight from "./Components/NavbarRight";
import { ThemeProvider } from "./Context/ThemeContext";

const App = () => {
  return (
    <div>
      <NavbarLeft />
      <ThemeProvider>
        <MainContent />
        <NavbarRight />
      </ThemeProvider>

      <Footer />
    </div>
  );
};

export default App;
