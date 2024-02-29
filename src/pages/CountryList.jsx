/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Country from "../components/Country";
import Message from "../components/Message";
import data from "../data/cities.json";

function CountryList() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setCities(data);
    setIsLoading(false);
  }, []);

  const countries = cities.reduce((curr, item) => {
    if (!curr.map((el) => el.country).includes(item.country))
      return [...curr, { country: item.country, emoji: item.emoji }];
    else return curr;
  }, []);

  if (isLoading) return <div className="loader"></div>;
  if (!countries.length && !isLoading)
  
    return (
      <Message
        message={"Add your first city by clicking on a city on the map"}
      />
    );

  return (
    <div className="grid grid-cols-2 gap-5">
      {countries?.length &&
        countries.map((country, i) => <Country key={i} country={country} />)}
    </div>
  );
}

export default CountryList;
