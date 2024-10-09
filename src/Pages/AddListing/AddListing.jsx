import CarDetailsMapping from "@/Pages/AddListing/Component/CarDetailsMapping";

const AddListing = () => {
  return (
    <>
      <div className="container mx-auto my-10">
        <div className="px-5">
          <h2 className="font-bold text-4xl text-gray-700">Add New Listing</h2>
          <form className="p-10 border rounded-xl mt-10">
            {/* car details */}
            <div>
              <h2 className="font-medium text-xl mb-6">Car Details</h2>
              <CarDetailsMapping></CarDetailsMapping>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddListing;
