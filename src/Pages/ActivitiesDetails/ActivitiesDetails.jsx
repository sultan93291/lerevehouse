import CommonHeroBanner from "@/components/common/HeroBanner/CommonHeroBanner";
import bg from "@/assets/images/activities/activities-details.jfif";
import image1 from "@/assets/images/activities-details/1.jfif";
import image2 from "@/assets/images/activities-details/2.jfif";
import image3 from "@/assets/images/activities-details/3.jfif";
import image4 from "@/assets/images/activities-details/4.jfif";
import img1 from "@/assets/images/activities/1.jfif";
import img2 from "@/assets/images/activities/2.jfif";
import img3 from "@/assets/images/activities/3.jfif";
import img4 from "@/assets/images/activities/4.jfif";
import ActivitiesDetailsGallery from "@/components/ActivitiesDetails/ActivitiesDetailsGallery";
import ActivitiesSubcategoryCard from "@/components/common/Cards/ActivitiesSubcategoryCard";
import plane from "../../assets/images/activities-details/plane.jpg";
import { tickPriceLeft } from "@/components/DummyData/priceDummyData";
import { CheckMark } from "@/components/common/SvgContainer/SvgContainer";

const ActivitiesDetails = () => {
  const activitiesDetailsGalleryItems = [
    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image3,
    },
    {
      image: image4,
    },
    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image3,
    },
    {
      image: image4,
    },
    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image3,
    },
    {
      image: image4,
    },
    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image3,
    },
    {
      image: image4,
    },
  ];

  const recommendedActivities = [
    {
      id: "speedboats-001",
      image: img1,
      title: "The Best Diving Spots in Vancouver",
      duration: "2h 30m+",
    },
    {
      id: "speedboats-002",
      image: img2,
      title: "Indian Arm and Granite Falls Zodiac Boat Tour",
      duration: "2h 30m+",
    },
    {
      id: "speedboats-003",
      image: img3,
      title: "Scuba Boat Dive in Horseshoe Bay",
      duration: "2h 30m+",
    },
    {
      id: "speedboats-004",
      image: img4,
      title: "Indian Arm and Granite Falls Zodiac Boat Tour",
      duration: "2h 30m+",
    },
  ];
  return (
    <div>
      <CommonHeroBanner
        uppercaseItalic={true}
        uppercaseTitle={true}
        bg={bg}
        title="VANCOUVER"
        italic="Diving sports"
      />

      <section className="container my-20">
        {/* gallery */}
        <ActivitiesDetailsGallery
          activitiesDetailsGalleryItems={activitiesDetailsGalleryItems}
        />

        {/* description */}
        <div className="mt-16">
          {/* title */}
          <div className="space-y-2">
            <h2 className="text-3xl font-editorsNoteNormal text-primary">
              Scuba{" "}
              <span className="text-secondary font-editorsNoteItalic">
                Boat Dive
              </span>{" "}
              in Horseshoe Bay
            </h2>
            <p className="text-[#118D57] font-interTight font-medium">
              Free Cancellation Available
            </p>
          </div>

          {/* overview */}
          <div className="mt-6 space-y-2">
            <h4 className="text-2xl font-editorsNoteNormal text-text-black font-medium">
              Overview
            </h4>
            <p className="font-interTight text-lg text-text-gray leading-[180%]">
              See Vancouver the way it is best seen - by water - during this
              3-hour tour in a Zodiac inflatable boat. Beginning at Granville
              Island, you&lsquo;ll cross False Creek and follow the coastline
              through Stanley Park. From your guide, learn about
              Vancouver&lsquo;s waterfront landmarks like the Burrard Street
              bridge and the city&lsquo;s most-photographed natural formation:
              Siwash Rock.Travel through the Vancouver Harbour and on to Deep
              Cove and Indian Arm, a glacial fjord with a backdrop of steep
              granite cliffs that can only be seen by boat.
            </p>
          </div>
        </div>

        {/* map section */}
        <div className="mt-16 flex md:gap-10 gap-6 md:h-[700px] items-stretch">
          {/* left side */}
          <div className="w-2/3">
            <img
              src={plane}
              className="w-full h-[665px] object-cover"
              alt="not found"
            />
          </div>

          {/* right side */}
          <div className="flex flex-col gap-6 justify-center w-1/3">
            <div className="space-y-3">
              <h4 className="text-2xl font-editorsNoteNormal text-text-black font-medium leading-[140%]">
                Where are the activities?
              </h4>
              <div className="space-y-2 font-interTight text-text-gray">
                <p>6373 Bruce St, West Vancouver</p>
                <p>BC V7W 2G5, Canada</p>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-2xl font-editorsNoteNormal text-text-black font-medium leading-[140%]">
                When are the activities?
              </h4>
              <div className="space-y-2 font-interTight text-text-gray">
                <p>From 12:00 pm if weather is good.</p>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-2xl font-editorsNoteNormal text-text-black font-medium leading-[140%]">
                Available Date
              </h4>
              <div className="space-y-2 font-interTight text-text-gray">
                <p>From 12:00 pm if weather is good.</p>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-2xl font-editorsNoteNormal text-text-black font-medium leading-[140%]">
                Number of Travelers
              </h4>
              <div className="space-y-2 font-interTight text-text-gray">
                <p>5 Traveler</p>
              </div>
            </div>
          </div>
        </div>

        {/* includes and excludes */}
        <div className="mt-16 p-10 bg-[#efefef] flex flex-row gap-[60px] flex-wrap ">
          <div className="flex flex-col gap-y-[36px] max-w-[736px] ">
            <div className="flex flex-col flex-wrap gap-y-4  ">
              <h4 className="text-[#252525] text-lg lg:text-2xl font-fontSpring font-medium leading-[150%]  ">
                What’s included in this adventure?
              </h4>
              {tickPriceLeft.map((item, idx) => {
                return (
                  <div className="flex gap-x-2">
                    <div className="w-[22px] h-[22px]">
                      <CheckMark />
                    </div>
                    <span className=" text-[#000000] text-base lg:text-lg font-medium leading-[150%] font-interTight ">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-y-[36px] max-w-[600px] ">
            <div className="flex flex-col flex-wrap gap-y-4  ">
              <h4 className="text-[#252525] text-lg lg:text-2xl font-fontSpring font-medium leading-[150%]  ">
                What’s included in this adventure?
              </h4>
              {tickPriceLeft.map((item, idx) => {
                return (
                  <div className="flex gap-x-2">
                    <div className="w-[22px] h-[22px]">
                      <CheckMark />
                    </div>
                    <span className=" text-[#000000] text-base lg:text-lg font-medium leading-[150%] font-interTight ">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-y-[36px] max-w-[736px] ">
            <div className="flex flex-col flex-wrap gap-y-4  ">
              <h4 className="text-[#252525] text-lg lg:text-2xl font-fontSpring font-medium leading-[150%]  ">
                What’s included in this adventure?
              </h4>
              {tickPriceLeft.map((item, idx) => {
                return (
                  <div className="flex gap-x-2">
                    <div className="w-[22px] h-[22px]">
                      <CheckMark />
                    </div>
                    <span className=" text-[#000000] text-base lg:text-lg font-medium leading-[150%] font-interTight ">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <span className="  max-w-[817px] text-[#000000] text-base lg:text-lg font-normal leading-[150%] font-interTight ">
            <span className="font-semibold" >PRECAUTION:</span> Verify that you meet the required
            certification level (e.g., PADI Advanced Open Water Diver or
            equivalent) for the dive site and type of dive.
          </span>
        </div>

        {/* recommendation */}
        <div className="mt-16">
          {/* title */}
          <div>
            <h4 className="font-editorsNoteNormal text-3xl font-medium leading-[132%]">
              Recommended Activities for You
            </h4>
          </div>

          {/* cards */}
          <div className="md:mt-16 mt-12 grid md:grid-cols-3 3xl:grid-cols-4 md:gap-2 gap-5 col-span-6">
            {recommendedActivities?.map(item => (
              <ActivitiesSubcategoryCard item={item} key={item?.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivitiesDetails;
