import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as UserIcon } from "../assets/icons/user.svg";
import { useWidth } from "../hooks/useWidth";

const Wrapper = styled.div`
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid #ccc;
  h1 {
    font-size: 18px;
  }
  svg {
    margin: 0 25px;
    height: 30px;
    width: 30px;
    cursor: pointer;
  }
  ul {
    display: ${({ width }) => (width > 600 ? "flex" : "none")};
    li {
      list-style: none;
      margin: 0 20px;
      cursor: pointer;
    }
  }
`;

export const Navbar = () => {
  const width = useWidth();

  return (
    <Wrapper width={width}>
      <h1>Hello Patryk 💪🏽</h1>
      <ul>
        <li>
          <Link to={"/trening"}>Trening Plan</Link>
        </li>
        <li>
          <Link to={"/"}>Track Progress</Link>
        </li>
        <li>
          <Link to={"/exercises"}>Exercises Base</Link>
        </li>
      </ul>
      <UserIcon />
    </Wrapper>
  );
};
