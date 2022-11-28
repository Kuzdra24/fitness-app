import React from "react";
import "../assets/styles/global-styles.scss";
import { List } from "../components/ListExercises";
import { Navbar } from "../components/Navbar";
import { Filterbar } from "../components/Filterbar";
import { Trening } from "../components/Trening";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Progress } from "../components/Calendar";
import styled from "styled-components";

const ExcWrapper = styled.div`
  display: flex;
  width: 80vw;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Progress />
        </>
      ),
    },
    {
      path: "/exercises",
      element: (
        <>
          <Navbar />
          <ExcWrapper>
            <Filterbar />
            <List />
          </ExcWrapper>
        </>
      ),
    },
    {
      path: "/trening",
      element: (
        <>
          <Navbar />
          <Trening />
        </>
      ),
    },
  ]);

  return (
    <Wrapper>
      <RouterProvider router={router} />
    </Wrapper>
  );
};

export default App;
