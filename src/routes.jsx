import CityItem from "./components/CityItem";
import AppLayout from "./pages/AppLayout";
import CitiesList from "./pages/CitiesList";
import CountryList from "./pages/CountryList";
import Form from "./pages/Form";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";

export const routes = [
  { path: "", element: <Homepage /> },
  { path: "product", element: <Product /> },
  { path: "pricing", element: <Pricing /> },
  { path: "login", element: <Login /> },
  { path: "*", element: <PageNotFound /> },
  {
    path: "/app/*",
    element: <AppLayout />,
    children: [
      { path: "", element: <CitiesList /> },
      { path: "cities", element: <CitiesList /> },
      { path: "cities/:id", element: <CityItem /> },
      { path: "countries", element: <CountryList /> },
      { path: "form", element: <Form /> },
    ],
  },
];
