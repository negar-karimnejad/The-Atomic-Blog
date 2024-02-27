import { Link } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  return (
    <div className="absolute z-50 w-full right-0 top-0 px-20 py-12 flex items-center justify-between">
      <Link to={"/"}>
        <img src="/logo.png" alt="" className="w-56 object-cover" />
      </Link>
      <div className="flex items-center gap-10 text-white font-medium">
        <Link to={"/pricing"}>PRICING</Link>
        <Link to={"/product"}>PRODUCT</Link>
        <Link to="/login">
          <Button>LOGIN</Button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
