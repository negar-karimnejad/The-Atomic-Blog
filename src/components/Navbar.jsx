import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex items-center justify-between px-10">
      <div>
        <img src="/logo.png" alt="" className="w-52 h- object-cover" />
      </div>
      <div className="flex items-center gap-3 text-white font-medium">
        <Link to={"/pricing"}>PRICING</Link>
        <Link to={"/product"}>PRODUCT</Link>
        <button>LOGIN</button>
      </div>
    </div>
  );
}

export default Navbar;
