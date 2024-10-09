
import heroCar from "../../../../assets/CarPng/Hero.png";
import Search from "../Search/Search";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col items-center p-10 py-20 gap-4 h-[32rem] md:h-[40rem] w-full bg-[#eef0fc]">
        <h2 className="text-lg ">
          Find the Perfect Car to Buy or Rent Nearby{" "}
        </h2>
        <h2 className="text-6xl md:text-[60px] font-bold text-center  bg-gradient-to-r from-gray-800  to-gray-500 inline-block text-transparent bg-clip-text">
          Find Your Dream Car{" "}
        </h2>
        <Search></Search>

        <img
          src={heroCar}
          alt=""
          className="w-[70rem] transform scale-x-[-1] "
        />
      </div>
    </div>
  );
};

export default Hero;

//bg-[#eef0fc]
