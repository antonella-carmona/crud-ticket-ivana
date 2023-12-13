
// import Grid from "./components/Grid"
// import NavBar from "./components/NavBar"
// import Panels from "./components/Panels"
// import Search from "./components/Search"
import Home from "./components/Home";
import NewTicket from "./components/NewTicket";
import { Routes, Route } from "react-router-dom";





function App() {


  return (
    <main className="px-0 pt-0">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agregar" element={<NewTicket />} />
      </Routes>
    </main>
  );
}

export default App
