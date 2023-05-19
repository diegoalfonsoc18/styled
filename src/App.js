import React from "react";
import { temaClaro, temaOScuro } from "./Components/UI/temas";
import Header from "./Components/Header";
import Container from "./Components/Container";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";
import { useState } from "react";

console.log(temaClaro, temaOScuro);

function App() {
  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema((tema) => !tema);
  };

  return (
    <ThemeProvider theme={tema ? temaClaro : temaOScuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema} />
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
