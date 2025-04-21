import {
  FooterEmailSvg,
  FooterFacebookSvg,
  FooterInstagramSvg,
  FooterTwitterSvg,
  FooterYoutubeSvg,
} from "@/components/common/SvgContainer/SvgContainer";
import footerLogo from "../assets/images/logo-light.png";
import { Link } from "react-router-dom";
import {
  useGetFooterLinkDataQuery,
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
    data: siteSettingData,
    error: siteSettingError,
    isLoading: isSiteSettingLoading,
  } = useGetSiteSettingDataQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  console.log(siteSettingData?.data);

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

  const social = [
    {
      icon: <FooterTwitterSvg />,
      link: "www.twitter.com",
      identifier: "",
    },
    {
      icon: <FooterYoutubeSvg />,
      link: "www.youtube.com",
      identifier: "youtube",
    },
    {
      icon: <FooterInstagramSvg />,
      link: "www.instagram.com",
      identifier: "instagram",
    },
    {
      icon: <FooterFacebookSvg />,
      link: "www.facebook.com",
      identifier: "facebook",
    },
  ];

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
                  handleDestinationMap(
                    "3130 West 6th avenue - V6K 1X6 Vancouver British Columbia Canada"
                  );
                }}
                className="text-[#B0C4CF] cursor-pointer "
              >
                3130 West 6th avenue - V6K 1X6 Vancouver British Columbia Canada
              </p>
            </div>
            <div className="space-y-3">
              <h4>Le Reve House Itj Italia:</h4>
              <p
                onClick={() => {
                  handleDestinationMap(" Via Nomentana, 160 Rome 00162 Italy");
                }}
                className="text-[#B0C4CF] text-sm lg:text-base cursor-pointer "
              >
                Via Nomentana, 160 Rome 00162 Italy
              </p>
              <p className="text-[#B0C4CF]">Cell +39 06 56 55 75 16</p>
              <p className="text-[#B0C4CF]">VAT: 12913741000</p>
              <p className="text-[#B0C4CF]">Tel: 1-778 987 1796</p>
              <p className="text-[#B0C4CF]">Email: lerevehouse@gmail.com</p>
            </div>
          </div>
          {/* discover */}
          <div>
            <h4 className="text-[#B0C4CF] pb-3 text-lg">Discover</h4>
            <div className="space-y-3 text-sm lg:text-base ">
              <p>Trip to Canada</p>
              <p>Canada Organized Trips</p>
              <p>Costa Rica Organized Tours</p>
              <p>Guided Tours Mexico</p>
              <p>Honeymoon</p>
              <p>Guided Tours West Canada</p>
              <p>Excursions Canada</p>
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
                type="submit"
                to={"/"}
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
            <p> {siteSettingData?.data?.title} </p>
            <p>Terms of service</p>
            <Link to={`/pages/privacy-policy`}>Privacy Policy</Link>
          </div>
          {/* social icons */}
          <div className="flex justify-between items-center gap-5">
            {social?.map(item =>
              data?.data.map((link, idx) => {
                if (item.identifier === link?.social_media) {
                  return (
                    <Link
                      onClick={() => {
                        window.location.href = link?.profile_link;
                      }}
                      key={item?.link}
                      className="block"
                    >
                      {item?.icon}
                    </Link>
                  );
                }
              })
            )}
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
