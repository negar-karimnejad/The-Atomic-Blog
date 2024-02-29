/* eslint-disable react/prop-types */

function Darkmood({ isFakeDark, setIsFakeDark }) {
  return (
    <button
      onClick={() => setIsFakeDark((prev) => !prev)}
      className="bg-purple-300 w-12 h-12 absolute right-0 top-0 z-50 text-3xl shadow flex"
    >
      {isFakeDark ? "☀️" : "🌙"}
    </button>
  );
}

export default Darkmood;
