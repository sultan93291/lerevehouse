import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

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

  const TOURS = [
    {
      category: "TOURS (MEZZI)",
      options: [
        {
          title: "Self Drive Tour in Canada",
          redirectLink: "/tour-with-car",
        },
        {
          title: "Canada Coach Tours",
          redirectLink: "/tour-with-car",
        },
        {
          title: "Canada Train Tours",
          redirectLink: "/tour-with-car",
        },
      ],
    },
    {
      category: "ATTIVITA",
      options: [
        {
          title: "Hiking & Trekking",
          redirectLink: `/activities/subcategory/Hiking & Trekking`,
        },
        {
          title: "Water Activities",
          redirectLink: "/destination-details/water-activities",
        },
        {
          title: "Wildlife & Safari",
          redirectLink: `/activities/subcategory/Wildlife & Safari`,
        },
        {
          title: "Cultural Discovery",
          redirectLink: `/activities/subcategory/Cultural Discovery`,
        },
        {
          title: "Adventure Cruising",
          redirectLink: `/activities/subcategory/Adventure Cruising`,
        },
        {
          title: "Cultural Discovery Adventure & Outdoor",
          redirectLink: `/activities/subcategory/Cultural Discovery Adventure & Outdoor`,
        },
        {
          title: "Food, Drink & Nightlife",
          redirectLink: `/activities/subcategory/Food, Drink & Nightlife`,
        },
        {
          title: "Custom & Private",
          redirectLink: `/activities/subcategory/Custom & Private`,
        },
      ],
    },
    {
      category: "GUIDA TURISTICA",
      options: [
        {
          title: "The Great West",
          redirectLink: "/boundless-north",
        },
        {
          title: "Western Canada",
          redirectLink: "/boundless-north",
        },
        {
          title: "Ontario & Quebec",
          redirectLink: "/ontario-quebec",
        },
        { title: "Prairies", redirectLink: "/Prairies" },
        {
          title: "Atlantic Provinces",
          redirectLink: "/atlantics-provinces",
        },
      ],
    },
    {
      category: "DESTINAZIONI",
      options: [
        { title: "Alaska", redirectLink: "/destination-details/alaska" },
        {
          title: "Canada West",
          redirectLink: "/destination-details/canada-west",
        },
        { title: "West USA", redirectLink: "/destination-details/west-usa" },
        {
          title: "Canada East",
          redirectLink: "/destination-details/canada-east",
        },
        { title: "Caribian", redirectLink: "/destination-details/caribian" },
        {
          title: "Yukatan and Baja California",
          redirectLink: "/destination-details/yukatan-and-baja-california",
        },
        {
          title: "Travel with Extension",
          redirectLink: "/destination-details/travel-with-extension",
        },
      ],
    },
    {
      category: "TRAVEL STYLES",
      options: [
        { title: "Honeymoon", redirectLink: "/destination-details/honeymoon" },
        {
          title: "Adventures Observations",
          redirectLink: "/destination-details/adventures-observations",
        },
        {
          title: "Family Trip",
          redirectLink: "/destination-details/family-trip",
        },
        { title: "Adventure", redirectLink: "/destination-details/adventure" },
        {
          title: "Night Time",
          redirectLink: "/destination-details/night-time",
        },
        { title: "Skiing", redirectLink: "/destination-details/skiing" },
      ],
    },
  ];

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
            onMouseLeave={() =>
              setTimeout(() => {
                if (!isHovered) setHoveredTab(null); // Ensure dropdown is not hovering
              }, 700)
            }
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-[#7BD1FF] opacity-100"
                  : "text-white opacity-65"
              } font-inter relative uppercase font-semibold hover:opacity-100 transition-all duration-300`
            }
          >
            {tab?.title}
            {hoveredTab === tab?.title &&
              TOURS.find(tour => tour.category === hoveredTab)?.options
                ?.length > 0 && (
                <div
                  className="absolute left-1/2 max-w-[600px] h-auto transform -translate-x-1/2 z-[99999999] bg-white text-black text-sm p-2 rounded mt-2 whitespace-nowrap flex flex-col ease-in-out duration-300 shadow-md"
                  onMouseEnter={() => setHoveredTab(tab?.title)} // Keep dropdown visible when hovering over it
                  onMouseLeave={() => setHoveredTab(null)} // Remove hover effect when leaving dropdown
                >
                  {TOURS.find(
                    tour => tour.category === hoveredTab
                  )?.options.map((item, index) => (
                    <div key={index}>
                      <Link
                        to={item?.redirectLink}
                        className="m-3 text-text-gray text-base font-inter font-normal leading-[150%] hover:text-black ease-in-out duration-300"
                      >
                        {item?.title}
                      </Link>
                      <hr
                        className={`${
                          index ===
                          TOURS.find(tour => tour.category === hoveredTab)
                            ?.options.length -
                            1
                            ? "opacity-0"
                            : "opacity-100"
                        } bg-[#00000014] my-3`}
                      />
                    </div>
                  ))}
                </div>
              )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BottomNavbar;
