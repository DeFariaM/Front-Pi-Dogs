import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./Views/Landing";
import Home from "./Views/Home";
import Detail from "./Views/Detail";
import Create from "./Views/Create";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { useSelector } from "react-redux";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      <div>
        {pathname !== "/" ? <NavBar /> : null}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/create" element={<Create />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
