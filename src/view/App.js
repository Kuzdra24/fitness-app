import React from "react";
import { Routes, Route } from "react-router-dom";
import { ExercisesBase } from "./ExercisesBase";
import WorkoutPlan from "./WorkoutPlan";
import { Navbar } from "../components/Navbar";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "../assets/styles/theme";
import { GlobalStyle } from "../assets/styles/GlobalStyles";
import "../assets/styles/font.css";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Hello world</h1>} />
          <Route path="/trening" element={<WorkoutPlan />} />
          <Route path="/exercises" element={<ExercisesBase />} />
        </Routes>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
