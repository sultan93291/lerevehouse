import { FooterEmailSvg } from "@/components/common/SvgContainer/SvgContainer";
import footerLogo from "../assets/images/logo-light.png";
import { Link } from "react-router-dom";
import {
  useGetFooterLinkDataQuery,
  useGetOfficeDataQuery,
  useGetSiteSettingDataQuery,
} from "@/Redux/features/api/apiSlice";
import toast from "react-hot-toast";
import { InfinitySpin } from "react-loader-spinner";

const Footer = () => {
  const { data, error, isLoading } = useGetFooterLinkDataQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const {
    data: officeData,
    error: officeError,
    isLoading: isOfficeLoading,
  } = useGetOfficeDataQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const {
    data: siteSettingData,
    error: siteSettingError,
    isLoading: isSiteSettingLoading,
  } = useGetSiteSettingDataQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  if (isLoading || isSiteSettingLoading) {
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

  if (error || siteSettingError) {
    let errorMessage;
    if (errorMessage) {
      errorMessage =
        error.data?.message || error.error || error.status || error.message;
    } else if (siteSettingError)
      errorMessage =
        siteSettingError.data?.message ||
        siteSettingError.error ||
        siteSettingError.status ||
        siteSettingError.message;

    if (errorMessage) {
      toast.error(errorMessage);
    }
  }

  const imgBaseurl = import.meta.env.VITE_SERVER_URL;

  const handleDestinationMap = address => {
    const location = `https://www.google.com/maps?q=${address}`;
    window.open(location, "_blank");
  };

  return (
    <footer className=" pt-10 lg:pt-16 bg-[#002B4D] text-white font-interTight">
      {/* footer top contents */}
      <section className="container mx-auto  ">
        {/* logo */}
        <div className="pb-10">
          <img src={footerLogo} alt="" />
        </div>

        {/* info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10 items-center pb-10">
          <div className="space-y-5">
            <div className="space-y-3">
              <h4>Le Reve House Adventure - Canada Headquarters:</h4>
              <p
                onClick={() => {
                  handleDestinationMap(officeData?.data[0]?.address);
                }}
                className="text-[#B0C4CF] cursor-pointer "
              >
                {officeData?.data[0]?.address}
              </p>
            </div>
            <div className="space-y-3">
              <h4>Le Reve House Itj Italia:</h4>
              <p
                onClick={() => {
                  handleDestinationMap(officeData?.data[1]?.address);
                }}
                className="text-[#B0C4CF] text-sm lg:text-base cursor-pointer "
              >
                {officeData?.data[1]?.address}
              </p>
              <p className="text-[#B0C4CF]">
                Cell : {officeData?.data[0]?.phone}{" "}
              </p>
              {/* <p className="text-[#B0C4CF]">VAT: {officeData.data[0].phone} </p> */}
              <p className="text-[#B0C4CF]">
                Tel: {officeData?.data[0]?.telephone}{" "}
              </p>
              <p>
                <a
                  href={`mailto:${officeData?.data[1]?.email}`}
                  className="text-[#B0C4CF] cursor-pointer"
                >
                  Email: {officeData?.data[1]?.email}
                </a>
              </p>
            </div>
          </div>
          {/* discover */}
          <div>
            <h4 className="text-[#B0C4CF] pb-3 text-lg">Discover</h4>
            <div className="space-y-3 text-sm lg:text-base cursor-pointer ">
              <p>
                <Link to={"/destination-details/2"}>Trip to Canada</Link>
              </p>
              <p>
                <Link to={"/viaggi-noze"}>Honeymoon Trip</Link>{" "}
              </p>
              <p>
                {" "}
                <Link to={"/tourist-guide"}>Tourist Guide</Link>
              </p>
              <p>
                {" "}
                <Link to={"/canada-map"}> Canada Map </Link>{" "}
              </p>
            </div>
          </div>

          {/* newsletter */}
          <div>
            {/* title section */}
            <div className="space-y-3">
              <h4 className=" text-xl xl:text-3xl font-semibold">Newsletter</h4>
              <p className="text-sm lg:text-base">
                Sign up below to receive travel inspiration, news, offers and
                expert tips.
              </p>
            </div>
            {/* form */}
            <form action="" className="mt-5  space-y-5">
              <label className=" bg-white relative w-[220px] lg:w-full  px-4 py-3 flex items-center gap-2">
                <FooterEmailSvg />
                <div className=" w-full">
                  <input
                    className="focus:outline-none  text-text-black w-[150px] lg:w-full"
                    placeholder="Email Address"
                    type="email"
                    name=""
                    id=""
                  />
                </div>
              </label>

              <button
                onClick={e => {
                  e.preventDefault();
                }}
                type="submit"
                className="bg-secondary px-8 2xl:px-10 3xl:px-20 py-3 font-interTight text-white font-semibold transition-all duration-300 hover:bg-white border border-secondary hover:text-secondary"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* footer bottom contents */}
      <section className="border-t border-white/10 pt-10">
        <div className="container mx-auto lg:px-8 2xl:px-16 3xl:px-32 pb-7 w-full flex flex-col lg:flex-row gap-y-4 items-center justify-between">
          <div className="flex items-center text-[13px] sm:text-sm lg:text-base gap-2 lg:gap-5">
            <p>{siteSettingData?.data?.copyright_text}</p>
            {/* <p> {siteSettingData?.data?.title} </p> */}
            <Link to={`/pages/terms-and-conditions`}>Terms of service</Link>
            <Link to={`/pages/privacy-policy`}>Privacy Policy</Link>
          </div>
          {/* social icons */}
          <div className="flex justify-between items-center gap-5">
            {data?.data.map((item, idx) => {
              return (
                <Link
                  onClick={() => {
                    window.location.href = item?.profile_link;
                  }}
                  key={item?.link}
                  className="block"
                >
                  <img
                    className="h-[25px] w-[25px] object-cover text-white "
                    src={`${imgBaseurl}/${item?.icon}`}
                    alt="not found"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
