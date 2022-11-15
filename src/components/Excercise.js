import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "./Modal";

const Wrapper = styled.div`
  background-color: #fff;
  position: static;
  margin: 30px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  width: 100%;
  max-width: 300px;
  box-shadow: -1px 3px 13px -5px rgba(66, 68, 90, 1);
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

const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  position: static;
  margin-top: 20px;
  font-size: 33px;
  display: flex;
  justify-content: center;
  background-color: #f1f1f1;
  align-items: center;
  cursor: pointer;
  transition: 0.3s ease-out;
  &:hover {
    background-color: #ddd;
    transform: translate(0%, -10%);
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

      <Button onClick={() => setIsOpen(true)}>
        +
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} name={name} />
       
     
    </Wrapper>
  );
};
