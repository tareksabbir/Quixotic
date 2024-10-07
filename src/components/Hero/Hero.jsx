import Search from "../Search/Search";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col items-center p-10 py-20 gap-6 h-[600px] w-full bg-[#eef0fc]">
        <h2 className="text-lg">Find the Perfect Car to Buy or Rent Nearby </h2>
        <h2 className="text-[60px] font-bold">Find Your Dream Car </h2>
        <Search></Search>
      </div>
    </div>
  );
};

export default Hero;
