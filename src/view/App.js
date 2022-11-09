import React from "react";
import "../assets/styles/global-styles.scss";
import { List } from "../components/ListExercises";
import { Navbar } from "../components/Navbar";
import { Filterbar } from "../components/Filterbar";
import styled from 'styled-components'; 

const ExcWrapper = styled.div`
  display: flex;
`

const App = () => {
  return (
    <div>
      <Navbar />
      <ExcWrapper>
        <Filterbar />
        <List />
      </ExcWrapper>
    </div>
  );
};

export default App;
