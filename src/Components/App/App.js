import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../GlobalStyle";
import Home from "../Home/Home";
import Main from "../Main/Main";

export default function App(){
return (
<>
<GlobalStyle/>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Zap" element={<Main/>}></Route>
       
      </Routes>
    </BrowserRouter>


</>

)

}