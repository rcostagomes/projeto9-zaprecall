import { QuestionsArray, ReplyArray } from "../Questions/ReactQuestions";
import Virar from "../../assets/img/setinha.png";
import { QuestionClosed, QuestionOpen, ReplyOpen } from "./style";
import { useState } from "react";
export default function Pergunta(props) {
  const [Question, setQuestion] = useState(true); // Virar o card para pergunta
  const [Reply, setReply] = useState(true); // Virar de pergunta para Respota
  const [QuestionIndex, setQuestionIndex] = useState(); // Pega o Array de Perguntas na posição da Pergunta
  const [ReplyIndex, setReplyIndex] = useState("Resposta"); // Pega o Array de Respostas na Posição da Pergunta
  const [ColorQuestion, setColorQuestion] = useState(""); // Define a cor da resposta
  const [IonIcon, setIonIcon] = useState("play-outline"); // Define o ion-icon que vai ser mostrado na resposta
  const [Risk, setRisk] = useState(""); // Define a palvra riscada após responder
  const [disable, setdisable] = useState(false); // Desativa os botoes
  const { Respondidas, zaps, setzaps, setRespondidas, numero } = props;

  function openQuestion(Num) {
    setQuestionIndex(QuestionsArray[Num - 1].Q);
    setQuestion(false);
  }

  function OpenReply(Num) {
    setReply(false);
    setReplyIndex(ReplyArray[Num - 1].R);
  }
  function ColorGreen() {
    setRespondidas(Respondidas + 1);
    setzaps(zaps + 1);
    setReply(true);
    setColorQuestion("#2FBE34");
    setQuestion(true);
    setRisk("line-through");
    setIonIcon("checkmark-circle");
    setdisable(true);
  }

  function ColorRed() {
    setRespondidas(Respondidas + 1);
    setReply(true);
    setColorQuestion("#FF3030");
    setQuestion(true);
    setRisk("line-through");
    setIonIcon("close-circle");
    setdisable(true);
  }

  function ColorYellow() {
    setReply(true);
    setColorQuestion("#FF922E");
    setQuestion(true);
    setRisk("line-through");
    setIonIcon("help-circle");
    setRespondidas(Respondidas + 1);
    setdisable(true);
  }

  return Question === true ? (
    <QuestionClosed
      disabled={disable}
      style={{ textDecoration: `${Risk}`, color: `${ColorQuestion}` }}
      onClick={() => openQuestion(`${numero}`)}
    >
      <h1> pergunta {numero} </h1> <ion-icon name={IonIcon}></ion-icon>
    </QuestionClosed>
  ) : Reply === true ? (
    <QuestionOpen>
      {QuestionIndex}
      <img
        onClick={() => OpenReply(`${numero}`)}
        src={Virar}
        alt="Seta Virar Pergunta"
      />
    </QuestionOpen>
  ) : (
    <ReplyOpen>
      <div>{ReplyIndex}</div>
      <div>
        <button style={{ backgroundColor: "#FF3030" }} onClick={ColorRed}>
          {" "}
          Não Lembrei
        </button>
        <button style={{ backgroundColor: "#FF922E" }} onClick={ColorYellow}>
          {" "}
          Quase Não Lembrei{" "}
        </button>
        <button style={{ backgroundColor: "#2FBE34" }} onClick={ColorGreen}>
          {" "}
          Zap !{" "}
        </button>
      </div>
    </ReplyOpen>
  );
}
