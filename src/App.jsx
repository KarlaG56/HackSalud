import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Page/Register";
import Login from "./components/Page/Login";
import Home from "./components/Page/Home"


function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
