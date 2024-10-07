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
    <div className="p-2 md:p-4 bg-white rounded-md md:rounded-full flex-col  md:flex md:flex-row gap-10 px-5 items-center w-full md:w-[50%] ">
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
            {
                Data.Pricing.map(price =><SelectItem key={price.id} value={price.amount}>$ {price.amount}</SelectItem>)
            }
          
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="hidden md:block" />
      <div>
        <IoIosSearch className="text-[40px] bg-primary rounded-full text-white p-2 hover:scale-105 transition-all cursor-pointer" />
      </div>
    </div>
  );
};

export default Search;
