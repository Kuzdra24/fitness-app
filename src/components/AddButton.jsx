import styled from 'styled-components'

export const AddButton = styled.button`
  background-image: linear-gradient(
    to right,
    #77a1d3 0%,
    #79cbca 51%,
    #77a1d3 100%
  );
  color: #fefefe;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  margin-top: 20px;
  font-size: 33px;
  display: block;
  background-size: 200% auto;
  cursor: pointer;
  transition: 0.5s ease-out;

  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
    transform: translate(0%, -10%);
  }
`;

