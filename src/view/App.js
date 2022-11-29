import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { List } from "../components/ListExercises";
import { Navbar } from "../components/Navbar";
import { Filterbar } from "../components/Filterbar";
import { Trening } from "../components/Trening";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "../assets/styles/theme";
import { GlobalStyle } from "../assets/styles/GlobalStyles";
import "../assets/styles/font.css";

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
          <h2>Welcome into main Route</h2>
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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <RouterProvider router={router} />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
