import { useGetAllMenuSubMenuDataQuery } from "@/Redux/features/api/apiSlice";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const BottomNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null);
  const [isHoveringDropdown, setIsHoveringDropdown] = useState(false);
  const dropdownRefs = useRef({});
  const timeoutRef = useRef(null);

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

  const handleTabMouseEnter = category => {
    clearTimeout(timeoutRef.current);
    setHoveredTab(category);
    setIsHoveringDropdown(false);
  };

  const handleTabMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      if (!isHoveringDropdown) {
        setHoveredTab(null);
      }
    }, 200); // 200ms delay before closing
  };

  const handleDropdownMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsHoveringDropdown(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsHoveringDropdown(false);
    timeoutRef.current = setTimeout(() => {
      setHoveredTab(null);
    }, 200); // 200ms delay before closing
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

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
              onMouseEnter={() => handleTabMouseEnter(tab?.category)}
              onMouseLeave={handleTabMouseLeave}
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
            {hoveredTab === tab?.category && tab?.subCatgoryArr?.length > 0 && (
              <div
                ref={el => (dropdownRefs.current[tab?.category] = el)}
                className="absolute left-1/2 max-w-[600px] h-auto transform -translate-x-1/2 z-[99999999] bg-white text-black text-sm p-2 rounded mt-2 whitespace-nowrap flex flex-col ease-in-out duration-300 shadow-md"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                {tab?.subCatgoryArr?.map((item, index) => (
                  <div key={item.id}>
                    <Link
                      to={item?.url}
                      className="m-3 text-text-gray text-base font-inter font-normal leading-[150%] hover:text-black ease-in-out duration-300"
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
