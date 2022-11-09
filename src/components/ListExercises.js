import React, { useContext, useState } from "react";
import { Context } from "../context/context";
import { Excercise } from "./Excercise";
import { Pagination } from "@mui/material";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: 10;
  height: 100%;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
`;

export const List = () => {
  const { data } = useContext(Context);
  const [currentPage, setCurrentPage] = useState(1);

  const exercisesPerPage = 9;

  const indexOfLastExc = currentPage * exercisesPerPage;
  const indexOfFirstExc = indexOfLastExc - exercisesPerPage;

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (data === undefined) {
    return (
      <Wrapper>
        <h1>Excercise</h1>
        <p>Loading...</p>
      </Wrapper>
    );
  }
  const currentExercises = data.slice(indexOfFirstExc, indexOfLastExc);
  return (
    <Wrapper>
      {currentExercises.map(({ name, bodyPart, gifUrl, id }) => (
        <Excercise key={id} url={gifUrl} name={name} bodyPart={bodyPart} />
      ))}
      <Pagination
        style={{
          margin: '20px'
        }}
        count={Math.ceil(data.length / exercisesPerPage)}
        shape="rounded"
        page={currentPage}
        defaultPage={1}
        onChange={paginate}
      />
    </Wrapper>
  );
};
