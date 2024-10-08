/* eslint-disable react/prop-types */

const Cards = ({ car }) => {
  return (
    <div className="border flex flex-col items-center justify-center p-4">
      <div className="w-full h-[180px]  flex items-center justify-center">
        <img src={car?.image} alt="" className="max-h-full object-contain" />
      </div>
      <div>
        <h1 className="text-xl font-bold ">{car?.name}</h1>
      </div>
    </div>
  );
};

export default Cards;
