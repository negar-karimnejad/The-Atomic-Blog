/* eslint-disable react/prop-types */

function Button({ children, type, onClick, varient }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${
        varient === "primary"
          ? " bg-green-500 hover:bg-green-600"
          : "bg-gray-300 hover:bg-gray-400 hover:text-white text-gray-900"
      } text-base font-medium rounded-md py-2 px-5 transition-all`}
    >
      {children}
    </button>
  );
}

export default Button;
