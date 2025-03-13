import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const BottomNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 150); // Trigger the change at 150px
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 const navigate = useNavigate();


  const tabs = [
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
      title: "TOURS (MEZZI)",
      path: "/tour-mezi",
    },
    {
      title: "VIAGGI NOZZE",
      path: "/viaggi-noze",
    },
    {
      title: "CONTATTI",
      path: "/contact",
    },
  ];

  const allTabs = [
    "Alaska",
    "Canada West",
    "West USA",
    "Canada East",
    "Caribian",
    "Yukatan and Baja California",
    "Travel with Extension",
  ];

  return (
    <div
      className={`fixed w-full hidden 2xl:block z-10 transition-all duration-300 ${
        isScrolled
          ? "bg-primary text-black shadow-lg"
          : "bg-black/10 backdrop-blur-[10px]"
      }`}
    >
      <div className="container mx-auto py-4 flex items-center justify-between px-32">
        {tabs?.map(tab => (
          <NavLink
            to={tab?.path}
            key={tab?.title}
            onMouseEnter={() => setHoveredTab(tab?.title)}
            onMouseLeave={() => setHoveredTab(null)}
            className={({ isActive }) =>
              ` ${
                isActive
                  ? "text-[#7BD1FF] opacity-100"
                  : "text-white opacity-65"
              } font-inter relative uppercase font-semibold hover:opacity-100 transition-all duration-300`
            }
          >
            {tab?.title}
            {hoveredTab === tab?.title && (
              <div className="absolute left-1/2  max-w-[600px] max-h-[336px] transform -translate-x-1/2 bg-white text-white text-sm p-2 rounded mt-2 whitespace-nowrap flex flex-col ease-in-out duration-300 shadow-md  ">
                {allTabs.map((item, index) => {
                  return (
                    <div key={index}>
                      <span
                        onClick={() => {
                          console.log(
                            "Navigating to:",
                            `/destination-details:/${encodeURIComponent(item)}`
                          );
                          navigate(
                            `/destination-details:/${encodeURIComponent(item)}`
                          );
                        }}
                        className=" m-3  text-text-gray text-base font-inter font-normal leading-[150%] hover:text-black ease-in-out duration-300  "
                      >
                        {item}
                      </span>
                      <hr
                        className={`${
                          index === allTabs.length - 1
                            ? "opacity-0"
                            : "opacity-100"
                        } bg-[#00000014] my-3 `}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BottomNavbar;
