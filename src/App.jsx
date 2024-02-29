/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Darkmood from "./components/Darkmood";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Mainbar from "./components/Mainbar";
import Navbar from "./components/Navbar";
import { PostContextProvider } from "./context/PostContext";

function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("fake-dark-mode");
  }, [isFakeDark]);

  return (
    <div className="bg-white">
      <PostContextProvider>
        <div className="p-5 flex flex-col min-h-[495px] justify-between">
          <Darkmood isFakeDark={isFakeDark} setIsFakeDark={setIsFakeDark} />
          <div>
            <Header />
            <Navbar />
            <Mainbar />
          </div>
        </div>
        <Footer />
      </PostContextProvider>
    </div>
  );
}

export default App;
