import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../GlobalStyle";
import Login from "../Login/Login";
import Home from "../Home/Home";
export default function App(){
return (
<>
<GlobalStyle/>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Zap" element={<Home/>}></Route>
       
      </Routes>
    </BrowserRouter>


</>

)

}