import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const BottomNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      path: "/tours",
    },
    {
      title: "VIAGGI NOZZE",
      path: "/luxury-travel",
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
            className={({ isActive }) =>
              ` ${
                isActive
                  ? "text-[#7BD1FF] opacity-100  "
                  : "text-white opacity-65"
              } font-inter uppercase font-semibold hover:opacity-100 transition-all duration-300`
            }
          >
            {tab?.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BottomNavbar;
