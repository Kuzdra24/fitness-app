import React, { useState, useEffect, createContext } from "react";
// import { fetchData, dataOptions } from "../data/fetchData";
import ExcerciseData from "../data/data.json";

export const Context = createContext({
  exercises: [],
  userExercises: [],
  addUserExercises: () => {},
  removeUserExercises: () => {},
  filterData: () => {},
});

function ContextProvider({ children }) {
  const [data, setData] = useState();
  const [allData, setAllData] = useState();
  const [userOptions, setUserOptions] = useState([]);
  const [userData, setUserData] = useState([]);
  
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
    fetch("http://localhost:8080/api/workouts/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);

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
            console.log("error");
            break;
        }
      });
      setData(allExcs);
    } else {
      setData(allData);
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
        userData,
        filterData,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export default ContextProvider;
