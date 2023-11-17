import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./Views/Landing/Landing";
import Home from "./Views/Home/Home";
import Detail from "./Views/Detail/Detail";
import Create from "./Views/Create/Create";

import NavBar from "./Components/NavBar/NavBar";

import { useState } from "react";
import NotFound from "./Views/404/NotFound";

function App() {
  const { pathname } = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [inputPage, setInputPage] = useState(1);

  return (
    <>
      <div>
        {pathname !== "/" ? (
          <NavBar setCurrentPage={setCurrentPage} setInputPage={setInputPage} />
        ) : null}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/home"
            element={
              <Home
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                inputPage={inputPage}
                setInputPage={setInputPage}
              />
            }></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/*" element={<NotFound message={"Page"} />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
