/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useCity } from "../context/cityContext";
import BackButton from "./BackButton";
import Loader from "./Loader";
import { formatDate } from "../utilities/formatDate";

function CityItem() {
  const { getCity, currentCity } = useCity();
  const { id } = useParams();

  useEffect(() => {
    getCity(id);
  }, [id, getCity]);

  if (!currentCity) return <Loader />;

  return (
    <div className="w-8/12 bg-gray-700 rounded-md p-5 flex flex-col">
      <p className="text-[12px] text-gray-300">CITY NAME</p>
      <p className="mb-8">
        <span className="text-green-500 text-xl">{currentCity.emoji}</span>
        <span className="text-xl ml-4 font-medium">{currentCity.cityName}</span>
      </p>
      <p className="text-[12px] text-gray-300">
        YOU WENT TO {currentCity.cityName} ON
      </p>
      {/* <p className="mb-8">{formatDate(currentCity.date)}</p> */}
      <p className="text-[12px] text-gray-300">LEARN MORE</p>
      <Link
        className="underline text-orange-300 mb-8"
        target="_blank"
        to={`https://en.wikipedia.org/wiki/${currentCity.cityName}`}
      >
        Check out Used on Wikipedia →
      </Link>
      <div>
        <BackButton />
      </div>
    </div>
  );
}

export default CityItem;
