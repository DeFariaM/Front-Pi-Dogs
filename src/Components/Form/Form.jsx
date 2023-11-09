import React, { useEffect, useState } from "react";
import { validation } from "./validation";
import { useDispatch, useSelector } from "react-redux";
import "./Form.css";
import { getDogs, getTemperaments, postDog } from "../../Redux/Actions/actions";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id, setId] = useState();

  useEffect(() => {
    dispatch(getTemperaments());
    dispatch(getDogs());
  }, [dispatch]);

  const [selectedTemps, setSelectedTemps] = useState([]);

  const dogs = useSelector((state) => state.allDogs);
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

  const [error, setError] = useState({
    name: "This can't be empty",
    weight: "This can't be empty",
    height: "This can't be empty",
    life_span: "This can't be empty",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInput({ ...input, [name]: value });
    setError(validation({ ...input, [name]: value }));
  };

  const handleCheck = (e) => {
    const { value, checked } = e.target;

    if (selectedTemps.length === 10)
      window.alert("Your new dog only can have 10 temperaments");

    if (checked && selectedTemps.length < 10) {
      setSelectedTemps([...selectedTemps, value]);
      setInput({
        ...input,
        temperament: [...input.temperament, value],
      });
    } else {
      setSelectedTemps(selectedTemps.filter((t) => t !== value));
      setInput({
        ...input,
        temperament: input.temperament.filter((t) => t !== value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filter = dogs.filter((d) => d.name === input.name);
    if (filter.length) {
      alert("This breed name already exists!");
      return;
    }
    dispatch(postDog(input))
      .then(({ payload }) => {
        alert(payload.message);
        setId(payload.id);
      })
      .then(() => navigate(`/detail/${id}`));
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="1">Name:</label>
        <input
          name="name"
          id="1"
          type="text"
          placeholder="For example: Affenpinscher"
          onChange={handleChange}
        />
        <span>{error.name}</span>
        <br />

        <span>Weight</span>
        <label htmlFor="2">Min:</label>
        <input
          id="2"
          name="weight_min"
          type="number"
          placeholder="0"
          onChange={handleChange}
          min={0}
        />

        <label htmlFor="3">Max:</label>
        <input
          min={0}
          id="3"
          name="weight_max"
          type="number"
          placeholder="0"
          onChange={handleChange}
        />
        <span>KG</span>
        <span>{error.weight}</span>
        <br />

        <span>Height</span>
        <label htmlFor="4">Min:</label>
        <input
          min={0}
          id="4"
          name="height_min"
          type="number"
          placeholder="0"
          onChange={handleChange}
        />

        <label htmlFor="5">Max:</label>
        <input
          id="5"
          min={0}
          name="height_max"
          type="number"
          placeholder="0"
          onChange={handleChange}
        />
        <span>CM</span>
        <span>{error.height}</span>
        <br />
        <label htmlFor="6">Life span:</label>
        <input
          id="6"
          name="life_span"
          type="text"
          placeholder="For example: 12 - 15"
          onChange={handleChange}
        />

        <span>Years</span>
        <span>{error.life_span}</span>
        <br />

        <label htmlFor="7">Image:</label>
        <input id="7" name="image" type="file" />
        <br />
        <div className="temperaments">
          {temperaments?.map((temp, index) => (
            <span key={index} htmlFor={temp.id}>
              {temp.name}
              <input
                type="checkbox"
                name={temp.id}
                key={temp.id}
                value={temp.name}
                checked={selectedTemps.includes(temp.name)}
                onChange={handleCheck}
              />
            </span>
          ))}
        </div>
        <span>You have to choose at least one temperament</span>
        {!error.name &&
        !error.height &&
        !error.life_span &&
        !error.weight &&
        !error.Temperaments &&
        selectedTemps.length > 0 ? (
          <button type="submit">Submit</button>
        ) : (
          <button type="submit" disabled>
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
