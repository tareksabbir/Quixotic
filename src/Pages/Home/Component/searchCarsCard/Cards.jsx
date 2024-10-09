/* eslint-disable react/prop-types */

import { Separator } from "@/components/ui/separator";
import { LuFuel } from "react-icons/lu";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOutlineOpenInNew } from "react-icons/md";

const Cards = ({ car }) => {
  return (
    <div className="rounded-xl bg-white border hover:shadow">
      <h2 className="absolute m-2 text-white text-sm rounded-xl px-2  bg-primary">New</h2>
      <img
        src={car?.image}
        alt=""
        className="max-h-full object-contain rounded-t-xl"
      />
      <div className=" p-4">
        <h1 className="text-lg font-bold mb-2">{car?.name}</h1>
        <Separator></Separator>
        <div className="grid grid-cols-3 gap-4 my-3">
          <div className="flex flex-col items-center ">
            <LuFuel className="mb-2" />
            <h2>{car?.miles}Miles</h2>
          </div>
          <div className="flex flex-col items-center ">
            <IoSpeedometerOutline className="mb-2" />

            <h2>{car?.fuelType} </h2>
          </div>
          <div className="flex flex-col items-center ">
            <GiGearStickPattern className="mb-2" />

            <h2>{car?.gearType}</h2>
          </div>
        </div>
        <Separator></Separator>
        <div className="flex justify-between items-center my-3 mx-2">
          <h2 className="font-bold">$ {car?.price}</h2>
          <h2 className="font-bold  flex items-center">
          <span>View Details</span>
            <MdOutlineOpenInNew className="font-bold ml-2"/>
            
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Cards;
