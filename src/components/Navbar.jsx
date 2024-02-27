import { Link } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";

function Navbar() {
  const pathname = window.location.pathname;

  return (
    <div className="absolute z-50 w-full right-0 top-0 px-20 py-12 flex items-center justify-between">
      <Logo />
      <div className="flex items-center gap-10 text-white font-medium">
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
          <Button>LOGIN</Button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
