import React, { useState, useContext } from "react";
import { Context } from "../../context/context";
import { Wrapper, CloseButton, OtherContent } from "./Modal.styles";

export const Modal = ({ name, isOpen, onClose }) => {
  const [numOfSeries, setNumOfSeries] = useState("");
  const [numOfReps, setNumOfReps] = useState("");

  const ctx = useContext(Context);

  const handleSeriesChange = (e) => {
    setNumOfSeries(e.target.value);
  };

  const handleRepsChange = (e) => {
    setNumOfReps(e.target.value);
  };

  const addExercise = (e) => {
    e.preventDefault();
    const result = `${numOfSeries} x ${numOfReps}`;
    let obj = { name, SeriesXReps: result };
    ctx.addUserExercises(obj);
  };

  if (!isOpen) return null;
  return (
    <>
      <OtherContent onClick={onClose} />
      <Wrapper>
        <div className="modal__wrapper">
          <CloseButton onClick={onClose}>X</CloseButton>
          <h3>{name}</h3>

          <form>
            <label htmlFor="num_of_series">number of series: </label>
            <input
              id="num_of_series"
              type="number"
              onChange={handleSeriesChange}
            />

            <label htmlFor="num_of_reps">reps per series: </label>
            <input id="num_of_reps" type="number" onChange={handleRepsChange} />

            <button onClick={addExercise}>Add</button>
          </form>
        </div>
      </Wrapper>
    </>
  );
};
