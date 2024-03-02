/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import data from "../data/cities.json";

const CityContext = createContext();

function CityContextProvider({ children }) {
  const [cities, setCities] = useState(data);
  const [currentCity, setCurrentCity] = useState(null);

  const getCity = (id) => {
    setCurrentCity(cities.find((city) => city.id === Number(id)));
  };
  
  const addCity = (newCity) => {
    setCities([...cities, newCity]);
  };

  return (
    <CityContext.Provider value={{ cities, getCity, addCity, currentCity }}>
      {children}
    </CityContext.Provider>
  );
}

function useCity() {
  const context = useContext(CityContext);
  return context;
}

export { CityContextProvider, useCity };
