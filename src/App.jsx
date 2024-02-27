import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import Navbar from "./components/Navbar";

function App() {
  const router = useRoutes(routes);

  return (
    <div className="m-5">
      <Navbar />
      {router}
    </div>
  );
}

export default App;
