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


export const QuestionClosed = styled.button`
font-family: "Righteous";
    width: 300px;
    height: 35px;
    background-color: #ffffff;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor:pointer;

`
export const QuestionOpen = styled.button`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #FFFFD4;

  img {
   cursor: pointer;
   margin-left: 245px;
  }

`
export const ReplyOpen = styled.button`
width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #FFFFD4;
`