import React, { useState } from "react";
import styled from "styled-components";
import { AddExercise } from "./modals/AddExercise";
import { AddButton } from "./AddButton";

const Wrapper = styled.div`
  background-color: ${({theme}) => theme.colors.white};
  position: static;
  margin: 30px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  width: 100%;
  max-width: 300px;
  border-radius: 30px;
  img {
    width: 100%;
    max-width: 230px;
  }
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;



export const Excercise = ({ name, bodyPart, url }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <div>
        <p>{bodyPart}</p>
        <strong>{name}</strong>
      </div>
      <img src={url} alt={"Exercise instruction"} />

      <AddButton onClick={() => setIsOpen(true)}>+</AddButton>
      <AddExercise isOpen={isOpen} onClose={() => setIsOpen(false)} name={name} />
    </Wrapper>
  );
};
