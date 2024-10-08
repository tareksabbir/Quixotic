import FeaturesCard from "./FeaturesCard";
import featuresCardData from "./FeaturesCardData";

const Features = () => {
  return (
    <div className="container mx-auto hidden md:block">
      <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px] mx-9 md:mx-5">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Features
                </span>
                <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                  Main Features Of Play
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                Explore a curated selection of premium cars that redefine luxury and comfort.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            {featuresCardData.map((data) => (
              <FeaturesCard key={data.id} data={data}></FeaturesCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
