import Category from "@/components/Category/Category";
import Header from "@/components/header/Header";
import Hero from "@/components/Hero/Hero";
import SearchCarsCard from "@/components/searchCarsCard/SearchCarsCard";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Category></Category>
      <SearchCarsCard></SearchCarsCard>
    </>
  );
};

export default Home;
