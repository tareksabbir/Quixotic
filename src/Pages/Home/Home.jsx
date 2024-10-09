import Contact from "@/components/Contact/Contact";
import Category from "@/Pages/Home/Component/Category/Category";

import Hero from "@/Pages/Home/Component/Hero/Hero";
import SearchCarsCard from "@/Pages/Home/Component/searchCarsCard/SearchCarsCard";

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
