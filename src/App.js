import "./App.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
