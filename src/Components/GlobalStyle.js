import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900&family=Righteous&display=swap');

* {
  box-sizing: border-box;
}

body {
  background-color: #FB6B6B;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: Black;
  font-family: 'Recursive', sans-serif;
  /* font-family: 'Righteous', cursive; */
}


`;
export default GlobalStyle;
