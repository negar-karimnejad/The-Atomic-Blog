import { Link, useParams } from "react-router-dom";

function Map() {
  const { slug } = useParams();

  return (
    <div className="text-white grid grid-cols-2 h-full">
      <div className="flex flex-col justify-between h-full items-center py-5">
        <div className="flex flex-col items-center justify-center gap-10">
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
          <p className="text-xl font-medium max-w-sm text-center">
            👋 Add your first city by clicking on a city on the map
          </p>
        </div>
        <p className="text-sm text-gray-400">
          © Copyright 2024 by WorldWise Inc.
        </p>
      </div>
      <div></div>
    </div>
  );
}

export default Map;
