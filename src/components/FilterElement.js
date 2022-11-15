import React, { useContext } from "react";
import {Context} from "../context/context";

import styled from "styled-components";

const Option = styled.div`
  width: 100%;
  display: flex;

  align-items: center;
  input {
    margin: 5px;
  }
`;

export const Checkbox = ({ id, type }) => {
  const ctx = useContext(Context)
  
  const handleChange = (e) => {
    let obj = {name: id, type}
    ctx.filterData(obj, e.target.checked);  
  };

  return (
    <Option>
      <input type="checkbox" id={id} onChange={handleChange} />
      <label htmlFor={id}>{id}</label>
    </Option>
  );
};
