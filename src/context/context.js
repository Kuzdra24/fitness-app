import React, { useState, useEffect, createContext } from "react";
import { fetchData, dataOptions } from "../data/fetchData";

export const Context = createContext({
  exercises: [],
  isLoading: true,
  filterExercises: () => {},
});

function ContextProvider({ children }) {
  const [data, setData] = useState();
  const [allData, setAllData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://exercisedb.p.rapidapi.com/exercises";

  const filterExercises = (option) => {
    if (option) {
      const filterData = allData.filter(({ bodyPart }) => bodyPart.includes(option));
      setData(filterData);
    }else{
      setData(allData);
    }
  };

  useEffect(() => {
    fetchData(url, dataOptions)
      .then((res) => {
        setAllData(res)
        setData(res)
      })
      .catch((err) => console.error(err));
    setIsLoading(false);
  }, []);

  return (
    <Context.Provider
      value={{
        data,
        isLoading,
        filterExercises
      }}
    >
      {children}
    </Context.Provider>
  );
}
export default ContextProvider;
