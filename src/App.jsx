import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Page/Register";
import Login from "./components/Page/Login";
import Home from "./components/Page/Home";
import Nutriologo from "./components/Page/Nutricionistas";
import PerfilUsuario from "./components/Page/PerfilDelUsuario"


function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Nutriologo" element={<Nutriologo />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/PerfilUsuario" element={<PerfilUsuario />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
