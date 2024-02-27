function Homepage() {
  return (
    <div className="text-white gap-5 text-xl text-center relative flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">
        You travel the world. <br />
        WorldWise keeps track of your adventures.
      </h1>

      <p className="max-w-4xl text-gray-100">
        A world map that tracks your footsteps into every city you can think of.
        Never forget your wonderful experiences, and show your friends how you
        have wandered the world.
      </p>
      <button className="text-base bg-emerald-500 text-slate-800 font-medium rounded-md p-3 px-5">
        START TRACKING NOW
      </button>
      {/* <img
        src="/bg.jpg"
        alt=""
        className="z-10 absolute top-0 left-0 w-screen h-screen object-contain"
      /> */}
    </div>
  );
}

export default Homepage;
