import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import Navbar from "./components/Navbar";

function App() {
  const router = useRoutes(routes);

  return (
    <div className="w-full p-6 h-[606px]">
      <Navbar />
      <div className="w-full h-full bg-gray-800">{router}</div>
    </div>
  );
}

export default App;
