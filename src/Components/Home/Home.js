import Logo from "../../assets/img/logo.png";
import { Main, Header, Perguntas } from "./style";
import Footer from "../Footer/Footer";
import { useState } from "react";
import Pergunta from "../Pergunta/Pergunta";

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

export default function Home(props) {
  const { Respondidas, Verificarzaps, setRespondidas } = props;
  const [zaps, setzaps] = useState(0); // Numero de zaps

  if (Respondidas === 8) {
    alert("Você conseguiu " + zaps + " Zaps !!");
  }

  return (
    <>
      <Main>
        <Header>
          <img src={Logo} alt="Logo pagina zap" />
          <h1> ZapRecall</h1>
        </Header>

        <Perguntas>
          {ArrayPerguntas.map((AP, index) => (
            <Pergunta
              key={index}
              Verificarzaps={Verificarzaps}
              zaps={zaps}
              setzaps={setzaps}
              Respondidas={Respondidas}
              setRespondidas={setRespondidas}
              numero={AP.numero}
            />
          ))}
        </Perguntas>

        <Footer Respondidas={Respondidas} />
      </Main>
    </>
  );
}
