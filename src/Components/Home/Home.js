import Logo from "../../assets/img/logo.png";
import { Main, Header, Perguntas } from "./style";
import Footer from "../Footer/Footer";

function Pergunta(props) {
  return <button> pergunta{props.numero} </button>;
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
        <Pergunta numero=" 1"> </Pergunta>
        <Pergunta numero=" 2"> </Pergunta>
        <Pergunta numero=" 3"> </Pergunta>
        <Pergunta numero=" 4"> </Pergunta>
        <Pergunta numero=" 5"> </Pergunta>
        <Pergunta numero=" 6"> </Pergunta>
        <Pergunta numero=" 7"> </Pergunta>
        <Pergunta numero=" 8"> </Pergunta>
      </Perguntas>
      <Footer />
      </Main>
    </>
  );
}
