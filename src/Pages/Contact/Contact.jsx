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
import {
  useGetContactHeroSectionDataQuery,
  useGetOfficeDataQuery,
} from "@/Redux/features/api/apiSlice";
import { InfinitySpin } from "react-loader-spinner";

const Contact = () => {
  const handleDestinationMap = address => {
    const location = `https://www.google.com/maps?q=${address}`;
    window.open(location, "_blank");
  };

  const { data, error, isLoading } = useGetContactHeroSectionDataQuery(
    undefined,
    {
      refetchOnFocus: true,
      refetchOnReconnect: true,
    }
  );

  const {
    data: officeData,
    error: officeError,
    isLoading: isofficeLoading,
  } = useGetOfficeDataQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  if (isLoading || isofficeLoading) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 bg-white">
        <InfinitySpin
          visible={true}
          width="200"
          color="#004265"
          ariaLabel="infinity-spin-loading"
        />
      </div>
    );
  }

  if (error) {
    const errorMessage =
      error.data?.message || error.error || error.status || error.message;
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }

  if (officeError) {
    const errorMessage =
      officeError.data?.message ||
      officeError.error ||
      officeError.status ||
      officeError.message;
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }

  const baseImgUrl = import.meta.env.VITE_SERVER_URL;

  return (
    <div>
      {/* Hero section */}
      <CommonHeroBannerVideo
        heroBg={`${baseImgUrl}/${data?.data?.file_url}`}
        title={data?.data?.title}
      />

      {/* main section */}
      <section className="flex flex-col lg:flex-row items-stretch md:gap-0 2xl:gap-16">
        {/* left side */}
        <ContactForm />

        {/* right side */}
        <div className="flex flex-col gap-10 md:gap-16  justify-center lg:w-1/2 lg:pl-12 md:py-10 lg:py-0  lg:my-6 my-0 lg:mr-6 mr-0">
          {officeData.data.map((item, idx) => {
            return (
              <div className="flex flex-col 2xl:flex-row items-center gap-4">
                {/* img */}
                <img
                  className="md:h-[300px] lg:w-full xl:w-full 2xl:w-[276px] 3xl:w-[300px] md:w-full object-cover"
                  src={`${baseImgUrl}/${item?.image}`}
                  alt=""
                />
                {/* contents */}
                <div className="font-interTight ml-4 md:ml-0">
                  <h3 className="font-interTight xl:text-xl text-lg">
                    {item?.name}
                  </h3>

                  {/* canada information */}
                  <div className="space-y-5 mt-5 ">
                    <div
                      onClick={() => {
                        handleDestinationMap(item?.address);
                      }}
                      className="flex cursor-pointer items-center gap-2 text-text-black"
                    >
                      <ContactLocationSvg />
                      <p className="xl:w-2/3 xl:text-base text-sm">
                        {item?.address}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-text-black xl:text-base text-sm">
                      <ContactPhoneSvg />
                      <Link to="tel:+39 06 56 55 75 16">{item?.phone}</Link>
                    </div>
                    <div className="flex items-center gap-2 text-text-black xl:text-base text-sm">
                      <ContactTelephoneSvg />
                      <Link to="tel:1-778 987 1796"> {item?.telephone} </Link>
                    </div>
                    <div className="flex items-center gap-2 text-text-black xl:text-base text-sm">
                      <ContactEmailSvg />
                      <Link to={`mailto:${item?.email}`}>{item?.email}</Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Contact;
