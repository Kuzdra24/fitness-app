import React, { useContext, useState } from "react";
import { Context } from "../context/context";
import { Excercise } from "./Excercise";
import { Pagination } from "@mui/material";
import styled from "styled-components";

const Wrapper = styled.div`
  div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }
  display: flex;
  flex: 10;
  flex-direction: column;
  justify-content: center;
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
      <Wrapper style={{height: "100vh", display: "block"}}>
        <h2 style={{margin: "35px"}}>Loading...</h2>
      </Wrapper>
    );
  }
  const currentExercises = data.slice(indexOfFirstExc, indexOfLastExc);
  return (
    <Wrapper>
      <div>
        {currentExercises.map(({ name, bodyPart, gifUrl, id }) => (
          <Excercise key={id} url={gifUrl} name={name} bodyPart={bodyPart} />
        ))}
      </div>

      <Pagination
        style={{
          margin: "20px auto",
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
