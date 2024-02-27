/* eslint-disable react/prop-types */

function Button({ children }) {
  return (
    <button className="text-base bg-green-500 text-slate-800 font-medium rounded-md py-2 px-5">
      {children}
    </button>
  );
}

export default Button;
