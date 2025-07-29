import NewArrival from "../NewArrival/NewArrival";
import HomeInfo from "./HomeInfo";

const index = () => {
  return (
    <section className=" flex flex-col justify-between ">
      <HomeInfo  />
      <div className="container sm:mx-32">
        <NewArrival/>
      </div>
    </section>
  );
};

export default index;
