import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 300px;
  height: 100px;
  background-color: ${({theme}) => theme.colors.success};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  position: fixed;
  z-index: 9999;
  border-radius: 20px;
  animation-name: show-box;
  animation-duration: 1s;
  transform: translate(0, -300%);
  @keyframes show-box {
    0% {
      transform: translate(0, -500%);
    }
    100% {
      transform: translate(0, -300%);
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  border: none;
  background-color: ${({theme}) => theme.colors.success};
  font-weight: bold;
  cursor: pointer;
  transform: translate(130px, -20px);
  strong {
    color: ${({theme}) => theme.colors.darkGreen};
  }
`;

export const SuccesAdd = ({ isVisible, onInfoClose }) => {
  if (!isVisible) return null;
  return (
    <Wrapper>
      <div>
        <CloseButton onClick={onInfoClose}>
          <strong>X</strong>
        </CloseButton>
      </div>

      <strong style={{ color: "#145214" }}>Succes added Workout 😁</strong>
    </Wrapper>
  );
};
