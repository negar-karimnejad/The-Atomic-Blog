import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to={"/"}>
      <img loading="lazy" src="/logo.png" alt="" className="w-56 object-cover" />
    </Link>
  );
}

export default Logo;
