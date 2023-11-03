import React from "react";
import Card from "../Card/Card";

const Cards = ({ allUsers }) => {
  const usersCard = allUsers;

  return (
    <div>
      {usersCard.map((user) => {
        return <Card key={user.id} user={user} />;
      })}
    </div>
  );
};

export default Cards;
