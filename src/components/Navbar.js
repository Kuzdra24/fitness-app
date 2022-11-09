import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { ReactComponent as UserIcon } from "../assets/icons/user.svg";

const Wrapper = styled.div`
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid #ccc;
  svg{
    margin: 0 30px;
    height: 30px;
    width: 30px;
  }
  div{
    display: flex;
    align-items: center;
  }
`;

export const Navbar = () => {
  return (
    <Wrapper>
      <Logo />
      <div >
        <p>patryk@gmail.com</p>
        <UserIcon />
      </div>
      
    </Wrapper>
  );
};
