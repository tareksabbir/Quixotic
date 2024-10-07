import Search from "../Search/Search";
import heroCar from "../../assets/CarPng/finalimg.png";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col items-center p-10 py-20 gap-4 h-[680px] w-full bg-[#eef0fc]">
        <h2 className="text-lg">Find the Perfect Car to Buy or Rent Nearby </h2>
        <h2 className="text-[60px] font-bold">Find Your Dream Car </h2>
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
