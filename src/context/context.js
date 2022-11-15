import React, { useState, useEffect, createContext } from "react";
// import { fetchData, dataOptions } from "../data/fetchData";
import ExcerciseData from "../data/data.json";

export const Context = createContext({
  exercises: [],
  filterData: () => {},
});

function ContextProvider({ children }) {
  const [data, setData] = useState();
  const [allData, setAllData] = useState();
  const [userOptions, setUserOptions] = useState([]);

  // const url = "https://exercisedb.p.rapidapi.com/exercises";

  const filterData = (excs, isChecked) => {
    if (isChecked) {
      let arr = [...userOptions, excs];
      setUserOptions(arr);
    } else {
      const remElement = userOptions.filter(
        ({ name }) => !name.includes(excs.name)
      );
      setUserOptions(remElement);
    }
    if (!userOptions) {
      setUserOptions(allData);
    }
  };

  useEffect(() => {
    const allExcs = [];
    if (userOptions.length !== 0) {
      userOptions.forEach(({ name, type }) => {
        switch (type) {
          case "bodyPart":
            const filterBodyData = allData.filter(({ bodyPart }) =>
              bodyPart.includes(name)
            );
            allExcs.push(...filterBodyData);
            break;
          case "equipment":
            const filterData = allData.filter(({ equipment }) =>
              equipment.includes(name)
            );
            allExcs.push(...filterData);
            break;
          default:
            console.log("eee");
            break;
        }
      });
      setData(allExcs);
    } else {
      setData(allData);
      console.log(allData);
    }
  }, [userOptions, allData]);

  useEffect(() => {
    // fetchData(url, dataOptions)
    //   .then((res) => {
    //     setAllData(res);
    //     setData(res);
    //   })
    //   .catch((err) => console.error(err));
    setTimeout(() => {
      setAllData(ExcerciseData);
      setData(ExcerciseData);
    }, 800);
  }, []);

  return (
    <Context.Provider
      value={{
        data,
        filterData,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export default ContextProvider;
