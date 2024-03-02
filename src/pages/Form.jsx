import { useEffect, useId, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useCity } from "../context/cityContext";
import { useUrlPosition } from "../hooks/useUrlPosition";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Form() {
  const navigate = useNavigate();
  const messageId = useId();

  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("");
  const [error, setError] = useState("");
  const [isLoadingGeoCoding, setIsLoadingGeoCoding] = useState(false);

  const { addCity } = useCity();
  const [lat, lng] = useUrlPosition();

  useEffect(() => {
    if (!lat && !lng) return;
    const fetchingCityData = async () => {
      try {
        setIsLoadingGeoCoding(true);
        setError(false);
        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
        const data = await res.json();

        if (!data.countryCode)
          throw new Error(
            "That doesn't seem to be a city. Click somewhere else 😉"
          );

        setCityName(data.city || data.locality || "");
        setCountryName(data.countryName || "");
        setEmoji(data.countryCode);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoadingGeoCoding(false);
      }
    };
    fetchingCityData();
  }, [lat, lng]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCity = {
      id: messageId,
      cityName,
      country: countryName,
      emoji,
      date: startDate,
      notes,
      position: { lat, lng },
    };
    addCity(newCity);
    navigate("/app/cities");
  };
  if (isLoadingGeoCoding) return <Loader />;
  if (!lat && !lng)
    return <Message message="Start by clicking somewhere on the map." />;
  if (error) return <Message message={error} />;

  return (
    <form
      onSubmit={handleSubmit}
      className="md:max-w-md w-5/6 mx-auto bg-slate-700 rounded-md px-8 p-5 mb-2"
    >
      <div className="mb-2">
        <label
          className="block text-gray-300 text-sm font-medium mb-1"
          htmlFor="city-name"
        >
          City name
        </label>
        <div className="flex items-center bg-white shadow py-2 px-3 border font-medium rounded">
          <input
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            className="appearance-none w-full  text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="city-name"
            type="text"
          />
          <span className="text-green-500 font-bold">{emoji}</span>
        </div>
      </div>
      <div className="mb-2">
        <label
          className="block text-gray-300 text-sm font-medium mb-1"
          htmlFor="when-visited"
        >
          When did you go to?
        </label>
        <DatePicker
          className="shadow appearance-none border font-medium rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
          id="when-visited"
          dateFormat="dd/MM/yyyy"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>

      <div className="mb-1">
        <label
          className="block text-gray-300 text-sm font-medium mb-1"
          htmlFor="trip-notes"
        >
          Notes about your trip
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="shadow appearance-none border font-medium rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
          id="trip-notes"
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <Button varient={"primary"} type="submit" onClick={() => {}}>
          Add
        </Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
