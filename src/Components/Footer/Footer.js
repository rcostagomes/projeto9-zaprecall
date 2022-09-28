import { Contador, Opçoes } from "./style"
function  Opçao(props){
return (
   
 <button style={{ backgroundColor: `${props.color}`}} > {props.nome} </button>

)

}



export default function Footer(){

    return (
    <>
    <Contador>     
    <Opçoes>
        <Opçao color="#FF3030" nome="Não lembrei" />
        <Opçao color="#FF922E" nome="Quase não lembrei" />
        <Opçao color="#2FBE34" nome="Zap!" />
    </Opçoes>
    

         <h1> 0/4 Concluidos</h1>

    </Contador>
    
    
    </>
    
    )
    
    }