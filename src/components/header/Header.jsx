import { UserButton, useUser } from "@clerk/clerk-react";
import logo from "../../../public/logo.svg";
import { Button } from "../ui/button";

const Header = () => {
  const { isSignedIn } = useUser();
  return (
    <>
      <nav className="container mx-auto p-6 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="" className="w-4 mr-2" />
            <h1 className="text-2xl font-medium">RetailCars</h1>
          </div>

          <ul className="hidden md:flex gap-10 font-medium">
            <li className="hover:scale-110 transition-all cursor-pointer">
              Home
            </li>
            <li className="hover:scale-110 transition-all cursor-pointer">
              New Cars
            </li>
            <li className="hover:scale-110 transition-all cursor-pointer">
              Preowned
            </li>
            <li className="hover:scale-110 transition-all cursor-pointer">
              About Us
            </li>
            <li className="hover:scale-110 transition-all cursor-pointer">
              Contact
            </li>
          </ul>

          <div>
            {isSignedIn ? (
              <div className="flex items-center space-x-3">
                <UserButton></UserButton>
                <Button>Add Listing</Button>
              </div>
            ) : (
              <Button>Add Listing</Button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
