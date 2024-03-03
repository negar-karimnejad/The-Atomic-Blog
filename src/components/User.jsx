import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function User() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <div className="absolute top-5 right-5 z-50 flex items-center justify-between gap-3 bg-zinc-700 rounded-md p-2">
      <img loading="lazy" className="rounded-full w-8 h-8" src={user.avatar} alt="" />
      <p>Welcome, {user.name}</p>
      <button
        onClick={() => {
          logout();
          navigate("/");
        }}
        className="bg-zinc-600 rounded-md p-1 text-sm transition-all hover:bg-zinc-800"
      >
        LOGOUT
      </button>
    </div>
  );
}

export default User;
