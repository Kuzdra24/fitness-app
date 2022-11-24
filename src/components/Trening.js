import React, { useContext } from "react";
import { Context } from "../context/context";
import styled from "styled-components";
import { Workout } from "./Workout";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 5;
`;

export const Trening = () => {
  const { userData } = useContext(Context);

  const displayExercises = (arr) =>
    arr.map(({ name, SeriesXReps }, i) => (
      <li key={i}>
       {name} | <strong>{SeriesXReps}</strong>
       <hr />
      </li>
    ));

  console.log(userData);
  if (!userData) {
    return <p>Loadning ...</p>;
  } else {
    return (
      <Wrapper>
        <h1>Your Plan: </h1>
        {userData.map(({ name, exercises, target }) => (
          <Workout
            bg={"#AEF8B6"}
            name={name}
            target={target}
            exercises={displayExercises(exercises)}
            key={name}
          />
        ))}
      </Wrapper>
    );
  }
};
