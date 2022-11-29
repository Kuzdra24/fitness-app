import React, { useState, useContext } from "react";
import { Context } from "../../context/context";
import { Wrapper, CloseButton, OtherContent } from "./AddExercise.style";
import { AddButton } from "../AddButton";
import { SuccesAdd } from "../notifications/SuccesAdd";
import { SelectWorkout } from "../SelectWorkout";
// import {useWidth} from '../../hooks/useWidth'

export const AddExercise = ({ name, isOpen, onClose }) => {
  const [numOfSeries, setNumOfSeries] = useState("");
  const [numOfReps, setNumOfReps] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [trening, setTrening] = useState("");
  const { userData } = useContext(Context);

  async function putData(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  const handleSeriesChange = (e) => {
    setNumOfSeries(e.target.value);
  };

  const handleRepsChange = (e) => {
    setNumOfReps(e.target.value);
  };

  const addExercise = async (e) => {
    e.preventDefault();
    const result = `${numOfSeries} x ${numOfReps}`;
    const obj = { exercise: { name, SeriesXReps: result } };
    const selectedTrening = userData.filter(({ name }) => name === trening);
    const [id] = selectedTrening;
    await putData(`http://192.168.1.10:8080/api/workouts/add/${id._id}`, obj);
    setIsVisible(true);
  };

  if (!isOpen) return null;
  return (
    <>
      <OtherContent onClick={onClose} />
      <Wrapper >
        <SuccesAdd
          isVisible={isVisible}
          onInfoClose={() => setIsVisible(false)}
        />

        <div className="modal__wrapper">
          <CloseButton onClick={onClose}>X</CloseButton>
          <h3>{name}</h3>

          <form>
            <SelectWorkout setTrening={setTrening} userData={userData} />

            <label htmlFor="num_of_series">number of series: </label>
            <input
              id="num_of_series"
              type="number"
              onChange={handleSeriesChange}
            />

            <label htmlFor="num_of_reps">reps per series: </label>
            <input id="num_of_reps" type="number" onChange={handleRepsChange} />

            <AddButton onClick={addExercise}>+</AddButton>
          </form>
        </div>
      </Wrapper>
    </>
  );
};
