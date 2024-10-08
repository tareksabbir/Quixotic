import FooterAboutUs from "./FooterAboutUs";
import FooterBlog from "./FooterBlog";
import FooterFeatures from "./FooterFeatures";
import FooterLogo from "./FooterLogo";
const Footer = () => {
  return (

      <footer className=" relative z-10 bg-[#090E34] pt-20 lg:pt-[100px] text-gray-400 mt-10 md:mt-20">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap justify-between">
            <FooterLogo></FooterLogo>
            <FooterAboutUs></FooterAboutUs>
            <FooterFeatures></FooterFeatures>
            <FooterBlog></FooterBlog>
          </div>
        </div>
      </footer>
      
   
  );
};

export default Footer;
