import React from "react";

const Card = ({ item }) => {
  return (
    <div  >
      <h3>ID: {item.id}</h3>
      <p>Name: {item.name}</p>
      <p>Type: {item.type}</p>
      <p>Price: ${item.price}</p>
    </div>
  );
};

export default Card;
