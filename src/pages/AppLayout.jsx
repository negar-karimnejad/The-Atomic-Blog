import Map from "../components/Map";
import Sidebar from "../components/Sidebar";

function AppLayout() {
  return (
    <div className="text-white flex h-full">
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
