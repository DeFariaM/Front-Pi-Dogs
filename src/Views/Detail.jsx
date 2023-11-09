import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearData, getDogsID } from "../Redux/Actions/actions";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const dog = useSelector((state) => state.detailDog);

  useEffect(() => {
    dispatch(getDogsID(id));
    return () => dispatch(clearData());
  }, [dispatch]);

  return (
    <div>
      <h1>{dog?.name}</h1>
    </div>
  );
};

export default Detail;
