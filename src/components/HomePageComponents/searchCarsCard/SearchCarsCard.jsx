import FakeData from "@/Shared/FakeData";
import Cards from "./Cards";

const SearchCarsCard = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-16">
        Most Searched Cars
      </h1>

      <div className="grid grid-cols-1 gap-10 mx-10 md:mx-0 md:grid-cols-4  ">
        {FakeData.carList.map((car, index) => {
          return <Cards key={index} car={car}></Cards>;
        })}
      </div>
    </div>
  );
};

export default SearchCarsCard;
