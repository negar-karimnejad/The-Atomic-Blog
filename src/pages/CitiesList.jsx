/* eslint-disable react/prop-types */
import City from "../components/City";
import Message from "../components/Message";
import { useCity } from "../context/cityContext";

function CitiesList() {
  const { isLoading, cities } = useCity();

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
