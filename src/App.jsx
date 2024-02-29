import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { CityContextProvider } from "./context/cityContext";

function App() {
  const router = useRoutes(routes);

  return (
    <div className="w-full p-6 h-[606px]">
      <div className="w-full h-full bg-gray-800">
        <CityContextProvider>{router}</CityContextProvider>
      </div>
    </div>
  );
}

export default App;
