import Logo from "../../assets/img/logo.png";
import Virar from "../../assets/img/setinha.png";
import {
  Main,
  Header,
  Perguntas,
  QuestionClosed,
  QuestionOpen,
  ReplyOpen,
} from "./style";
import Footer from "../Footer/Footer";
import { useState } from "react";
import { QuestionsArray, ReplyArray } from "../Questions/ReactQuestions";
const ArrayPerguntas = [
  { numero: " 1" },
  { numero: " 2" },
  { numero: " 3" },
  { numero: " 4" },
  { numero: " 5" },
  { numero: " 6" },
  { numero: " 7" },
  { numero: " 8" },
];
function Pergunta(props) {
  const [Question, setQuestion] = useState(true); // Virar o card para pergunta
  const [Reply, setReply] = useState(true); // Virar de pergunta para Respota
  const [QuestionIndex, setQuestionIndex] = useState() // Pega o Array de Perguntas na posição da Pergunta
  const [ReplyIndex, setReplyIndex ] = useState ("Resposta") // Pega o Array de Respostas na Posição da Pergunta 
 // const [ColorQuestion, setColorQuestion] = useState(""); // Define a cor da resposta 
  
  function openQuestion(Num) {
    console.log(Num)
    setQuestionIndex(QuestionsArray[Num-1].Q)
    setQuestion(false);
  
  }

  function OpenReply(Num) {
    setReply(false);
    setReplyIndex(ReplyArray[Num-1].R)
  }

  return Question === true ? (
    <QuestionClosed onClick={() => openQuestion(`${props.numero}`)}>
      pergunta {props.numero}
    </QuestionClosed>
  ) : Reply === true ? (
    <QuestionOpen>
      {QuestionIndex}
      <img
        onClick={() => OpenReply(`${props.numero}`)}
        src={Virar}
        alt="Seta Virar Pergunta"
      />
    </QuestionOpen>
  ) : (
    <ReplyOpen> {ReplyIndex} </ReplyOpen>
  );
  
}
export default function Home() {
  return (
    <>
      <Main>
        <Header>
          <img src={Logo} alt="Logo pagina zap" />
          <h1> Zap Recall</h1>
        </Header>
        <Perguntas>
          {ArrayPerguntas.map((AP, index) => (
            <Pergunta key={index} numero={AP.numero} />
          ))}
        </Perguntas>
        <Footer />
      </Main>
    </>
  );
}
