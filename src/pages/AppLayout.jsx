import { useNavigate } from "react-router-dom";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import User from "../components/User";
import { useAuth } from "../context/AuthContext";

function AppLayout() {
  const navigate = useNavigate();
  const { user } = useAuth();

  if (!user) return navigate("/");
  return (
    <div className="text-white flex h-full relative">
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
