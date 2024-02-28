import { NavLink } from "react-router-dom";

function AppNav() {
  return (
    <div className="flex bg-gray-700 rounded-md ">
      <NavLink
        to="cities"
        className="rounded-md py-1 px-3 aria-[current=page]:bg-gray-900"
      >
        CITIES
      </NavLink>
      <NavLink
        to="countries"
        className="rounded-md py-1 px-3 aria-[current=page]:bg-gray-900"
      >
        COUNTRIES
      </NavLink>
    </div>
  );
}

export default AppNav;
