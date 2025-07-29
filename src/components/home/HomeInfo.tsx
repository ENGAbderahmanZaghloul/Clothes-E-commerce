import "./home.css";

const home = () => {
  return (
    <div className=" pt-8  ">
      <div className="flex flex-col text-center items-center  justify-between gap-10 md:flex-row md:text-left px-1 lg:px-24 lg:items-center lg:justify-center">
        <div className=" mt-5 flex flex-col gap-4 items-center md:items-start mb-10 w-[100%] lg:w-[50%] mr-3  ">
          <h1 className="text-4xl/8 font-black md:text-4xl/8 lg:text-6xl  ">
            FIND ClOTHES 
            THAT MATCHES 
            YOUR STYLE
          </h1>
          <p className="text-sm">
            "Browse through our diverse range of meticulously crafted garments,
            designed <br />
            to bring out your individuality and cater to your sense of style."
          </p>
          <button className="bg-black text-white py-4 px-12 w-fit rounded-full">
            Shop Now
          </button>
          <div className="grid grid-cols-3 md:grid-cols-3 lg:flex gap-7 ">
            <div>
              <h1 className="text-2xl  lg:text-3xl font-extrabold">
                200 <span className="lg:text-4xl font-black">+</span>
              </h1>
              <p className="text-[12px]"> International Brands</p>
            </div>
            <div>
              <h1 className="text-2xl  lg:text-3xl font-extrabold">
                2,000 <span className="lg:text-4xl font-black">+</span>
              </h1>
              <p className="text-[12px]">High-quality Products</p>
            </div>
            <div>
              <h1 className="text-2xl  lg:text-3xl font-extrabold">
                30,000 <span className="lg:text-4xl font-black">+</span>
              </h1>
              <p className="text-[12px]">Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="lg:w-[50%] relative bottom-0 items-end home-img">
          {/* <img src="/public/icons/big-star.svg" className="text-right" alt="" /> */}
          <img
            src="/public/images/header-res-homepage.png"
          
            alt=""
          />
          {/* <img src="/public/icons/small-star.svg" alt="" /> */}
        </div>
      </div>
      <div className="flex justify-around flex-wrap gap-3 sm:gap-1 bg-black py-5 sm:px-3 md:px-4 ">
        <img src="/public/icons/versace-logo.svg" alt="" />
        <img src="/public/icons/zara-logo.svg" alt="" />
        <img src="/public/icons/gucci-logo.svg" alt="" />
        <img src="/public/icons/prada-logo.svg" alt="" />
        <img src="/public/icons/calvin-klein-logo.svg" alt="" />
      </div>
    </div>
  );
};

export default home;
