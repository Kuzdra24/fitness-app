import React from "react";
import styled from "styled-components";

const OtherContent = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
`;

const CloseButton = styled.button`
  background-color: #ddd;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-weight: bold;
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px;
`;

const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  max-width: 500px;
  height: 400px;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .modal__wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

export const Modal = ({ name, isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <>
      <OtherContent />
      <Wrapper>
        <div className="modal__wrapper">
          <CloseButton onClick={onClose}>X</CloseButton>
          <h2>{name}</h2>
          <form>
            <label htmlFor="num_of_series">number of series: </label>
            <input id="num_of_series" type="number"/><br/>

            <label htmlFor="num_of_reps">reps per series: </label>
            <input id="num_of_reps" type="number"/><br/>

            <button onClick={(e) => {e.preventDefault()}}>Add</button>
          </form>
        </div>
      </Wrapper>
    </>
  );
};
