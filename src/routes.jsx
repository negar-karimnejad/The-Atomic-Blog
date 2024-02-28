import CitiesList from "./components/CitiesList";
import CityItem from "./components/CityItem";
import CountryList from "./components/CountryList";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Map from "./pages/Map";
import PageNotFound from "./pages/PageNotFound";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";

export const routes = [
  { path: "/", element: <Homepage /> },
  { path: "/product", element: <Product /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/login", element: <Login /> },
  { path: "/app/:slug", element: <Map /> },
  { path: "*", element: <PageNotFound /> },
  { path: "/app", element: <Map />,children:[
    { path: "cities", element: <CitiesList /> },
    { path: "cities/:id", element: <CityItem /> },
    { path: "countries", element: <CountryList /> },
  ] },
];
