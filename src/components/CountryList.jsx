/* eslint-disable react/prop-types */
import Country from "./Country";
import Message from "./Message";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <div className="loader"></div>;

  const countries = cities.reduce((curr, item) => {
    if (!curr.map((el) => el.country).includes(item.country))
      return [...curr, { country: item.country, emoji: item.emoji }];
    else return curr;
  }, []);

  return (
    <div className="grid grid-cols-2 gap-5">
      {countries?.length ? (
        countries.map((country, i) => <Country key={i} country={country} />)
      ) : (
        <Message
          message={"Add your first city by clicking on a city on the map"}
        />
      )}
    </div>
  );
}

export default CountryList;
