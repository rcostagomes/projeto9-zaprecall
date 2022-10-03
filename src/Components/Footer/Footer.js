import { Contador,  } from "./style";


export default function Footer(props) {
const {Respondidas} = props

  return (
    <>
      <Contador>
        <h1> {Respondidas}/8 Concluidos</h1>
      </Contador>
    </>
  );
}
