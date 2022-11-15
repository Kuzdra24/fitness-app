import React from "react";
import styled from "styled-components";
import { Checkbox } from "./FilterElement";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  height: 100vh;
  padding: 10px;
`;

const FilterTitle = styled.strong`
  margin: 20px 0 8px;
  color: #303030;
`;

export const Filterbar = () => {
  return (
    <Wrapper>
      <FilterTitle>Filter by body-part</FilterTitle>
      <Checkbox id="chest" type="bodyPart" />
      <Checkbox id="back" type="bodyPart" />
      <Checkbox id="legs" type="bodyPart" />
      <Checkbox id="arms" type="bodyPart" />
      <Checkbox id="shoulders" type="bodyPart" />

      <FilterTitle>Filter by Equipment</FilterTitle>
      <Checkbox id="barbell" type="equipment" />
      <Checkbox id="cable" type="equipment" />
      <Checkbox id="body weight" type="equipment" />
      <Checkbox id="dumbbells" type="equipment" />
      <Checkbox id="machines" type="equipment" />
    </Wrapper>
  );
};
