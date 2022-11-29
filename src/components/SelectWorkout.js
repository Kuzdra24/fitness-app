import React, { useContext } from "react";
import {Context} from "../context/context";
import styled from "styled-components";

export const Select = styled.select`
  margin-bottom: 10px;
  padding: 5px 10px;
`;

export const SelectWorkout = ({setTrening}) => {
  const { userData } = useContext(Context);
  return (
    <Select name="trenig" onChange={(e) => setTrening(e.target.value)}>
      <option value="">Choose Workout</option>
      {userData.map(({ name }, i) => (
        <option key={i} value={name}>
          {name}
        </option>
      ))}
    </Select>
  );
};
