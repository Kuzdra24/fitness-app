import React, { useState, useContext } from "react";
import { Context } from "../../context/context";
import { Wrapper, CloseButton, OtherContent, Select } from "./Modal.styles";
import { AddButton } from "../AddButton";
import { SuccesAdd } from "../SuccesAdd";

export const Modal = ({ name, isOpen, onClose }) => {
  const [numOfSeries, setNumOfSeries] = useState("");
  const [numOfReps, setNumOfReps] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const { userData } = useContext(Context);

  async function postData(url, data) {
    const response = await fetch(url, {
      method: "POST",
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
    let obj = { name, SeriesXReps: result };
    await postData("http://192.168.1.10:8000/trenings?id=1/exercises", obj);
    setIsVisible(true);
  };

  if (!isOpen) return null;
  return (
    <>
      <OtherContent onClick={onClose} />
      <Wrapper>
      <SuccesAdd isVisible={isVisible} />
        <div className="modal__wrapper">
          <CloseButton onClick={onClose}>X</CloseButton>
          <h3>{name}</h3>

          <form>
            <Select name="trenig">
              <option value="">Choose Workout</option>
              {userData.map(({ name }, i) => (
                <option key={i} value={name}>
                  {name}
                </option>
              ))}
            </Select>

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
