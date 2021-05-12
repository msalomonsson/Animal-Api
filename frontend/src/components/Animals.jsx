import React, { useState, useEffect } from "react";
import axios from "axios";

import AnimalFact from "./AnimalFact";

const Animals = () => {
  const [animals, setAnimals] = useState();
  const [showAnimals, setShowAnimals] = useState(false);

  useEffect(() => {
    axios.get("/animals").then((res) => {
      setAnimals(res.data);
    });
  }, [animals]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Animals</h1>
      <div className="btn-div">
        <button
          onClick={() => {
            setShowAnimals(!showAnimals);
          }}
        >
          Show Animals
        </button>
      </div>
      <ul className="animals">
        {showAnimals &&
          animals &&
          animals.map((animal, i) => {
            return <AnimalFact {...animal} key={i} />;
          })}
      </ul>
    </div>
  );
};

export default Animals;
