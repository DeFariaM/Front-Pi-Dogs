import React, { useEffect, useState } from "react";
import { validation } from "./validation";
import { useDispatch, useSelector } from "react-redux";

import { getTemperaments, postDog } from "../../Redux/Actions/actions";
import { useNavigate } from "react-router-dom";
import style from "./Form.module.css";
const {
  btn_sub,
  input_num,
  temps,
  wrapper,
  input_wrapper,
  buttonClose,
  tempSelec,
  error_span,
  input_text,
  input_image,
  formulario,
  label,
  contenedorCountry,
  contenedorC,
  contenedorFormulario,
} = style;

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const temperaments = useSelector((state) => state.temperaments);
  const [input, setInput] = useState({
    name: "",
    weight_min: 0,
    weight_max: 0,
    height_min: 0,
    height_max: 0,
    life_span: "",
    temperament: [],
  });
  console.log(input);

  const [error, setError] = useState({
    name: "This can't be empty",
    weight: "This can't be empty",
    height: "This can't be empty",
    life_span: "This can't be empty",
    temperament: "You have to choose at least one temperament",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInput({ ...input, [name]: value });
    setError(validation({ ...input, [name]: value }));
  };

  const handleSelect = (e) => {
    if (input.temperament.length === 10) {
      window.alert("Your new dog only can have 10 temperaments");
    } else if (input.temperament.includes(e.target.value)) {
      window.alert("You can't choose the same temperamente more than once");
    } else {
      setInput({
        ...input,
        temperament: [...input.temperament, e.target.value],
      });
      setError({ ...error, temperament: "" });
    }
  };

  const handleRemove = (e) => {
    setInput({
      ...input,
      temperament: input.temperament.filter((temp) => temp !== e.target.value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(postDog(input)).then(({ payload }) => {
      if (payload.error) {
        alert(payload.error);
        setInput({ ...input, name: "" });
      }
      if (payload.message) {
        alert(payload.message);
        navigate("/home");
      }
    });
  };

  return (
    <div className={contenedorFormulario}>
      <section className={formulario}>
        <form action="" onSubmit={handleSubmit}>
          <div className={wrapper}>
            <div className={input_wrapper}>
              <label className={label} htmlFor="1">
                Name:
              </label>
              <input
                className={input_text}
                name="name"
                id="1"
                type="text"
                placeholder="For example: Affenpinscher"
                onChange={handleChange}
              />
            </div>

            <span className={error_span}>{error.name}</span>

            <div className={input_wrapper}>
              <span className={label}>Weight</span>
              <label className={label} htmlFor="2">
                Min:
              </label>
              <input
                className={input_num}
                id="2"
                name="weight_min"
                type="number"
                placeholder="0"
                onChange={handleChange}
                min={0}
              />

              <label className={label} htmlFor="3">
                Max:
              </label>
              <input
                className={input_num}
                min={0}
                id="3"
                name="weight_max"
                type="number"
                placeholder="0"
                onChange={handleChange}
              />
              <span className={label}>KG</span>
            </div>

            <span className={error_span}>{error.weight}</span>

            <div className={input_wrapper}>
              <span className={label}>Height</span>
              <label className={label} htmlFor="4">
                Min:
              </label>
              <input
                className={input_num}
                min={0}
                id="4"
                name="height_min"
                type="number"
                placeholder="0"
                onChange={handleChange}
              />

              <label className={label} htmlFor="5">
                Max:
              </label>
              <input
                className={input_num}
                id="5"
                min={0}
                name="height_max"
                type="number"
                placeholder="0"
                onChange={handleChange}
              />
              <span className={label}>CM</span>
            </div>

            <span className={error_span}>{error.height}</span>

            <div className={input_wrapper}>
              <label className={label} htmlFor="6">
                Life span:
              </label>
              <input
                className={input_text}
                id="6"
                name="life_span"
                type="text"
                placeholder="For example: 12 - 15"
                onChange={handleChange}
              />
              <span className={label}>Years</span>
            </div>

            <span className={error_span}>{error.life_span}</span>

            <div className={input_wrapper}>
              <label className={label} htmlFor="7">
                Image:
              </label>
              <br />
              <input className={input_image} id="7" name="image" type="file" />
            </div>
          </div>

          <label className={label}>Temperaments</label>
          <br />
          <span className={error_span}>{error.temperament}</span>

          <select
            className={temps}
            name="temperament"
            onChange={handleSelect}
            required>
            <option className={label} hidden>
              Choose the temperaments
            </option>
            {temperaments?.map((t) => {
              return (
                <option value={t.name} key={t.id}>
                  {t.name}
                </option>
              );
            })}
          </select>

          <div className={contenedorC}>
            {input.temperament?.map((temp, index) => {
              return (
                <div key={index}>
                  <div className={contenedorCountry}>
                    <button
                      className={buttonClose}
                      value={temp}
                      type="button"
                      onClick={handleRemove}>
                      X
                    </button>
                    <span className={tempSelec}>{temp}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {!error.name &&
          !error.height &&
          !error.life_span &&
          !error.weight &&
          !error.Temperaments &&
          input.temperament.length > 0 ? (
            <button className={btn_sub} type="submit">
              Submit
            </button>
          ) : (
            <button className={btn_sub} type="submit" disabled>
              Submit
            </button>
          )}
        </form>
      </section>
    </div>
  );
};

export default Form;
