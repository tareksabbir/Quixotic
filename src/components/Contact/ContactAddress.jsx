import ContactSvgLocation from "../Svg/ContactSvgLocation";
import ContactSvgMail from "../Svg/ContactSvgMail";

const ContactAddress = () => {
  return (
    <>
      <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
        <div className="mb-8 flex w-[330px] max-w-full">
          <div className="mr-6 text-[32px] text-primary">
            <ContactSvgLocation></ContactSvgLocation>
          </div>
          <div>
            <h5 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
              Our Location
            </h5>
            <p className="text-base text-body-color dark:text-dark-6">
              401 Broadway, 24th Floor, Orchard Cloud View, London
            </p>
          </div>
        </div>
        <div className="mb-8 flex w-[330px] max-w-full">
          <div className="mr-6 text-[32px] text-primary">
            <ContactSvgMail></ContactSvgMail>
          </div>
          <div>
            <h5 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
              How Can We Help?
            </h5>
            <p className="text-base text-body-color dark:text-dark-6">
              info@yourdomain.com
            </p>
            <p className="mt-1 text-base text-body-color dark:text-dark-6">
              contact@yourdomain.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactAddress;
