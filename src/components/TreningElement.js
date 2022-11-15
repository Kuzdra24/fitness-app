import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  height: 80px;
  background-color: #fff;
  margin: 20px;
  box-shadow: -1px 3px 13px -5px rgba(66, 68, 90, 1);
  display: flex;
  align-items: center;
`;

export const TreningElement = () => {
  return (
    <Wrapper>
      <p>1. Bench press</p>
    </Wrapper>
  );
};
