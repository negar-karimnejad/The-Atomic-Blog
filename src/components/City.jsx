/* eslint-disable react/prop-types */

function City({city}) {
  return (
    <div
            
            className="border-l-4 border-l-green-500 flex rounded-md justify-between md:w-5/12 w-10/12 bg-gray-700 py-2 px-5"
          >
            <div className="flex items-center gap-4">
              <p>{city.emoji}</p>
              <p>{city.cityName}</p>
            </div>
            <div className="flex items-center gap-4">
              <p>({new Date(city.date).toLocaleDateString()})</p>
              <p
                onClick={() => {}}
                className="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center pb-0.5 cursor-pointer"
              >
                &times;
              </p>
            </div>
          </div>
  )
}

export default City