import React, { useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearData, getDogsID } from "../../Redux/Actions/actions";
import Loading from "../../Components/Loading/Loading";
import style from "./Detail.module.css";
const {
  wrapper_all,
  temp_ind,
  wrapper_info,
  info,
  temp_wrap,
  wrap_img,
  dog_img,
} = style;

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const dog = useSelector((state) => state.detailDog);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getDogsID(id)).then(({ payload }) => {
      if (payload.error) {
        window.alert(payload.error);
        navigate("/home");
      }
    });
    return () => dispatch(clearData());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className={wrapper_all}>
          <div className={wrap_img}>
            <img src={dog?.image} alt="" className={dog_img} />
          </div>
          <div className={wrapper_info}>
            <h1>{dog?.name}</h1>
            <p className={info}>
              <strong>ID</strong> | {dog?.id}
            </p>
            <p className={info}>
              <strong>Life Span</strong> | {dog?.life_span} years
            </p>
            <p className={info}>
              <strong>Height</strong>
              <br />
              <span>Min: {dog.height_min ? ` ${dog.height_min} cm ` : 0}</span>
              <span>Max: {dog.height_max ? ` ${dog.height_max} cm ` : 0}</span>
            </p>
            <p className={info}>
              <strong>Weight</strong>
              <br />
              <span>Min: {dog.weight_min ? ` ${dog.weight_min} kg ` : 0}</span>
              <span>Max: {dog.weight_max ? ` ${dog.weight_max} kg ` : 0}</span>
            </p>
            <p className={info}>
              <strong>Temperaments</strong>
            </p>
            <div className={temp_wrap}>
              {dog.Temperaments &&
                dog.Temperaments.map((t, index) => {
                  return (
                    <div className={temp_ind} key={index}>
                      {t}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
