import logo from "@/assets/images/logo.jfif";
import { Link, NavLink } from "react-router-dom";
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
import { useGetOfficeDataQuery } from "@/Redux/features/api/apiSlice";

const NavLinks = [
  {
    title: "DESTINAZIONI",
    path: "/destination",
  },
  {
    title: "TRAVEL STYLES",
    path: "/travel-styles",
  },
  {
    title: "GUIDA TURISTICA",
    path: "/tourist-guide",
  },
  {
    title: "ATTIVITA",
    path: "/activities",
  },
  {
    title: "CONTATTI",
    path: "/contact",
  },
];

const TopNavbar = () => {
  const [isSideBarOpen, setisSideBarOpen] = useState(false);
  const sideBarRef = useRef(null);

  const {
    data: officeData,
    error: officeError,
    isLoading: isofficeLoading,
  } = useGetOfficeDataQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  if (isofficeLoading) {
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

  console.log(officeData?.data);

  useEffect(() => {
    const handleClickOutside = event => {
      if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
        setisSideBarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const topNavLinks = [
    {
      title: "Search",
      path: "/",
      svg: <SearchSvgNavbar />,
    },
    {
      title: "Contact",
      path: "/",
      svg: <EmailSvgNavbar />,
    },
  ];

  const handlMapOpen = () => {
    // Coordinates for the exact location
    const location = `https://www.google.com/maps?q=${officeData?.data[0]?.address}`;

    window.open(location, "_blank");
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto  flex px-2  2xl:my-0 2xl:px-0 w-full  items-center justify-between h-24 xl:gap-40">
        <Link to="/" className="h-20 w-56 inline-block flex-shrink-0">
          <img className=" h-full w-full object-contain" src={logo} alt="" />
        </Link>
        {/* desktop info */}
        {/* contact info */}
        <div className=" hidden 2xl:flex   items-center h-full w-full gap-10">
          <div className="border-x border-primary h-full px-8 flex items-center justify-center w-full">
            <div className=" flex items-center justify-between  gap-7 text-text-black w-full">
              <Link
                to={"tel:1-778 987 179"}
                className="flex items-center gap-2"
              >
                <PhoneSvgNavbar />
                <span className="font-bold min-w-[109px] text-sm font-interTight">
                  {officeData.data[0]?.telephone}
                </span>
              </Link>
              <Link
                onClick={() => {
                  handlMapOpen();
                }}
                className="flex items-center gap-2"
              >
                <LocationSvgNavbar />
                <span className="text-sm break-words font-interTight">
                  {officeData?.data[0]?.address}
                </span>
              </Link>
            </div>
          </div>

          {/* navLinks */}
          <div className="pr-8 border-r border-primary h-full flex items-center justify-center">
            <ul className="flex items-center gap-8 ">
              {topNavLinks?.map(item => (
                <li key={item?.title}>
                  <Link className="flex items-center gap-2">
                    <div className="text-primary font-inter text-base font-medium">
                      {item?.svg}
                    </div>
                    <p className="font-interTight text-sm text-text-gray">
                      {item?.title}
                    </p>
                  </Link>
                </li>
              ))}
              <li>
                <button className="flex items-center gap-2">
                  <div className="text-primary font-inter text-base font-medium">
                    <EarthSvgNavbar />
                  </div>
                  <p className="font-interTight text-sm text-text-gray">EN</p>
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* mobile info */}
        <div className="flex px-2 2xl:hidden flex-col">
          {!isSideBarOpen && (
            <RxHamburgerMenu
              onClick={() => setisSideBarOpen(true)}
              className="w-8 h-8 cursor-pointer"
            />
          )}

          {/* Animate Presence ensures smooth enter/exit animation */}
          <AnimatePresence>
            {isSideBarOpen && (
              <motion.div
                className="fixed inset-0 w-screen  h-screen bg-black bg-opacity-50 backdrop-blur-md flex !z-[999]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Sidebar Motion */}
                <motion.div
                  ref={sideBarRef}
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="w-[280px] !z-[999] py-8 bg-white border-r-[1px] border-solid border-gray-200 top-0 left-0 flex flex-col items-start justify-start h-full  gap-y-8 "
                >
                  <img
                    className="h-[70px] w-[220px]  object-contain "
                    src={logo}
                    alt="Logo"
                  />
                  <div className="flex flex-col gap-y-8">
                    <div className="flex flex-col px-5 gap-y-5 w-full">
                      {NavLinks.map((tab, index) => (
                        <NavLink
                          to={tab?.path}
                          key={tab?.title}
                          onClick={() => {
                            setisSideBarOpen(false);
                          }}
                          className={({ isActive }) =>
                            ` ${
                              isActive
                                ? "text-[#7BD1FF] opacity-100"
                                : "text-text-black opacity-65"
                            } font-inter uppercase font-semibold text-sm hover:opacity-100 transition-all duration-300`
                          }
                        >
                          {tab?.title}
                        </NavLink>
                      ))}
                    </div>
                    <div className="flex flex-col gap-y-5">
                      <ul className="flex items-center gap-4 px-5 ">
                        {topNavLinks?.map(item => (
                          <li key={item?.title}>
                            <Link className="flex items-center gap-2">
                              <div className="text-primary font-inter text-base font-medium">
                                {item?.svg}
                              </div>
                              <p className="font-interTight text-sm text-text-gray">
                                {item?.title}
                              </p>
                            </Link>
                          </li>
                        ))}
                        <li>
                          <button className="flex items-center gap-2">
                            <div className="text-primary font-inter text-base font-medium">
                              <EarthSvgNavbar />
                            </div>
                            <p className="font-interTight text-sm text-text-gray">
                              EN
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
