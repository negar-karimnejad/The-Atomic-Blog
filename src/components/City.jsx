/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function City({ city }) {
  const { id, emoji, cityName, date, position } = city;

  return (
    <Link
      to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      className="border-l-4 border-l-green-500 flex rounded-md justify-between md:w-7/12 w-10/12 bg-gray-700 py-2 px-5"
    >
      <div className="flex items-center gap-4">
        <p>{emoji}</p>
        <p>{cityName}</p>
      </div>
      <div className="flex items-center gap-4">
        <p>({formatDate(date)})</p>
        <p
          onClick={() => {}}
          className="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center pb-0.5 cursor-pointer transition-all hover:bg-orange-500"
        >
          &times;
        </p>
      </div>
    </Link>
  );
}

export default City;
