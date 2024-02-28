/* eslint-disable react/prop-types */

function Country({ country }) {
  const { emoji, country: countryName } = country;

  return (
    <div className="text-center text-xl w-40 border-l-4 border-l-orange-500 rounded-md bg-gray-700 py-2 px-5">
      <p>{emoji}</p>
      <p>{countryName}</p>
    </div>
  );
}

export default Country;
