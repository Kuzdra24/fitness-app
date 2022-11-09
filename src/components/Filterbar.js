import React, { useState, useContext } from "react";
import { Context } from "../context/context";
import styled from "styled-components";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  height: 100vh;
  
`;

const Select = styled.select`
    padding: 5px 10px;
    background-color: white;
    border: 1px solid #303030;
    margin: 30px 0;
`

export const Filterbar = () => {
  const [bodyPart, setBodyPart] = useState("");
  // const [equipment, setEquipment] = useState("")

  const ctx = useContext(Context);

  const onBodyPartChange = (e) => {
    setBodyPart(e.target.value);
    ctx.filterExercises(e.target.value);
    
  }

  return (
    <Wrapper >
      <Select value={bodyPart} onChange={onBodyPartChange}>
        <option value="">Chose body-part</option>
        <option value="chest">Chest</option>
        <option value="back">Back</option>
        <option value="legs">Legs</option>
        <option value="arms">Arms</option>
      </Select>

      <Select name="equipment" >
        <option value="">Chose Equipment</option>
        <option value="chest">Chest</option>
        <option value="back">Back</option>
        <option value="legs">Legs</option>
        <option value="arms">Arms</option>
      </Select>

      <Select name="Target">
        <option value="">Chose body-part</option>
        <option value="chest">Chest</option>
        <option value="back">Back</option>
        <option value="legs">Legs</option>
        <option value="arms">Arms</option>
      </Select>
      <button type="submit">Filter</button>
    </Wrapper>
  );
};
