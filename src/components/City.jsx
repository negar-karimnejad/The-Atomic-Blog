/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { formatDate } from "../utilities/formatDate";
import { useCity } from "../context/CityContext";

function City({ city }) {
  const { id, emoji, cityName, date, position } = city;
  const { currentCity, deleteCity } = useCity();

  return (
    <Link
      to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      className={`${
        currentCity?.id === id && " border border-green-500"
      } border-l-4 border-l-green-500 flex rounded-md justify-between md:w-9/12 w-10/12 bg-gray-700 py-2 px-5`}
    >
      <div className="flex items-center gap-4">
        <p className="text-green-500 text-md font-medium">{emoji}</p>
        <p>{cityName}</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="max-sm:hidden">({formatDate(date)})</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            deleteCity(id);
          }}
          className="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center pb-0.5 cursor-pointer transition-all hover:bg-orange-500"
        >
          &times;
        </button>
      </div>
    </Link>
  );
}

export default City;
