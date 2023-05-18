import React from "react";
import { temaClaro, temaOScuro } from "./Components/UI/temas";
import Header from "./Components/Header";
import Container from "./Components/Container";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";

console.log(temaClaro, temaOScuro);

function App() {
  return (
    <ThemeProvider theme={temaOScuro}>
      <GlobalStyle />
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
