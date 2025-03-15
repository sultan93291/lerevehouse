import CommonHeroBannerVideo from "@/components/common/HeroBanner/CommonHeroBannerVideo";
import heroBg from "@/assets/video/destination-details.mp4";
import DestinationDetailsTabs from "@/components/DestinationDetails/DestinationDetailsTabs";
import DestinationDetailsDescription from "@/components/DestinationDetails/DestinationDetailsDescription";
import destinationSuggestionBg from "@/assets/images/tourtlist-bg.jpg";
import DestinationDetailsSlider from "@/components/DestinationDetails/DestinationDetailsSlider";
import WhyBookSection from "../Homepage/Sections/WhyBookSection";
import place1 from "@/assets/images/places-to-visit/1.jpg";
import place2 from "@/assets/images/places-to-visit/2.jpg";
import place3 from "@/assets/images/places-to-visit/3.jpg";
import DestinationPlacesToVisit from "@/components/DestinationDetails/DestinationPlacesToVisit";
import lux1 from "@/assets/images/luxury/1.jpg";
import lux2 from "@/assets/images/luxury/2.jpg";
import lux3 from "@/assets/images/luxury/3.jpg";
import lux4 from "@/assets/images/luxury/4.jpg";
import lux5 from "@/assets/images/luxury/5.jpg";
import lux6 from "@/assets/images/luxury/6.jpg";
import lux7 from "@/assets/images/luxury/7.jpg";
import lux8 from "@/assets/images/luxury/8.jpg";
import DestinationLuxurySection from "@/components/DestinationDetails/DestinationLuxurySection";
import { useState } from "react";
import { useParams } from "react-router-dom";

const DestinationDetails = () => {
  const { title } = useParams();
  console.log(title);
  const sectionTabs = [
    {
      label: `${title} Holiday`,
      link: `${title}-holiday`,
    },
    {
      label: "Suggested",
      link: "suggestions",
    },
    {
      label: "Tour",
      link: "suggestions",
    },
    {
      label: "Place to visit",
      link: "places-to-visit",
    },
    {
      label: "Where to stay",
      link: "where-to-stay",
    },
  ];

  const destinationSuggestions = [
    {
      id: 1,
      image: destinationSuggestionBg,
      duration: 11,
      title: "Vancouver to Denali Park with 8 Day Cruise",
      description:
        "Our “ Canada and Alaska Trip - from Vancouver to Denali Park ” is dedicated to those who want to get to know Alaska Our “ Canada and Alaska Trip - from Vancouver to Denali Park ” is dedicated to those who want to get to know Alaska",
      price: 3550,
    },
    {
      id: 2,
      image: destinationSuggestionBg,
      duration: 11,
      title: "Vancouver to Denali Park with 8 Day Cruise",
      description:
        "Our “ Canada and Alaska Trip - from Vancouver to Denali Park ” is dedicated to those who want to get to know Alaska Our “ Canada and Alaska Trip - from Vancouver to Denali Park ” is dedicated to those who want to get to know Alaska",
      price: 3550,
    },
    {
      id: 3,
      image: destinationSuggestionBg,
      duration: 11,
      title: "Vancouver to Denali Park with 8 Day Cruise",
      description:
        "Our “ Canada and Alaska Trip - from Vancouver to Denali Park ” is dedicated to those who want to get to know Alaska Our “ Canada and Alaska Trip - from Vancouver to Denali Park ” is dedicated to those who want to get to know Alaska",
      price: 3550,
    },
    {
      id: 4,
      image: destinationSuggestionBg,
      duration: 11,
      title: "Vancouver to Denali Park with 8 Day Cruise",
      description:
        "Our “ Canada and Alaska Trip - from Vancouver to Denali Park ” is dedicated to those who want to get to know Alaska Our “ Canada and Alaska Trip - from Vancouver to Denali Park ” is dedicated to those who want to get to know Alaska",
      price: 3550,
    },
    {
      id: 5,
      image: destinationSuggestionBg,
      duration: 11,
      title: "Vancouver to Denali Park with 8 Day Cruise",
      description:
        "Our “ Canada and Alaska Trip - from Vancouver to Denali Park ” is dedicated to those who want to get to know Alaska Our “ Canada and Alaska Trip - from Vancouver to Denali Park ” is dedicated to those who want to get to know Alaska",
      price: 3550,
    },
  ];

  const placesToVisitInfo = [
    {
      image: place1,
      title: "Alaska Travel Denali National Park",
      description:
        "Denali National Park, located in Alaska's interior, is a stunning wilderness area that spans over six million acres, offering some of the most breathtaking landscapes in the world. The park is home to Denali (Mount McKinley), the tallest peak in North America",
    },
    {
      image: place2,
      title: "Alaska Cruise Trip Vancouver Island, Denail",
      description:
        "Denali National Park, located in Alaska's interior, is a stunning wilderness area that spans over six million acres, offering some of the most breathtaking landscapes in the world. The park is home to Denali (Mount McKinley), the tallest peak in North America",
    },
    {
      image: place3,
      title: "Guided Tour In Alaska ",
      description:
        "Denali National Park, located in Alaska's interior, is a stunning wilderness area that spans over six million acres, offering some of the most breathtaking landscapes in the world. The park is home to Denali (Mount McKinley), the tallest peak in North America",
    },
  ];

  const luxuryPlacesInfo = [
    {
      image: lux1,
      title: "Kananaskis Mountain Lodge",
      location: "Canadian Rockies",
      description:
        "Nestled in the heart of the Canadian Rockies, Kananaskis Mountain Lodge offers a luxurious",
    },
    {
      image: lux2,
      title: "Kananaskis Mountain Lodge",
      location: "Canadian Rockies",
      description:
        "Nestled in the heart of the Canadian Rockies, Kananaskis Mountain Lodge offers a luxurious",
    },
    {
      image: lux3,
      title: "Kananaskis Mountain Lodge",
      location: "Canadian Rockies",
      description:
        "Nestled in the heart of the Canadian Rockies, Kananaskis Mountain Lodge offers a luxurious",
    },
    {
      image: lux4,
      title: "Kananaskis Mountain Lodge",
      location: "Canadian Rockies",
      description:
        "Nestled in the heart of the Canadian Rockies, Kananaskis Mountain Lodge offers a luxurious",
    },
    {
      image: lux5,
      title: "Kananaskis Mountain Lodge",
      location: "Canadian Rockies",
      description:
        "Nestled in the heart of the Canadian Rockies, Kananaskis Mountain Lodge offers a luxurious",
    },
    {
      image: lux6,
      title: "Kananaskis Mountain Lodge",
      location: "Canadian Rockies",
      description:
        "Nestled in the heart of the Canadian Rockies, Kananaskis Mountain Lodge offers a luxurious",
    },
    {
      image: lux7,
      title: "Kananaskis Mountain Lodge",
      location: "Canadian Rockies",
      description:
        "Nestled in the heart of the Canadian Rockies, Kananaskis Mountain Lodge offers a luxurious",
    },
    {
      image: lux8,
      title: "Kananaskis Mountain Lodge",
      location: "Canadian Rockies",
      description:
        "Nestled in the heart of the Canadian Rockies, Kananaskis Mountain Lodge offers a luxurious",
    },
  ];

  const [activeTab, setActiveTab] = useState(sectionTabs[0]);

  return (
    <div className="relative ">
      {/* hero */}
      <CommonHeroBannerVideo
        heroBg={heroBg}
        title={title.toLowerCase()}
        capitalize={true}
      />

      {/*  Section Tabs */}
      <DestinationDetailsTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sectionTabs={sectionTabs}
      />

      <section className="container  mx-auto my-10 xl:my-20    ">
        {/* description container*/}
        <DestinationDetailsDescription id={`${title}-holiday`} />

        {/* Suggestions container */}
        <DestinationDetailsSlider
          destinationSuggestions={destinationSuggestions}
          title={title}
        />

        {/* why book this tour section */}
        <WhyBookSection />

        {/* places to visit section */}
        <DestinationPlacesToVisit placesToVisitInfo={placesToVisitInfo} />

        {/* Luxury Section */}
        <DestinationLuxurySection luxuryPlacesInfo={luxuryPlacesInfo} />
      </section>
    </div>
  );
};

export default DestinationDetails;
