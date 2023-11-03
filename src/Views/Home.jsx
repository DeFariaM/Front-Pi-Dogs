import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../Redux/Actions/actions";
import Cards from "../Components/Cards/Cards";

const Home = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state?.allUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      <Cards allUsers={allUsers} />
    </div>
  );
};

export default Home;
