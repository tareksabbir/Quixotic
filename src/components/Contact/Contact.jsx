import ContactAddress from "./ContactAddress";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <section id="contact" className="relative py-20 md:py-[120px]">
        <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
        <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full  bg-[#eef0fc] dark:bg-dark-700 lg:h-[45%] xl:h-1/2"></div>
        <div className="container px-4 mx-auto">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12 ml-10 md:ml-0">
              <div className="ud-contact-content-wrapper">
                <div className="ud-contact-title mb-12 lg:mb-[150px]">
                  <span className="mb-6 block text-base font-medium text-primary dark:text-white">
                    CONTACT US
                  </span>
                  <h2 className="max-w-[260px] text-[35px] font-semibold leading-[1.14] text-dark dark:text-white">
                    Lets talk about your problem.
                  </h2>
                </div>
                <ContactAddress></ContactAddress>
              </div>
            </div>
            <ContactForm></ContactForm>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
