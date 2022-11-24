import React, { useContext } from "react";
import styled from "styled-components";
import { CloseButton } from "./Modals/Modal.styles";
import { Context } from "../context/context";

const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  height: 80px;
  background-color: #fff;
  margin: 20px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
`;


export const TreningElement = ({ name, series, index }) => {
  const ctx = useContext(Context);

  return (
    <Wrapper>
      <strong>
        {index}. {name}
      </strong>

      <p>Series X Reps: {series}</p>
      <CloseButton
        style={{ position: "static" }}
        onClick={() => ctx.removeUserExercises(name)}
      >
        X
      </CloseButton>
    </Wrapper>
  );
};
