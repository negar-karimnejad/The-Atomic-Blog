import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

function Login() {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  return (
    <>
      <Navbar />
      <div className="w-full h-full flex items-center justify-center">
        <form className="mt-10 w-11/12 sm:max-w-lg font-medium text-lg text-white gap-5 bg-gray-600 flex flex-col p-10 rounded-lg">
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
            <Link to={"/app/cities"}>
              <Button>LOGIN</Button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
