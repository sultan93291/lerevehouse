import { useGetAllMenuSubMenuDataQuery } from "@/Redux/features/api/apiSlice";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const BottomNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null);

  const { data, error, isLoading } = useGetAllMenuSubMenuDataQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  console.log(data?.data);

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
        {data?.data?.map(tab => {
          return (
            <NavLink
              to={tab?.redirectLink}
              key={tab?.category}
              onMouseEnter={() => setHoveredTab(tab?.category)}
              onMouseLeave={handleMouseLeave}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-[#7BD1FF] opacity-100"
                    : "text-white opacity-65"
                } font-inter relative uppercase font-semibold hover:opacity-100 transition-all duration-300`
              }
            >
              {tab?.category}
              {hoveredTab === tab?.category &&
                tab?.subCatgoryArr?.length > 0 && (
                  <div
                    className="absolute left-1/2 max-w-[600px] h-auto transform -translate-x-1/2 z-[99999999] bg-white text-black text-sm p-2 rounded mt-2 whitespace-nowrap flex flex-col ease-in-out duration-300 shadow-md"
                    onMouseEnter={() => setHoveredTab(tab?.category)}
                    onMouseLeave={handleMouseLeave}
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
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavbar;

// const data = [
//   {
//     category: "destination",
//     redirectLink: "/destination",
//     subCatgoryArr: [
//       {
//         id: 1,
//         name: "Alaska",
//         image: "seeders/destinations/1.jpg",
//         url: "/destination-details/1",
//       },
//     ],
//   },
//   {
//     category: "destination",
//     redirectLink: "/destination",
//     subCatgoryArr: [
//       {
//         id: 1,
//         name: "Alaska",
//         image: "seeders/destinations/1.jpg",
//         url: "/destination-details/1",
//       },
//     ],
//   },
//   {
//     category: "destination",
//     redirectLink: "/destination",
//     subCatgoryArr: [
//       {
//         id: 1,
//         name: "Alaska",
//         image: "seeders/destinations/1.jpg",
//         url: "/destination-details/1",
//       },
//     ],
//   },
//   {
//     category: "destination",
//     redirectLink: "/destination",
//     subCatgoryArr: [
//       {
//         id: 1,
//         name: "Alaska",
//         image: "seeders/destinations/1.jpg",
//         url: "/destination-details/1",
//       },
//     ],
//   },
//   {
//     category: "destination",
//     redirectLink: "/destination",
//     subCatgoryArr: [
//       {
//         id: 1,
//         name: "Alaska",
//         image: "seeders/destinations/1.jpg",
//         url: "/destination-details/1",
//       },
//     ],
//   },
// ];
