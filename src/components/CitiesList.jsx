import { useEffect, useState } from "react";
import data from "../data/cities.json";
import City from "./City";

function CitiesList() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setCities(data);
    setIsLoading(false);
  }, []);

  return (
    <div className="flex flex-col gap-3 w-full items-center justify-center">
      {isLoading && <p>Loading...</p>}
      {cities.length ? (
        cities.map((city) => <City key={city.id} {...city} />)
      ) : (
        <p className="text-xl font-medium max-w-sm text-center">
          👋 Add your first city by clicking on a city on the map
        </p>
      )}
    </div>
  );
}

export default CitiesList;
