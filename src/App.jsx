import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { AuthProvider } from "./context/AuthContext";
import { CityContextProvider } from "./context/CityContext";

function App() {
  const router = useRoutes(routes);

  return (
    <div className="w-full h-full bg-gray-800">
      <AuthProvider>
        <CityContextProvider>{router}</CityContextProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
