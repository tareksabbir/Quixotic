import Category from "@/components/HomePageComponents/Category/Category";
import Header from "@/components/header/Header";
import Hero from "@/components/HomePageComponents/Hero/Hero";
import SearchCarsCard from "@/components/HomePageComponents/searchCarsCard/SearchCarsCard";


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
