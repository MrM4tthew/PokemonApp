import React from "react";
import OwnedPokemonCard from "./OwnedPokemonCard";

const index = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <OwnedPokemonCard item={item} key={index} />
      ))}
    </div>
  );
};

export default index;
