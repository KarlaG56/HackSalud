import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Page/Register";
import Login from "./components/Page/Login";
import Home from "./components/Page/Home"
import Alimentos from "./components/Page/Alimentos";


function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registro" element={<Register />} />
        <Route path="/Alimentos" element={<Alimentos />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
