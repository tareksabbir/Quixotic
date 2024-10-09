import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="flex items-center justify-between px-5">
        <h2 className="font-bold text-4xl text-gray-700">My Listing</h2>
        <Link to="/add-listing">
          <Button>+ Add New Listing</Button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
