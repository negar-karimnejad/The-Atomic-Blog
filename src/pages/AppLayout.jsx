import Map from "../components/Map";
import Sidebar from "../components/Sidebar";

function AppLayout() {
 
  return (
    <div className="text-white grid sm:grid-cols-2 h-full">
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
