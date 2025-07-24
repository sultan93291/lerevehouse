import logo from "@/assets/images/logo.jfif";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  EarthSvgNavbar,
  EmailSvgNavbar,
  LocationSvgNavbar,
  PhoneSvgNavbar,
  SearchSvgNavbar,
} from "../SvgContainer/SvgContainer";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  useGetAllMenuSubMenuDataQuery,
  useGetOfficeDataQuery,
} from "@/Redux/features/api/apiSlice";
import { InfinitySpin } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "@/Redux/features/languageSlice";
import { useTranslation } from "react-i18next";

const TopNavbar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const sideBarRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const language = useSelector(state => state.language.language);

  const {
    data: officeData,
    error: officeError,
    isLoading: isOfficeLoading,
  } = useGetOfficeDataQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const { data, error, isLoading } = useGetAllMenuSubMenuDataQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  useEffect(() => {
    const handleClickOutside = event => {
      if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
        setIsSideBarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle loading state
  if (isOfficeLoading) {
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

  const handlMapOpen = () => {
    const location = `https://www.google.com/maps?q=${officeData?.data[0]?.address}`;
    window.open(location, "_blank");
  };

  const topNavLinks = [
    {
      title: t("navbar.search"),
      svg: <SearchSvgNavbar />,
    },
    // {
    //   title: t("navbar.contact"),
    //   svg: <EmailSvgNavbar />,
    // },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto flex px-2 2xl:my-0 2xl:px-0 w-full items-center justify-between h-24 xl:gap-40">
        <Link to="/" className="h-20 w-56 inline-block flex-shrink-0">
          <img className="h-full w-full object-contain" src={logo} alt="Logo" />
        </Link>

        {/* Desktop info */}
        <div className="hidden 2xl:flex items-center h-full w-full gap-10">
          <div className="border-x border-primary h-full px-8 flex items-center justify-center w-full">
            <div className="flex items-center justify-between gap-7 text-text-black w-full">
              <Link
                to={`tel:${officeData?.data[0]?.telephone}`}
                className="flex items-center gap-2"
              >
                <PhoneSvgNavbar />
                <span className="font-bold min-w-[109px] text-sm font-interTight">
                  {officeData?.data[0]?.telephone}
                </span>
              </Link>

              <Link
                onClick={handlMapOpen}
                className="flex items-center gap-2 cursor-pointer"
              >
                <LocationSvgNavbar />
                <span className="text-sm break-words font-interTight">
                  {officeData?.data[0]?.address}
                </span>
              </Link>
            </div>
          </div>

          {/* NavLinks */}
          <div className="pr-8 border-r border-primary h-full flex items-center justify-center">
            <ul className="flex items-center gap-8">
              {topNavLinks.map(item => (
                <li key={item.title}>
                  <div
                    onClick={e => {
                      if (item.title === "Contact") {
                        e.preventDefault();
                        window.location.href = `mailto:${officeData?.data[0]?.email}`;
                      } else if (
                        item.title === "Search" ||
                        item.title === "Cerca"
                      ) {
                        navigate("/search");
                      }
                    }}
                    className="flex items-center cursor-pointer gap-2"
                  >
                    <div className="text-primary font-inter text-base font-medium">
                      {item.svg}
                    </div>
                    <p className="font-interTight text-sm text-text-gray">
                      {item.title}
                    </p>
                  </div>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    dispatch(setLanguage());
                    window.location.reload();
                  }}
                  className="flex items-center gap-2"
                >
                  <div className="text-primary font-inter text-base font-medium">
                    <EarthSvgNavbar />
                  </div>
                  <p className="font-interTight text-sm text-text-gray uppercase   ">
                    {language}
                  </p>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile info */}
        <div className="flex px-2 2xl:hidden flex-col">
          {!isSideBarOpen && (
            <RxHamburgerMenu
              onClick={() => setIsSideBarOpen(true)}
              className="w-8 h-8 cursor-pointer"
            />
          )}

          <AnimatePresence>
            {isSideBarOpen && (
              <motion.div
                className="fixed inset-0 w-screen h-screen bg-black bg-opacity-50 backdrop-blur-md flex !z-[999]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  ref={sideBarRef}
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="w-[280px] !z-[999] py-8 bg-white border-r-[1px] border-solid border-gray-200 top-0 left-0 flex flex-col items-start justify-start h-full gap-y-8"
                >
                  <img
                    onClick={() => {}}
                    className="h-[70px] w-[220px] object-contain"
                    src={logo}
                    alt="Logo"
                  />
                  <div className="flex flex-col gap-y-8">
                    <div className="flex flex-col px-5 gap-y-5 w-full">
                      {data?.data?.map(tab => (
                        <NavLink
                          to={tab?.redirectLink}
                          key={tab?.category}
                          onClick={() => setIsSideBarOpen(false)}
                          className={({ isActive }) =>
                            `${
                              isActive
                                ? "text-[#7BD1FF] opacity-100"
                                : "text-text-black opacity-65"
                            } font-inter uppercase font-semibold text-sm hover:opacity-100 transition-all duration-300`
                          }
                        >
                          {tab?.category}
                        </NavLink>
                      ))}
                    </div>
                    <div className="flex flex-col gap-y-5">
                      <ul className="flex items-center gap-4 px-5">
                        {topNavLinks.map(item => (
                          <li key={item.title}>
                            <Link className="flex items-center gap-2">
                              <div className="text-primary font-inter text-base font-medium">
                                {item.svg}
                              </div>
                              <p className="font-interTight text-sm text-text-gray">
                                {item.title}
                              </p>
                            </Link>
                          </li>
                        ))}
                        <li>
                          <button
                            onClick={() => {
                              dispatch(setLanguage());
                            }}
                            className="flex items-center gap-2"
                          >
                            <div className="text-primary font-inter text-base font-medium">
                              <EarthSvgNavbar />
                            </div>
                            <p className="font-interTight text-sm text-text-gray uppercase  ">
                              {language}
                            </p>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
// 