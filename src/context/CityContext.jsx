/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import data from "../data/cities.json";

const CityContext = createContext();

const initialState = {
  cities: [],
  currentCity: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "getCities":
      return {
        ...state,
        cities: action.payload,
      };
    case "getCity":
      return {
        ...state,
        currentCity: action.payload,
      };

    case "addCity":
      return {
        ...state,
        cities: [...state.cities, action.payload],
      };

    case "deleteCity":
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload),
      };

    default:
      throw new Error("Unknown Action Type");
  }
};

function CityContextProvider({ children }) {
  const [{ cities, currentCity }, dispatch] = useReducer(reducer, initialState);

  const getCity = (id) => {
    const data = cities.find((city) => String(city.id) === String(id));
    dispatch({ type: "getCity", payload: data });
  };

  const addCity = (newCity) => {
    dispatch({ type: "addCity", payload: newCity });
  };

  const deleteCity = (id) => {
    dispatch({ type: "deleteCity", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "getCities", payload: data });
  }, []);

  return (
    <CityContext.Provider
      value={{ cities, getCity, addCity, deleteCity, currentCity }}
    >
      {children}
    </CityContext.Provider>
  );
}

function useCity() {
  const context = useContext(CityContext);
  return context;
}

export { CityContextProvider, useCity };
