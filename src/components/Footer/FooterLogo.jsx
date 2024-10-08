import logo from "/logo3.svg";
import FooterSvg1 from "../Svg/FooterSvg1";
import FooterSvg2 from "../Svg/FooterSvg2";
import FooterSvg3 from "../Svg/FooterSvg3";
import FooterSvg4 from "../Svg/FooterSvg4";
const FooterLogo = () => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
        <div className="mb-10 w-full">
          <a
            href="javascript:void(0)"
            className="mb-6 inline-block  max-h-[100px]"
          >
            <img src={logo} alt="logo" className="max-w-full" />
          </a>
          <p className="mb-8 lg:max-w-[270px] text-base text-gray-7">
          Our dedicated staff are on call to guide you through the purchasing experience
          </p>
          <div className="-mx-3 flex items-center">
            <a
              href="javascript:void(0)"
              className="px-3 text-gray-7 hover:text-white"
            >
              <FooterSvg1></FooterSvg1>
            </a>
            <a
              href="javascript:void(0)"
              className="px-3 text-gray-7 hover:text-white"
            >
              <FooterSvg2></FooterSvg2>
            </a>
            <a
              href="javascript:void(0)"
              className="px-3 text-gray-7 hover:text-white"
            >
              <FooterSvg3></FooterSvg3>
            </a>
            <a
              href="javascript:void(0)"
              className="px-3 text-gray-7 hover:text-white"
            >
              <FooterSvg4></FooterSvg4>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterLogo;
