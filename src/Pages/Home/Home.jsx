import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";

const Home = () => {
  return (
    <>
      <SignInButton mode="modal">
        <Button>SignIn Button</Button>
      </SignInButton>
    </>
  );
};

export default Home;
