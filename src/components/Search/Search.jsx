import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import Data from "@/Shared/Data";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    
    <div className="p-2 md:p-4 bg-white rounded-full flex flex-row gap-4 md:gap-10 items-center w-full md:w-[50%] mt-10">
  <Select>
    <SelectTrigger className="outline-none border-none w-full shadow-none text-base">
      <SelectValue placeholder="Cars" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="New">New</SelectItem>
      <SelectItem value="Preowned">Preowned</SelectItem>
    </SelectContent>
  </Select>

  <Separator orientation="vertical" className="hidden md:block" />

  <Select>
    <SelectTrigger className="outline-none border-none w-full shadow-none text-base">
      <SelectValue placeholder="Car Makes" />
    </SelectTrigger>
    <SelectContent>
      {Data.CarMakes.map((maker) => (
        <SelectItem key={maker.id} value={maker.name}>
          {maker.name}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>

  <Separator orientation="vertical" className="hidden md:block" />

  <Select>
    <SelectTrigger className="outline-none border-none w-full shadow-none text-base">
      <SelectValue placeholder="Pricing" />
    </SelectTrigger>
    <SelectContent>
      {Data.Pricing.map((price) => (
        <SelectItem key={price.id} value={price.amount}>
          $ {price.amount}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>

  <Separator orientation="vertical" className="hidden md:block" />

  <div>
    <IoIosSearch className="text-[10rem] bg-primary rounded-full text-white p-2 h-[2.25rem] w-[2.25rem] hover:scale-105 transition-all cursor-pointer" />

    
  </div>
</div>


  );
};

export default Search;
