import React, { useContext } from "react";
import { Context } from "../context/context";
import styled from "styled-components";
import { TreningElement } from "./TreningElement";

const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 5;
`;

export const Trening = () => {
  const { userExercises } = useContext(Context);
  return (
    <Wrapper>
      <h1>Your Exercises: </h1>
      {userExercises.map(({ name, SeriesXReps }, i) => (
        <TreningElement name={name} series={SeriesXReps} index={i+1} key={i} />
      ))}
    </Wrapper>
  );
};
