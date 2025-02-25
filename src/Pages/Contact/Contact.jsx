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
  const handleDestinationMap = address => {
    const location = `https://www.google.com/maps?q=${address}`;
    window.open(location, "_blank");
  };
  return (
    <div>
      {/* Hero section */}
      <CommonHeroBannerVideo heroBg={heroBg} title="Contact" italic=" Us" />

      {/* main section */}
      <section className="flex items-stretch">
        {/* left side */}
        <ContactForm />

        {/* right side */}
        <div className="flex flex-col gap-6 justify-center w-1/2 pl-12">
          <div className="flex items-center gap-4">
            {/* img */}
            <div className="size-[300px]">
              <img
                className="h-full w-full object-cover"
                src={contactBg}
                alt=""
              />
            </div>
            {/* contents */}
            <div className="font-interTight">
              <h3 className="font-interTight text-xl">
                Le Reve Canada Headquarters:
              </h3>

              {/* canada information */}
              <div className="space-y-5 mt-5">
                <div
                  onClick={() => {
                    handleDestinationMap(
                      " 3130 West 6th avenue - V6K 1X6 Vancouver British Columbia Canada"
                    );
                  }}
                  className="flex cursor-pointer items-center gap-2 text-text-black"
                >
                  <ContactLocationSvg />
                  <p className="w-2/3">
                    3130 West 6th avenue - V6K 1X6 Vancouver British Columbia
                    Canada
                  </p>
                </div>
                <div className="flex items-center gap-2 text-text-black">
                  <ContactPhoneSvg />
                  <Link to="tel:+39 06 56 55 75 16">
                    Cell +39 06 56 55 75 16
                  </Link>
                </div>
                <div className="flex items-center gap-2 text-text-black">
                  <ContactTelephoneSvg />
                  <Link to="tel:1-778 987 1796">Tel: 1-778 987 1796</Link>
                </div>
                <div className="flex items-center gap-2 text-text-black">
                  <ContactEmailSvg />
                  <Link to="mailto:lerevehouse@gmail.com">
                    Email: lerevehouse@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* img */}
            <div className="size-[300px]">
              <img
                className="h-full w-full object-cover"
                src={contactBg}
                alt=""
              />
            </div>
            {/* contents */}
            <div className="font-interTight">
              <h3 className="font-interTight text-xl">Le Reve House Italia:</h3>

              {/* canada information */}
              <div className="space-y-5 mt-5">
                <div
                  onClick={() => {
                    handleDestinationMap("Via Nomentana, 160 Rome 00162 Italy");
                  }}
                  className="flex  cursor-pointer items-center gap-2 text-text-black"
                >
                  <ContactLocationSvg />
                  <p>Via Nomentana, 160 Rome 00162 Italy</p>
                </div>
                <div className="flex items-center gap-2 text-text-black">
                  <ContactPhoneSvg />
                  <Link to="tel:+39 06 56 55 75 16">
                    Cell +39 06 56 55 75 16
                  </Link>
                </div>
                <div className="flex items-center gap-2 text-text-black">
                  <ContactTelephoneSvg />
                  <Link to="tel:1-778 987 1796">Tel: 1-778 987 1796</Link>
                </div>
                <div className="flex items-center gap-2 text-text-black">
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
