import styled from "styled-components";

export const TelaInicial = styled.div`
width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  position: absolute;
  background-color: var(--cor-fundo);
  h1 {
    margin-bottom: 30px;
font-family: 'Righteous';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 45px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.012em;

color: #FFFFFF;
  }

  button {
  width: 246px;
  height: 54px;
  padding: 16px 22px;
  border-radius: 5px;
  color: #D70900;
  border: 1px;
  font-size: 18px;
  border: 1px solid #D70900;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  
  :hover {
  background-color: #cea2a0
}
}


img{
margin-bottom: 30px;
width: 136px;
height: 161px;

}
`