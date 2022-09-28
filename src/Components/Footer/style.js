import styled from "styled-components";

export const Contador = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;

  h1 {
    margin-top: 7px;
  }
`;

export const Opçoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    cursor: pointer;
    margin-left: 5px;
    width: 85px;
    height: 40px;
    background: #2fbe34;
    border-radius: 5px;
    color: white;
  }
`;
