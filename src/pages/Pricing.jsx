import Navbar from "../components/Navbar";

function Pricing() {
  return (
    <>
      <Navbar />
      <div className="pt-28 max-md:pb-10 px-10 w-full gap-16 flex flex-col md:flex-row items-center">
        <div className="flex-1 flex justify-end">
          <div className="text-white max-md:text-center">
            <h1 className="sm:text-4xl text-3xl font-medium md:leading-[50px] mb-5">
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
        <div className="flex-1 flex max-md:justify-center">
          <img
            loading="lazy"
            src="/img-2.jpg"
            alt="pricing image"
            className="lg:w-7/12 lg:h-7/12"
          />
        </div>
      </div>
    </>
  );
}

export default Pricing;
