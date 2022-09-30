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
  const [ColorQuestion, setColorQuestion] = useState(""); // Define a cor da resposta 
  const [IonIcon, setIonIcon] = useState("play-outline") // Define o ion-icon que vai ser mostrado na resposta
  const [Risk, setRisk]= useState("") // Define a palvra riscada após responder 
  //const  [Contador, setContador] = useState(0) // Numero de Perguntas Concluidas


  function openQuestion(Num) {
    console.log(Num)
    setQuestionIndex(QuestionsArray[Num-1].Q)
    setQuestion(false);
  
  }

  function OpenReply(Num) {
    setReply(false);
    setReplyIndex(ReplyArray[Num-1].R)
  }
function ColorGreen(){
  setReply(true); 
setColorQuestion("#2FBE34")
setQuestion(true);
setRisk("line-through")
setIonIcon("checkmark-circle")
}

function ColorRed(){
  setReply(true); 
  setColorQuestion("#FF3030")
  setQuestion(true);
  setRisk("line-through")
  setIonIcon("close-circle")
  }

function ColorYellow(){
  setReply(true); 
    setColorQuestion("#FF922E")
    setQuestion(true);
    setRisk("line-through")
    setIonIcon("help-circle")
    }

  return Question === true ? (
    
    <QuestionClosed style={{ textDecoration: `${Risk}` ,color: `${ColorQuestion}` }} onClick={() => openQuestion(`${props.numero}`)}>
     <h1>  pergunta {props.numero} </h1> <ion-icon name={IonIcon}></ion-icon>
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
    <ReplyOpen>
      <div> 
       {ReplyIndex} 
      </div>
      <div> 
      
      <button style={{ backgroundColor: "#FF3030" }} onClick={ColorRed}> Não Lembrei</button>
      <button style={{ backgroundColor: "#FF922E" }} onClick={ColorYellow}> Quase Não Lembrei </button>
      <button style={{ backgroundColor: "#2FBE34" }} onClick={ColorGreen}> Zap ! </button>
      </div>
       </ReplyOpen>
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
        
        <Footer/>
      </Main>
    </>
  );
}
