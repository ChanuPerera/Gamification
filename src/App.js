import Quize from "./Routes/Quize";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LandingPage from "./Routes/landing";
import MainNav from "./Components/mainNav";




function App() {
  return (
    <BrowserRouter>
   <MainNav/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
