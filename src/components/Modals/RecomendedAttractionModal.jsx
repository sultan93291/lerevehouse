import { useForm } from "react-hook-form";
import {
  CrossModalSvg,
  ResetButtonSvg,
  Star,
} from "../common/SvgContainer/SvgContainer";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import city from "../../assets/images/recomended-attraction/city.png";
import evening from "../../assets/images/recomended-attraction/evening.png";
import hangingBridge from "../../assets/images/recomended-attraction/hangingBride.png";
import sea from "../../assets/images/recomended-attraction/sea.png";

import React, { useState, useEffect, useRef } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  TrafficLayer,
  useLoadScript,
} from "@react-google-maps/api";

// Map container style
const containerStyle = {
  width: "100%",
  height: "600px",
};

const waypoints = [{ lat: 49.2827, lng: -123.1207 }]; // Vancouver center

const RecomendedAttracton = [
  {
    id: 1,
    imgSrc: city,
  },
  {
    id: 2,
    imgSrc: sea,
  },
  {
    id: 3,
    imgSrc: hangingBridge,
  },
  {
    id: 4,
    imgSrc: evening,
  },
  {
    id: 5,
    imgSrc: city,
  },
];

const features = [
  {
    tittle: "Duration:",
    content: "2h30",
  },
  {
    tittle: "Time:",
    content: "Boarding at 6:30 PM (Cruise from 7:00 PM to 9:30 PM)",
  },
  {
    tittle: "Season:",
    content: "May to mid-October, Fridays and Saturdays only",
  },
  {
    tittle: "Departure from:",
    content: "Marina near Stanley Park, 501 Denman St, downtown Vancouver",
  },
];

const points = [
  "Combine the useful with the pleasant! That's what this dinner cruise at sunset in the beautiful Vancouver Bay offers you.",
  "It's like dining in a restaurant with a view of all the most beautiful sights of Vancouver!",
  "You will taste the famous Pacific salmon and Western beef, whose reputations are well established.",
  "And to enhance your dinner, a music band will play their best songs for you. A moment that will undoubtedly be among the most pleasant of your trip.",
];

const RecomendedAttractionModal = ({ setOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    toast.success("Form Submitted Successfully");
    setOpen(false);
  };

  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [showTraffic, setShowTraffic] = useState(true);

  const mapRef = useRef(null);

  const [activeTab, setactiveTab] = useState("Details");

  // Load Google Maps API
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA_G_EhWhTWpRYaE6_kR8txUKUkmZkvNiQ",
    libraries: ["places", "directions"],
  });

  useEffect(() => {
    if (isLoaded && mapRef.current) {
      // Fit the map to show all waypoints
      const bounds = new window.google.maps.LatLngBounds();
      waypoints.forEach((waypoint) => bounds.extend(waypoint));
      mapRef.current.fitBounds(bounds);
    }
  }, [isLoaded]);

  return (
    <DialogContent className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[700px] xl:w-[900px] z-[9999]  3xl:min-w-[1200px] py-6 text-center font-nunito">
      <div className="max-h-[80vh] overflow-y-auto scrollbar-hide px-4 md:px-0">
        <DialogHeader>
          <DialogTitle className="py-3 w-full flex items-center justify-between">
            <div className="flex flex-col gap-y-[6px] ">
              <h2 className="font-fontSpring font-light leading-[150%] text-primary text-xl md:text-2xl tracking-wide">
                Dinner cruise in Vancouver
              </h2>
              <span className="flex flex-row items-center gap-x-1 font-interTight font-normal leading-[150%] md:text-lg text-sm">
                <Star /> 4.3 (243 reviews)
              </span>
            </div>
            <div
              onClick={() => setOpen(false)}
              className="size-7 cursor-pointer group hover:bg-primary transition-all duration-300 border border-primary rounded-full flex items-center justify-center"
            >
              <CrossModalSvg />
            </div>
          </DialogTitle>
          <DialogDescription>
            <hr className="w-full h-[1px] bg-[#EBEBEB]" />
            <div className="flex flex-col md:gap-y-10 gap-y-0">
              <div className="flex flex-row flex-wrap gap-4">
                {RecomendedAttracton.map((item, index) => (
                  <img
                    key={item.id}
                    className={
                      index === 0
                        ? "md:w-full xl:h-[421px] h-[220px]"
                        : "3xl:w-[275px] w-full md:h-[237px] h-[220px]"
                    }
                    src={item.imgSrc}
                    alt={`Attraction ${item.id}`}
                  />
                ))}
              </div>
              <div className=" py-6">
                <div className="flex flex-col gap-y-6">
                  <div className="flex md:flex-row justify-between w-full">
                    <div className="w-1/3 text-[#004265] text-sm md:text-lg font-medium leading-[120%] font-interTight flex flex-col gap-y-2 items-center">
                      <span
                        onClick={() => {
                          setactiveTab("Details");
                        }}
                        className="cursor-pointer"
                      >
                        Details
                      </span>
                      <div
                        className={`w-full bg-[#004265] h-[3px] rounded-[3px] ${
                          activeTab === "Details" ? "block" : "hidden"
                        }`}
                      ></div>
                    </div>
                    <div className="w-1/3 text-[#004265] text-sm md:text-lg font-medium leading-[120%] font-interTight flex flex-col gap-y-2 items-center">
                      <span
                        onClick={() => {
                          setactiveTab("Location");
                        }}
                        className="cursor-pointer"
                      >
                        Location
                      </span>
                      <div
                        className={`w-full bg-[#004265] h-[3px] rounded-[3px] ${
                          activeTab === "Location" ? "block" : "hidden"
                        }`}
                      ></div>
                    </div>
                    <div className="w-1/3 text-[#004265] text-sm md:text-lg font-medium leading-[120%] font-interTight flex flex-col gap-y-2 items-center">
                      <span
                        onClick={() => {
                          setactiveTab("Rates");
                        }}
                        className="cursor-pointer"
                      >
                        Rates
                      </span>
                      <div
                        className={`w-full bg-[#004265] h-[3px] rounded-[3px] ${
                          activeTab === "Rates" ? "block" : "hidden"
                        }`}
                      ></div>
                    </div>
                  </div>
                  <div>
                    {activeTab === "Details" && (
                      <div className="flex flex-col gap-y-6 mx-2 md:mx-0">
                        <div className="flex flex-col gap-y-6 ">
                          {features.map((item, index) => (
                            <div
                              key={index}
                              className="flex flex-row md:items-center items-baseline gap-x-1"
                            >
                              <span className="text-sm md:text-xl font-inter leading-[150%] font-medium text-[#004265]">
                                {item.tittle}
                              </span>
                              <p className="text-sm md:text-xl font-inter leading-[150%] font-medium text-[#9C9EA1] ">
                                {item.content}
                              </p>
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-col md:gap-y-6 gap-y-3">
                          {points.map((item, index) => (
                            <p
                              key={index}
                              className={`text-sm md:text-xl font-inter leading-[150%] font-normal text-[#565656] ${
                                index === 3 ? "max-w-[700px]" : "max-w-[1184px]"
                              }`}
                            >
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                    {activeTab === "Location" && (
                      <div className="w-full md:mt-10">
                        <GoogleMap
                          mapContainerStyle={containerStyle}
                          center={waypoints[0]}
                          zoom={11}
                          onLoad={(map) => (mapRef.current = map)}
                          tilt={45}
                        >
                          {directionsResponse && (
                            <DirectionsRenderer
                              directions={directionsResponse}
                            />
                          )}
                          {showTraffic && <TrafficLayer />}
                        </GoogleMap>
                      </div>
                    )}
                    {activeTab === "Rates" && (
                      <div className="flex flex-col gap-y-3 ">
                        <div className="flex flex-col">
                          <div className="flex md:flex-row flex-col">
                            <table
                              border="1"
                              style={{
                                borderCollapse: "collapse",
                                width: "100%",
                              }}
                            >
                              <thead>
                                <tr className="md:text-xl font-inter leading-[120%] font-normal text-[#004265]">
                                  <th
                                    style={{
                                      width: "325px",
                                      padding: "8px",
                                      textAlign: "left",
                                    }}
                                  >
                                    Season
                                  </th>
                                  <th
                                    style={{
                                      width: "130px",
                                      padding: "8px",
                                      textAlign: "left",
                                    }}
                                  >
                                    Adult
                                  </th>
                                  <th
                                    style={{
                                      width: "130px",
                                      padding: "8px",
                                      textAlign: "left",
                                    }}
                                  >
                                    13 to 17 yrs old
                                  </th>
                                  <th
                                    style={{
                                      width: "130px",
                                      padding: "8px",
                                      textAlign: "left",
                                    }}
                                  >
                                    3 to 12 yrs old
                                  </th>
                                  <th
                                    style={{
                                      width: "130px",
                                      padding: "8px",
                                      textAlign: "left",
                                    }}
                                  >
                                    0 to 2 yrs old
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td colSpan="5">
                                    <hr
                                      style={{
                                        border: "1px solid black",
                                        margin: "12px 0",
                                      }}
                                    />
                                  </td>
                                </tr>
                                <tr className="md:text-xl font-inter leading-[120%] font-normal text-[#004265]">
                                  <td
                                    style={{
                                      width: "325px",
                                      padding: "8px",
                                      textAlign: "left",
                                    }}
                                  >
                                    Friday & Saturday (2025)
                                  </td>
                                  <td
                                    style={{
                                      width: "130px",
                                      padding: "8px",
                                      textAlign: "left",
                                    }}
                                  >
                                    £121
                                  </td>
                                  <td
                                    style={{
                                      width: "130px",
                                      padding: "8px",
                                      textAlign: "left",
                                    }}
                                  >
                                    £114
                                  </td>
                                  <td
                                    style={{
                                      width: "130px",
                                      padding: "8px",
                                      textAlign: "left",
                                    }}
                                  >
                                    £72
                                  </td>
                                  <td
                                    style={{
                                      width: "130px",
                                      padding: "8px",
                                      textAlign: "left",
                                    }}
                                  >
                                    £0
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <span className="md:text-xl font-inter leading-[150%] font-normal text-[#565656]">
                          * Price includes the buffet-style dinner cruise, live
                          music entertainment, a tip and applicable taxes.
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </div>
    </DialogContent>
  );
};

export default RecomendedAttractionModal;
