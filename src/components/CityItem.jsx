/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useCity } from "../context/cityContext";
import Button from "./Button";
import { formatDate } from "../utilities/formatDate";

function CityItem() {
  const { cities, cityItem, city } = useCity();
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  useEffect(() => {
    cityItem(id);
  }, [id]);

  return (
    <div className="w-full bg-gray-700 rounded-md p-5 flex flex-col">
      <p>city{id}</p>
      <p>
        Position
        {lat}-{lng}
      </p>
      <p className="text-[12px] text-gray-300">CITY NAME</p>
      <p className="mb-8">
        {city?.emoji}
        <span className="text-xl ml-4 font-medium">{city?.cityName}</span>
      </p>
      <p className="text-[12px] text-gray-300">
        YOU WENT TO {city?.cityName} ON
      </p>
      <p className="mb-8">{formatDate(city.date)}</p>
      <p className="text-[12px] text-gray-300">LEARN MORE</p>
      <Link
        className="underline text-orange-300 mb-8"
        target="_blank"
        to={`https://en.wikipedia.org/wiki/${city?.cityName}`}
      >
        Check out Used on Wikipedia →
      </Link>
      <div>
        <Button
          varient={"secondary"}
          type="button"
          onClick={() => navigate("cities")}
        >
          ← Back
        </Button>
      </div>
    </div>
  );
}

export default CityItem;
