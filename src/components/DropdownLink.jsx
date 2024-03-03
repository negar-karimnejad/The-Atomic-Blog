import { Link } from "react-router-dom";

function DropdownLink() {
  const pathname = window.location.pathname;

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-40 flex md:hidden flex-col items-start  absolute right-0 top-10 gap-2 text-gray-500 bg-white rounded-md p-3 font-medium"
    >
      <Link
        to={"/pricing"}
        className={`${
          pathname === "/pricing" && "text-green-400"
        } hover:text-gray-700`}
      >
        PRICING
      </Link>
      <Link
        to={"/product"}
        className={`${
          pathname === "/product" && "text-green-400"
        } hover:text-gray-700`}
      >
        PRODUCT
      </Link>
      <Link
        to="/login"
        className="border border-white border-t-gray-200 w-full pt-2 hover:text-gray-700"
      >
        LOGIN
      </Link>
    </div>
  );
}

export default DropdownLink;
