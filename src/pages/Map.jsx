import { Link } from "react-router-dom";

function Map() {
  return (
    <div>
      <div>
        <Link to={"/"}>
          <img src="/logo.png" alt="" className="w-56 object-cover" />
        </Link>
        <Link to="">CITIES</Link>
        <Link to="">CONTRIES</Link>
      </div>
      <div></div>
    </div>
  );
}

export default Map;
