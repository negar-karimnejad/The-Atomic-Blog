import { useState } from "react";
import BackButton from "../components/BackButton";
import Button from "../components/Button";

function Form() {
  const [cityName, setCityName] = useState("");
  const [tripTime, setTripTime] = useState("");
  const [tripeNote, setTripeNote] = useState("");

  return (
    <form className="md:max-w-md w-5/6 mx-auto bg-slate-700 rounded-md px-8 p-5 mb-2">
      <div className="mb-2">
        <label
          className="block text-gray-300 text-sm font-medium mb-1"
          htmlFor="city-name"
        >
          City name
        </label>
        <input
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
          id="city-name"
          type="text"
        />
      </div>
      <div className="mb-2">
        <label
          className="block text-gray-300 text-sm font-medium mb-1"
          htmlFor="when-visited"
        >
          When did you go to?
        </label>
        <input
          value={tripTime}
          onChange={(e) => setTripTime(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
          id="when-visited"
          type="text"
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
          value={tripeNote}
          onChange={(e) => setTripeNote(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
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
