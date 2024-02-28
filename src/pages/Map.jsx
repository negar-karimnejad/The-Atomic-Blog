import Leftbar from "../components/Leftbar";
import Rightbar from "../components/Rightbar";

function Map() {
  return (
    <div className="text-white grid sm:grid-cols-2 h-full">
      <Leftbar />
      <Rightbar />
    </div>
  );
}

export default Map;
