import styled from "styled-components";

export const Main = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 150px 0 20px 0;

  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-left: 20px;
  }

  img {
    width: 52px;
  }
`;

export const Perguntas = styled.div`
  display: flex;
  flex-direction: column;
`;
