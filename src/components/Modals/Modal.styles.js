import styled from "styled-components";

export const OtherContent = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const CloseButton = styled.button`
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
`;

export const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  max-width: 500px;
  height: 400px;
  background-color: #fff;
  top: 50%;
  left: 50%;
  padding: 20px;
  transform: translate(-50%, -50%);
  .modal__wrapper {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin: 80px;
      input{
        margin-bottom: 15px;
      }
    }
  }
`;
