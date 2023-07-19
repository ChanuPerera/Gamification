import Quize from "./Routes/Quize";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";




function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Quize/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
