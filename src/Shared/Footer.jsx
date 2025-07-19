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
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
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
        <InfinitySpin visible={true} width="200" color="#004265" ariaLabel="infinity-spin-loading" />
      </div>
    );
  }

  const imgBaseurl = import.meta.env.VITE_SERVER_URL;

  const handleDestinationMap = (address) => {
    const location = `https://www.google.com/maps?q=${address}`;
    window.open(location, "_blank");
  };

  return (
    <footer className="pt-10 lg:pt-16 bg-[#002B4D] text-white font-interTight">
      {/* Top Section */}
      <section className="container mx-auto">
        {/* Logo */}
        <div className="pb-10">
          <img src={footerLogo} alt="Footer Logo" />
        </div>

        {/* Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10 items-center pb-10">
          <div className="space-y-5">
            <div className="space-y-3">
              <h4>{t("footer.headquarters")}</h4>
              <p
                onClick={() => handleDestinationMap(officeData?.data[0]?.address)}
                className="text-[#B0C4CF] cursor-pointer"
              >
                {officeData?.data[0]?.address}
              </p>
            </div>
            <div className="space-y-3">
              <h4>{t("footer.italyOffice")}</h4>
              <p
                onClick={() => handleDestinationMap(officeData?.data[1]?.address)}
                className="text-[#B0C4CF] text-sm lg:text-base cursor-pointer"
              >
                {officeData?.data[1]?.address}
              </p>
              <p className="text-[#B0C4CF]">Cell: {officeData?.data[0]?.phone}</p>
              <p className="text-[#B0C4CF]">Tel: {officeData?.data[0]?.telephone}</p>
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

          {/* Discover */}
          <div>
            <h4 className="text-[#B0C4CF] pb-3 text-lg">{t("footer.discover")}</h4>
            <div className="space-y-3 text-sm lg:text-base cursor-pointer">
              <p><Link to="/destination-details/2">Trip to Canada</Link></p>
              <p><Link to="/viaggi-noze">Honeymoon Trip</Link></p>
              <p><Link to="/tourist-guide">Tourist Guide</Link></p>
              <p><Link to="/canada-map">Canada Map</Link></p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <div className="space-y-3">
              <h4 className="text-xl xl:text-3xl font-semibold">{t("footer.newsletterTitle")}</h4>
              <p className="text-sm lg:text-base">{t("footer.newsletterText")}</p>
            </div>

            <form className="mt-5 space-y-5">
              <label className="bg-white relative w-[220px] lg:w-full px-4 py-3 flex items-center gap-2">
                <FooterEmailSvg />
                <div className="w-full">
                  <input
                    className="focus:outline-none text-text-black w-[150px] lg:w-full"
                    placeholder={t("footer.emailPlaceholder")}
                    type="email"
                  />
                </div>
              </label>

              <button
                onClick={(e) => e.preventDefault()}
                type="submit"
                className="bg-secondary px-8 2xl:px-10 3xl:px-20 py-3 font-interTight text-white font-semibold transition-all duration-300 hover:bg-white border border-secondary hover:text-secondary"
              >
                {t("footer.signupBtn")}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="border-t border-white/10 pt-10">
        <div className="container mx-auto lg:px-8 2xl:px-16 3xl:px-32 pb-7 w-full flex flex-col lg:flex-row gap-y-4 items-center justify-between">
          <div className="flex items-center text-[13px] sm:text-sm lg:text-base gap-2 lg:gap-5">
            <p>{siteSettingData?.data?.copyright_text}</p>
            <Link to="/pages/terms-and-conditions">{t("footer.terms")}</Link>
            <Link to="/pages/privacy-policy">{t("footer.privacy")}</Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-between items-center gap-5">
            {data?.data.map((item) => (
              <Link
                key={item?.link}
                onClick={() => window.location.href = item?.profile_link}
                className="block"
              >
                <img
                  className="h-[25px] w-[25px] object-cover text-white"
                  src={`${imgBaseurl}/${item?.icon}`}
                  alt="Social Icon"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
