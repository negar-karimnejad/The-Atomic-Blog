import { useSearchParams } from "react-router-dom";

function Rightbar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  console.log(lat, lng, setSearchParams);
  return <div>Rightbar</div>;
}

export default Rightbar;
