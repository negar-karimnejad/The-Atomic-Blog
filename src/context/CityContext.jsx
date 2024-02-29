/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext } from "react";
import data from "../data/cities.json";

const CityContext = createContext();

function CityContextProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const cityItem = (id) => {
    const city = cities.find((city) => city.id === id);
    setCity(city);
  };

  useEffect(() => {
    setIsLoading(true);
    setCities(data);
    setIsLoading(false);
  }, []);

  return (
    <CityContext.Provider value={{ cities, isLoading, cityItem, city }}>
      {children}
    </CityContext.Provider>
  );
}

function useCity() {
  const context = useContext(CityContext);
  return context;
}

export { useCity, CityContextProvider };
