import React from "react";

const Card = ({ dog }) => {
  return (
    <div>
      <h1>{dog?.name}</h1>
    </div>
  );
};

export default Card;
