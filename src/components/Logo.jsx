import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to={"/"}>
      <img
        loading="lazy"
        src="/logo.png"
        alt="logo"
        className="w-56 max-sm:w-40 object-cover"
      />
    </Link>
  );
}

export default Logo;
