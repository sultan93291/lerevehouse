import CommonHeroBannerVideo from "@/components/common/HeroBanner/CommonHeroBannerVideo";
import heroBg from "@/assets/video/contact-bg.mp4";
import ContactForm from "@/components/Contact/ContactForm";
import contactBg from "../../assets/images/contact-bg.png";
import {
  ContactEmailSvg,
  ContactLocationSvg,
  ContactPhoneSvg,
  ContactTelephoneSvg,
} from "@/components/common/SvgContainer/SvgContainer";
import { Link } from "react-router-dom";

const Contact = () => {
  const handleDestinationMap = (address) => {
    const location = `https://www.google.com/maps?q=${address}`;
    window.open(location, "_blank");
  };


  return (
    <div>
      {/* Hero section */}
      <CommonHeroBannerVideo heroBg={heroBg} title="Contact" italic=" Us" />

      {/* main section */}
      <section className="flex flex-col lg:flex-row items-stretch md:gap-0 2xl:gap-16">
        {/* left side */}
        <ContactForm />

        {/* right side */}
        <div className="flex flex-col gap-10 md:gap-16  justify-center lg:w-1/2 lg:pl-12 md:py-10 lg:py-0  lg:my-6 my-0 lg:mr-6 mr-0">
          <div className="flex flex-col 2xl:flex-row items-center gap-4">
            {/* img */}
            <img
              className="md:h-[300px] lg:w-full xl:w-full 2xl:w-[276px] 3xl:w-[300px] md:w-full object-cover"
              src={contactBg}
              alt=""
            />
            {/* contents */}
            <div className="font-interTight ml-4 md:ml-0">
              <h3 className="font-interTight xl:text-xl text-lg">
                Le Reve Canada Headquarters:
              </h3>

              {/* canada information */}
              <div className="space-y-5 mt-5 ">
                <div
                  onClick={() => {
                    handleDestinationMap(
                      "3130 West 6th avenue - V6K 1X6 Vancouver British Columbia Canada"
                    );
                  }}
                  className="flex cursor-pointer items-center gap-2 text-text-black"
                >
                  <ContactLocationSvg />
                  <p className="xl:w-2/3 xl:text-base text-sm">
                    3130 West 6th avenue - V6K 1X6 Vancouver British Columbia
                    Canada
                  </p>
                </div>
                <div className="flex items-center gap-2 text-text-black xl:text-base text-sm">
                  <ContactPhoneSvg />
                  <Link to="tel:+39 06 56 55 75 16">
                    Cell +39 06 56 55 75 16
                  </Link>
                </div>
                <div className="flex items-center gap-2 text-text-black xl:text-base text-sm">
                  <ContactTelephoneSvg />
                  <Link to="tel:1-778 987 1796">Tel: 1-778 987 1796</Link>
                </div>
                <div className="flex items-center gap-2 text-text-black xl:text-base text-sm">
                  <ContactEmailSvg />
                  <Link to="mailto:lerevehouse@gmail.com">
                    Email: lerevehouse@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col 2xl:flex-row gap-4 md:items-start 2xl:items-center">
            {/* img */}
            <img
              className="md:h-[300px] lg:w-full xl:w-full 2xl:w-[276px] 3xl:w-[300px] md:w-full object-cover"
              src={contactBg}
              alt=""
            />
            {/* contents */}
            <div className="font-interTight  mb-16 md:mb-0 ml-4 md:ml-0">
              <h3 className="font-interTight xl:text-xl text-lg">
                Le Reve House Italia:
              </h3>

              {/* canada information */}
              <div className="space-y-5 mt-5">
                <div
                  onClick={() => {
                    handleDestinationMap("Via Nomentana, 160 Rome 00162 Italy");
                  }}
                  className="flex cursor-pointer items-center gap-2 text-text-black xl:text-base text-sm"
                >
                  <div className="items-center justify-start  xl:items-start xl:justify-start ">
                    <ContactLocationSvg />
                  </div>
                  <p className="leading-none m-0 p-0">
                    Via Nomentana, 160 Rome 00162 Italy
                  </p>
                </div>
                <div className="flex items-center gap-2 text-text-black xl:text-base text-sm">
                  <ContactPhoneSvg />
                  <Link to="tel:+39 06 56 55 75 16">
                    Cell +39 06 56 55 75 16
                  </Link>
                </div>
                <div className="flex items-center gap-2 text-text-black xl:text-base text-sm">
                  <ContactTelephoneSvg />
                  <Link to="tel:1-778 987 1796">Tel: 1-778 987 1796</Link>
                </div>
                <div className="flex items-center gap-2 text-text-black xl:text-base text-sm">
                  <ContactEmailSvg />
                  <Link>VAT: 12913741000</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
