import { Link } from "react-router-dom";
import Button from "./Button";

function NavLink() {
  const pathname = window.location.pathname;

  return (
    <div className="hidden md:flex items-center gap-5 lg:gap-10 text-white font-medium">
      <Link
        to={"/pricing"}
        className={`${pathname === "/pricing" && "text-green-400"}`}
      >
        PRICING
      </Link>
      <Link
        to={"/product"}
        className={`${pathname === "/product" && "text-green-400"}`}
      >
        PRODUCT
      </Link>
      <Link to="/login">
        <Button varient={"primary"} type="button" onClick={() => {}}>
          LOGIN
        </Button>
      </Link>
    </div>
  );
}

export default NavLink;
