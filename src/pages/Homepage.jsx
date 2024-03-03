import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

function Homepage() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="relative bg-[url('/bg.jpg')] bg-cover bg-no-repeat bg-center w-full h-full text-white gap-5 text-xl text-center flex flex-col items-center justify-center">
        <div className="z-20 max-md:px-3 max-md:mt-10">
          <h1 className="lg:text-5xl text-4xl max-sm:text-3xl sm:px-5 font-medium mb-10 lg:leading-[60px]">
            You travel the world. <br />
            WorldWise keeps track of your adventures.
          </h1>

          <p className="max-md:text-sm max-w-4xl px-5 text-gray-400 mb-10">
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wandered the world.
          </p>
          <Link to="/login"></Link>
          <Button
            varient={"primary"}
            type="button"
            onClick={() => navigate("login")}
          >
            START TRACKING NOW
          </Button>
        </div>
        <div className="z-0 w-full h-full absolute top-0 left-0 bg-neutral-800 opacity-80"></div>
      </div>
    </>
  );
}

export default Homepage;
