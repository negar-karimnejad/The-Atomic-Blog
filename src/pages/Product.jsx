import Navbar from "../components/Navbar";

function Product() {
  return (
    <>
      <Navbar />
      <div className="pt-20 w-full gap-16 h-full flex items-center justify-center">
        <div className="flex-1 flex justify-end">
          <img src="/img-1.jpg" alt="" className="w-8/12 h-8/12" />
        </div>
        <div className="flex-1 text-white">
          <h1 className="text-5xl font-medium">About WorldWide.</h1>
          <div className="mt-10 flex flex-col gap-5 text-md max-w-md">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
              dicta illum vero culpa cum quaerat architecto sapiente eius non
              soluta, molestiae nihil laborum, placeat debitis, laboriosam at
              fuga perspiciatis?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              doloribus libero sunt expedita ratione iusto, magni, id sapiente
              sequi officiis et.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
