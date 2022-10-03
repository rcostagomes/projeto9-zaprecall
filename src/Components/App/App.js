import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../GlobalStyle";
import Login from "../Login/Login";
import Home from "../Home/Home";
import { useState } from "react";
export default function App() {
  const [Respondidas, setRespondidas] = useState(0); // Contador de concluidas

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route
            path="/Zap"
            element={
              <Home Respondidas={Respondidas} setRespondidas={setRespondidas} />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
