import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "React"
import Register from "./components/Page/Register";
import Login from "./components/Page/Login";
import Home from "./components/Page/Home"
import Alimentos from "./components/Page/Alimentos";
import ClimaContext from "./components/context/climaContext.js";
import IsActiveContext from "./components/context/isActiveContext.js"


function App() {
  let timer;
  const [isActive, setIsActive] = useState(false)
  const [clima, setClima] = useState(null);
  const [time, setTime] = useState(1)
  
  return (
    <BrowserRouter>
      <IsActiveContext.Provider value={{ isActive, setIsActive }}>
        <ClimaContext.Provider value={{ clima, setClima }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Registro" element={<Register />} />
            <Route path="/Alimentos" element={<Alimentos />} />
          </Routes>
        </ClimaContext.Provider>
      </IsActiveContext.Provider>
    </BrowserRouter>

  )
}

export default App;
