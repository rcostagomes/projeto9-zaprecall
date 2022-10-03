import styled from "styled-components";

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
  cursor: pointer;
  ion-icon {
    font-size: 24px;
  }
`;
export const QuestionOpen = styled.button`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffd4;

  img {
    cursor: pointer;
    margin-left: 245px;
  }
  ion-icon {
    font-size: 24px;
  }
`;
export const ReplyOpen = styled.div`
  width: 310px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  background-color: #ffffd4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left: 5px;
    width: 85px;
    height: 40px;
    background-color: #333333;
    border-radius: 5px;
    color: white;
  }
  ion-icon {
    font-size: 24px;
  }
`;
