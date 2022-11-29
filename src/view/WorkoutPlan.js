import React, { useContext } from "react";
import { Context } from "../context/context";
import styled from "styled-components";
import { Workout } from "../components/Workout";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 5;
`;

const WorkoutPlan = () => {
  const { userData } = useContext(Context);
  
  const displayExercises = (arr) =>
    arr.map(({ name, SeriesXReps }, i) => (
      <li key={i} style={{margin: "10px 0"}}>
       {name} | <strong>{SeriesXReps}</strong>
      </li>
    ));

  if (!userData) {
    return <p>Loadning ...</p>;
  } else {
    return (
      <Wrapper>
        <h1>Your Plan: </h1>
        {userData.map(({ name, exercises, target },i) => (
          <Workout
            i={i}
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

export default WorkoutPlan;