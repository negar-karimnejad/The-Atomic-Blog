/* eslint-disable react/prop-types */

function Button({ children, type, onClick, varient }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${varient === "primary" && " bg-green-500 hover:bg-green-600"}
        ${
          varient === "secondary" &&
          "bg-gray-300 hover:bg-gray-400 hover:text-white text-gray-900"
        }
        ${
          varient === "position" &&
          "bg-green-500 hover:bg-green-600 absolute right-0 left-0 mx-auto bottom-10 w-52 px-2 shadow-md"
        } text-base z-50 font-medium rounded-md py-2 px-5 transition-all`}
    >
      {children}
    </button>
  );
}

export default Button;
