/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import City from "../components/City";
import Message from "../components/Message";
import data from "../data/cities.json";

function CitiesList() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setCities(data);
    setIsLoading(false);
  }, []);

  if (isLoading) return <div className="loader"></div>;
  if (!cities?.length)
    return (
      <Message
        message={"Add your first city by clicking on a city on the map"}
      />
    );

  return (
    <>
      <div className="flex flex-col gap-3 w-full items-center justify-center">
        {cities?.length &&
          cities.map((city) => <City key={city.id} city={city} />)}
      </div>
    </>
  );
}

export default CitiesList;
