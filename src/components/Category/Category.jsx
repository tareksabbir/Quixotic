import Data from "@/Shared/Data";

const Category = () => {
  return (
    <div className="mt-20 md:mt-[15rem] container mx-auto">
      <h2 className="text-3xl text-center font-bold mb-6">
        Browse By Category
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20 mt-10 ">
        {Data.Category.map((category) => {
          return (
            <div
              key={category.id}
              className="flex flex-col items-center justify-center border p-3 rounded-xl text-sm hover:shadow cursor-pointer"
            >
              <img src={category.icon} alt="" className="w-12 h-12 " />
              <h1>{category.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
