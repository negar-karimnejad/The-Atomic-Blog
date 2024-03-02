import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  const { login, isAuthenticated } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) login(email, password);
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/app", { replace: true });
  }, [isAuthenticated, navigate]);

  return (
    <>
      <Navbar />
      <div className="w-full h-full flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="mt-10 w-11/12 sm:max-w-lg font-medium text-lg text-white gap-5 bg-gray-600 flex flex-col p-10 rounded-lg"
        >
          <label htmlFor="email" className="flex flex-col gap-2">
            Email address
            <input
              className="rounded-md bg-slate-200 p-2 text-gray-900 outline-none focus:bg-white"
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password" className="flex flex-col gap-2">
            Password
            <input
              className="rounded-md bg-slate-200 p-2 text-gray-900 outline-none focus:bg-white"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div>
            <Button varient={"primary"} type="submit">
              LOGIN
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
