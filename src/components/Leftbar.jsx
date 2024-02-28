import { Link, useParams } from "react-router-dom";
import CitiesList from "./CitiesList";

function Leftbar() {
  const { slug } = useParams();

  return (
    <div className="flex flex-col  justify-between h-full items-center py-5">
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
            to="/app/contries"
            className={`${
              slug === "contries" && "bg-gray-900"
            } rounded-md py-1 px-3`}
          >
            CONTRIES
          </Link>
        </div>
        <CitiesList />
      </div>
      <p className="text-sm text-gray-400">
        &copy; Copyright 2024 by WorldWise Inc.
      </p>
    </div>
  );
}

export default Leftbar;
