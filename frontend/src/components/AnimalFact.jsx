import React from "react";
import axios from "axios";
import AddFact from "./AddFact";

const AnimalFact = (props) => {
  const { Animal, Facts } = props;

  const handleDelete = (e) => {
    console.log(`Deleted fact number ${e.target.value} on ${Animal}`);
    axios.delete(`/animals/${Animal}/${e.target.value}`);
  };

  return (
    <div>
      <ul>
        <li className="animal">
          <h1>{Animal.charAt(0).toUpperCase() + Animal.slice(1)}</h1>
          <AddFact {...props} />
          <ul>
            {Facts.map((fact, i) => {
              return (
                <li key={i} className="fact">
                  <h3 style={{ lineHeight: "2rem" }}>{fact}</h3>
                  <button
                    value={i}
                    onClick={handleDelete}
                    style={{ padding: ".5rem", borderRadius: "50%" }}
                  >
                    X
                  </button>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default AnimalFact;
