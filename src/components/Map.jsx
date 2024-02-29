/* eslint-disable no-unused-vars */
import { useNavigate, useSearchParams } from "react-router-dom";

function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div onClick={() => navigate("form")}>
      <p>
        position{lat}-{lng}
      </p>
    </div>
  );
}

export default Map;
