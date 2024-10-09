import { UserButton, useUser } from "@clerk/clerk-react";
import logo from "/logo2.svg";
// import logo from "/logo.svg";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const { isSignedIn } = useUser();
  return (
    <>
      <nav className="container mx-auto p-4 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* <img src={logo} alt="" className="w-4 mr-2" /> */}
           <Link to={"/"}> <img src={logo} alt="" className="w-[7rem]" /></Link>
            {/* <h1 className="text-2xl font-medium">RetailCars</h1> */}
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
                <Link to={"/profile"}>
                  <Button className="rounded-full">Add Listing</Button>
                </Link>
              </div>
            ) : (
              <Link to={"/profile"}>
                <Button className="rounded-full">Add Listing</Button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
