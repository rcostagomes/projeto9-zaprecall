import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

* {
  box-sizing: border-box;
  --cor-fundo: #FB6B6B;
  --cor-fundo-card: #FFFFD4;
  --cor-nao-lembrei: #FF3030;
  --cor-quase-nao-lembrei: #FF922E;
  --cor-zap: #2FBE34;
  --preto: #333333;
}

body {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--preto);
  font-family: 'Recursive', sans-serif;
  /* font-family: 'Righteous', cursive; */
}


`
export default GlobalStyle