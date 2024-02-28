/* eslint-disable react/prop-types */
import { Link, useNavigate, useParams } from "react-router-dom";
import City, { formatDate } from "./City";
import Message from "./Message";
import { useEffect, useState } from "react";

function CitiesList({ cities, isLoading }) {
  const [selectedCity, setSelectedCity] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedCity(cities.find((city) => city.id === Number(id)));
  }, [id, cities]);

  if (isLoading) return <div className="loader"></div>;
  if (!cities?.length)
    return (
      <Message
        message={"Add your first city by clicking on a city on the map"}
      />
    );

  return (
    <>
      {selectedCity && (
        <div className="w-full bg-gray-700 rounded-md p-5 flex flex-col">
          <p className="text-[12px] text-gray-300">CITY NAME</p>
          <p className="mb-8">
            {selectedCity.emoji}
            <span className="text-xl ml-4 font-medium">
              {selectedCity.cityName}
            </span>
          </p>
          <p className="text-[12px] text-gray-300">
            YOU WENT TO {selectedCity.cityName} ON
          </p>
          <p className="mb-8">{formatDate(selectedCity.date)}</p>
          <p className="text-[12px] text-gray-300">LEARN MORE</p>
          <Link
            className="underline text-orange-300 mb-8" target="_blank"
            to={`https://en.wikipedia.org/wiki/${selectedCity.cityName}`}
          >
            Check out Used on Wikipedia →
          </Link>
          <div>
            <button
              onClick={() => navigate("/app/cities")}
              className="border p-2 rounded-md"
            >
              ← BACK
            </button>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-3 w-full items-center justify-center">
        {!selectedCity &&
          cities?.length &&
          cities.map((city) => <City key={city.id} city={city} />)}
      </div>
    </>
  );
}

export default CitiesList;
