import { Route, Routes } from "react-router-dom";
import Landing from "./Views/Landing";
import Home from "./Views/Home";
import Detail from "./Views/Detail";
import Create from "./Views/Create";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </>
  );
}

export default App;
