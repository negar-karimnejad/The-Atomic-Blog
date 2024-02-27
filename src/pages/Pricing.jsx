import Navbar from "../components/Navbar";

function Pricing() {
  return (
    <>
      <Navbar />
      <div className="pt-20 w-full gap-16 h-full flex items-center justify-center">
        <div className="flex-1 flex justify-end">
          <div className="text-white flex flex-col gap-10">
            <h1 className="text-5xl font-medium leading-[60px]">
              Simple pricing.
              <br /> Just $9/month.
            </h1>
            <p className="max-w-md">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              vel labore mollitia iusto. Recusandae quos provident, laboriosam
              fugit voluptatem iste.
            </p>
          </div>
        </div>
        <div className="flex-1 flex">
          <img src="/img-2.jpg" alt="" className="w-8/12 h-8/12" />
        </div>
      </div>
    </>
  );
}

export default Pricing;
