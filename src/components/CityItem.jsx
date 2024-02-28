import { useParams, useSearchParams } from "react-router-dom";

function CityItem() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  console.log(setSearchParams);

  return (
    <div className="w-full bg-gray-700 rounded-md p-5 flex flex-col">
      <p>city{id}</p>
      <p>
        Position
        {lat}-{lng}
      </p>
      {/* <p className="text-[12px] text-gray-300">CITY NAME</p>
      <p className="mb-8">
        {selectedCity?.emoji}
        <span className="text-xl ml-4 font-medium">
          {selectedCity?.cityName}
        </span>
      </p>
      <p className="text-[12px] text-gray-300">
        YOU WENT TO {selectedCity?.cityName} ON
      </p>
      <p className="mb-8">{formatDate(selectedCity?.date)}</p>
      <p className="text-[12px] text-gray-300">LEARN MORE</p>
      <Link
        className="underline text-orange-300 mb-8"
        target="_blank"
        to={`https://en.wikipedia.org/wiki/${selectedCity?.cityName}`}
      >
        Check out Used on Wikipedia →
      </Link>
      <div>
        <button
          onClick={() => navigate("cities")}
          className="border p-2 rounded-md"
        >
          ← BACK
        </button>
      </div> */}
    </div>
  );
}

export default CityItem;
