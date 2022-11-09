import React from "react";
import styled from "styled-components";
import { ReactComponent as Eye } from "../assets/icons/eye.svg";

const Wrapper = styled.div`
  background-color: #fff;
  margin: 30px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  width: 100%;
  max-width: 600px;
  box-shadow: -1px 3px 13px -5px rgba(66, 68, 90, 1);
  img {
    width: 100%;
    max-width: 130px;
  }
  div {
    display: flex;
    flex-direction: column;
  }
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  margin: 5px;
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
  return (
    <Wrapper>
      <div>
        <p>{bodyPart}</p>
        <strong>{name}</strong>
      </div>
      <img src={url} alt={"Exercise instruction"} />
      <div>
        <Button onClick={() => console.log('Will be add')}>+</Button>
        <Button>
          <Eye width="40px" height="40px" />
        </Button>
      </div>
    </Wrapper>
  );
};
