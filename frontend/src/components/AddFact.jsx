import axios from "axios";
import React, { useState } from "react";

const AddFact = (props) => {
  const [showForm, setShowForm] = useState();
  const [fact, setFact] = useState();
  const { Animal } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/animals/${Animal}`, {
      fact: fact,
    });
    console.log(`Added Animal fact`);
    setShowForm(!showForm);
  };

  return (
    <div>
      <button
        onClick={() => {
          setShowForm(!showForm);
        }}
      >
        {!showForm ? "Add" : "Close"}
      </button>
      {showForm && (
        <div>
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="fact">Add Fact</label>
            <textarea
              name="fact"
              id="animalFact"
              cols="40"
              rows="2"
              onChange={(e) => {
                setFact(e.target.value);
              }}
            ></textarea>
            <input
              type="submit"
              value="Add Fact"
              style={{
                marginTop: "1rem",
                padding: ".5rem",
                border: "1px solid black",
                borderRadius: "20px",
                color: "green",
              }}
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default AddFact;
