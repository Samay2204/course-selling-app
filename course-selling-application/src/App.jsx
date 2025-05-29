import Home from "./components/Home"
import SignUp from "./components/SignUp";
import Signin from "./components/Signin";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Signin" element={<Signin/>} />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
