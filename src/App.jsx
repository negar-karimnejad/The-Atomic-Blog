import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { CityContextProvider } from "./context/cityContext";
import { AuthProvider } from "./context/AuthContext";

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
