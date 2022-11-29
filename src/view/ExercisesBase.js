import React from "react";
import styled from "styled-components";
import { Filterbar } from "../components/Filterbar";
import { List } from "../components/ListExercises";

const ExcWrapper = styled.div`
  display: flex;
  width: 80vw;
`;

export const ExercisesBase = () => {
  return (
    <ExcWrapper>
      <Filterbar />
      <List />
    </ExcWrapper>
  );
};
