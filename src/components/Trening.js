import React from "react";
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
  return (
    <Wrapper>
      <h1>Your Exercises: </h1>
      <TreningElement />
    </Wrapper>
  );
};
