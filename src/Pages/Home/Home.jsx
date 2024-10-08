import Contact from "@/components/Contact/Contact";
import Category from "@/components/HomePageComponents/Category/Category";

import Hero from "@/components/HomePageComponents/Hero/Hero";
import SearchCarsCard from "@/components/HomePageComponents/searchCarsCard/SearchCarsCard";


const Home = () => {
  return (
    <>
      <Hero></Hero>
      <Category></Category> 
      <SearchCarsCard></SearchCarsCard>
      <Contact></Contact>
   
    </>
  );
};

export default Home;
