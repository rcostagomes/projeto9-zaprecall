import { Link } from "react-router-dom";
import { TelaInicial } from "./style";
import Logo from "../../assets/img/logo.png";
export default function Login() {
  return (
    <TelaInicial>
      <img src={Logo} alt="Logo do site" />
      <h1> Zap Recall </h1>

      <Link to={`/zap`}>
        <button> Iniciar Recall </button>
      </Link>
    </TelaInicial>
  );
}
