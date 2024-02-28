import { Link } from "react-router-dom";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

function Homepage() {
  return (
    <>
      <Navbar />

      <div className="relative bg-[url('/bg.jpg')] bg-cover bg-no-repeat bg-center w-full h-full text-white gap-5 text-xl text-center flex flex-col items-center justify-center">
        <div className="z-20">
          <h1 className="text-5xl font-medium mb-10 leading-[60px]">
            You travel the world. <br />
            WorldWise keeps track of your adventures.
          </h1>

          <p className="max-w-4xl text-gray-400 mb-10">
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wandered the world.
          </p>
          <Link to="/login"></Link>
          <Button varient={"primary"} type="button" onClick={() => {}}>
            START TRACKING NOW
          </Button>
        </div>
        <div className="z-0 w-full h-full absolute top-0 left-0 bg-neutral-800 opacity-80"></div>
      </div>
    </>
  );
}

export default Homepage;
