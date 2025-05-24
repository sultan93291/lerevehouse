import { useGetAllMenuSubMenuDataQuery } from "@/Redux/features/api/apiSlice";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const BottomNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null);
  const dropdownRefs = useRef({});
  const [activeTab, setActiveTab] = useState(null);

  const { data, error, isLoading } = useGetAllMenuSubMenuDataQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        activeTab &&
        dropdownRefs.current[activeTab] &&
        !dropdownRefs.current[activeTab].contains(event.target)
      ) {
        setActiveTab(null);
        setHoveredTab(null); // Reset hoveredTab as well
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeTab]);

  const handleMouseLeave = () => {
    setTimeout(() => {
      setHoveredTab(null);
    }, 200);
  };

  return (
    <div
      className={`fixed w-full hidden 2xl:block z-10 transition-all duration-300 ${
        isScrolled
          ? "bg-primary text-black shadow-lg"
          : "bg-black/10 backdrop-blur-[10px]"
      }`}
    >
      <div className="container mx-auto py-4 flex items-center justify-between px-32">
        {data?.data?.map(tab => (
          <div key={tab?.category} className="relative">
            <NavLink
              to={tab?.redirectLink}
              onClick={() => setActiveTab(tab?.category)}
              // onMouseEnter={() => setHoveredTab(tab?.category)}
              // onMouseLeave={handleMouseLeave}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-[#7BD1FF] opacity-100"
                    : "text-white opacity-85"
                } font-inter relative uppercase font-semibold hover:opacity-100 transition-all duration-300`
              }
            >
              {tab?.category}
            </NavLink>
            {(hoveredTab === tab?.category || activeTab === tab?.category) &&
              tab?.subCatgoryArr?.length > 0 && (
                <div
                  ref={el => (dropdownRefs.current[tab?.category] = el)} // Assign ref to dropdown
                  className="absolute left-1/2 max-w-[600px] h-auto transform -translate-x-1/2 z-[99999999] bg-white text-black text-sm p-2 rounded mt-2 whitespace-nowrap flex flex-col ease-in-out duration-300 shadow-md"
                  onMouseEnter={() => setHoveredTab(tab?.category)}
                  onMouseLeave={handleMouseLeave}
                >
                  {tab?.subCatgoryArr?.map((item, index) => (
                    <div key={item.id}>
                      <Link
                        to={item?.url}
                        className="m-3 text-text-gray text-base font-inter font-normal leading-[150%] hover:text-black ease-in-out duration-300"
                        onClick={() => setActiveTab(null)} // Close dropdown on link click
                      >
                        {item?.name}
                      </Link>
                      <hr
                        className={`${
                          index === tab.subCatgoryArr.length - 1
                            ? "opacity-0"
                            : "opacity-100"
                        } bg-[#00000014] my-3`}
                      />
                    </div>
                  ))}
                </div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomNavbar;
