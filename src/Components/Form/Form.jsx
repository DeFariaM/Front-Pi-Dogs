import React, { useState } from "react";
import { validation } from "./validation";
import { useSelector } from "react-redux";
import "./Form.css";

const Form = () => {
  const temperaments = useSelector((state) => state.temperaments);
  const [selectedTemps, setSelectedTemps] = useState();
  console.log(temperaments);

  const [input, setInput] = useState({
    name: "",
    weight_min: 0,
    weight_max: 0,
    height_min: 0,
    height_max: 0,
    life_span: "",
    Temperaments: [],
  });

  const [error, setError] = useState({
    name: "",
    weight: "",
    height: "",
    life_span: "",
    Temperaments: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInput({ ...input, [name]: value });
    setError(validation({ ...input, [name]: value }));
  };
  return (
    <div>
      <label htmlFor="">Name:</label>
      <input
        name="name"
        type="text"
        placeholder="For example: Affenpinscher"
        onChange={handleChange}
      />
      <span>{error.name}</span>
      <br />

      <span>Weight</span>
      <label>Min:</label>
      <input
        name="weight_min"
        type="number"
        placeholder="0"
        onChange={handleChange}
      />

      <label>Max:</label>
      <input
        name="weight_max"
        type="number"
        placeholder="0"
        onChange={handleChange}
      />
      <span>KG</span>
      <span>{error.weight}</span>
      <br />

      <span>Height</span>
      <label>Min:</label>
      <input
        name="height_min"
        type="number"
        placeholder="0"
        onChange={handleChange}
      />

      <label>Max:</label>
      <input
        name="height_max"
        type="number"
        placeholder="0"
        onChange={handleChange}
      />
      <span>CM</span>
      <span>{error.height}</span>
      <br />

      <input
        name="life_span"
        type="text"
        placeholder="For example: 12 - 15"
        onChange={handleChange}
      />

      <span>Years</span>
      <span>{error.life_span}</span>
      <br />

      <label htmlFor="">Image:</label>
      <input name="" type="file" />
      <br />
      <div className="temperaments">
        {temperaments.map((temp) => (
          <div className="temp-ind">
            <label htmlFor={temp.name}>{temp.name}</label>
            <input
              type="checkbox"
              name="temperaments"
              id={temp.id}
              value={temp.name}
              /* checked={selectedTemps.includes(temp.name)} */
              /* onChange={onSelectTemp} */
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
