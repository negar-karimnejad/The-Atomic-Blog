import Loader from "./Loader";

function FullpageLoader() {
  return (
    <div className="w-full h-full bg-gray-800 flex items-center justify-center mx-auto">
      <Loader />
    </div>
  );
}

export default FullpageLoader;
