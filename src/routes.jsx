/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";

import CityItem from "./components/CityItem";
import CitiesList from "./pages/CitiesList";
import CountryList from "./pages/CountryList";
import Form from "./pages/Form";
import ProtectedRoute from "./pages/ProtectedRoute";

// Optimizing Bundle Size With Code Splitting
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Homepage = lazy(() => import("./pages/Homepage"));
const Login = lazy(() => import("./pages/Login"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Product = lazy(() => import("./pages/Product"));

export const routes = [
  { path: "", element: <Homepage /> },
  { path: "product", element: <Product /> },
  { path: "pricing", element: <Pricing /> },
  { path: "login", element: <Login /> },
  { path: "*", element: <PageNotFound /> },
  {
    path: "/app/*",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "", element: <CitiesList /> },
      { path: "cities", element: <CitiesList /> },
      { path: "cities/:id", element: <CityItem /> },
      { path: "countries", element: <CountryList /> },
      { path: "form", element: <Form /> },
    ],
  },
];
