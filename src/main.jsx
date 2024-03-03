import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import FullpageLoader from "./components/FullpageLoader.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <div className="w-full p-6 md:h-[606px]">
      <Suspense fallback={<FullpageLoader />}>
        <App />
      </Suspense>
    </div>
  </BrowserRouter>
  // {/* </React.StrictMode>, */}
);
