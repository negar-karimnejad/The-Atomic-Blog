import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import User from "../components/User";

function AppLayout() {
  return (
    <div className="text-white flex h-full relative">
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
