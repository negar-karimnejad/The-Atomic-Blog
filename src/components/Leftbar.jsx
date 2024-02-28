import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/cities.json";
import CitiesList from "./CitiesList";
import CountryList from "./CountryList";

function Leftbar() {

  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setCities(data);
    setIsLoading(false);
  }, []);
  const slug = "cities";
  return (
    <div className="flex flex-col justify-between h-full items-center p-5">
      <div className="flex flex-col items-center justify-center gap-10 w-full">
        <Link to={"/"}>
          <img src="/logo.png" alt="" className="w-56 object-cover" />
        </Link>
        <div className="flex bg-gray-700 rounded-md ">
          <Link
            to="/app/cities"
            className={`${
              slug === "cities" && "bg-gray-900"
            } rounded-md py-1 px-3`}
          >
            CITIES
          </Link>
          <Link
            to="/app/countries"
            className={`${
              slug === "countries" && "bg-gray-900"
            } rounded-md py-1 px-3`}
          >
            COUNTRIES
          </Link>
        </div>
        {slug === "cities" && (
          <CitiesList cities={cities} isLoading={isLoading} />
        )}
        {slug === "countries" && (
          <CountryList cities={cities} isLoading={isLoading} />
        )}
      </div>
      <p className="text-sm text-gray-400">
        &copy; Copyright 2024 by WorldWise Inc.
      </p>
    </div>
  );
}

export default Leftbar;
