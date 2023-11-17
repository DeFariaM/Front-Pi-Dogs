import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs, getTemperaments } from "../Redux/Actions/actions";
import Cards from "../Components/Cards/Cards";
import style from "./Home.module.css";
import Loading from "../Components/Loading/Loading";
const { vh } = style;

const Home = ({ currentPage, setCurrentPage, inputPage, setInputPage }) => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state?.allDogs);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
  }, [dispatch]);

  return (
    <div className={vh}>
      {loading ? (
        <Loading />
      ) : (
        <Cards
          dogs={allDogs}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setInputPage={setInputPage}
          inputPage={inputPage}
        />
      )}
    </div>
  );
};

export default Home;
