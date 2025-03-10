import CommonHeroBanner from "@/components/common/HeroBanner/CommonHeroBanner";
import bg from "../../assets/images/activities/activities.jfif";
import ActivitiesSubcategoryLeftDescription from "@/components/ActivitiesSubcategory/ActivitiesSubcategoryLeftDescription";
import ActivitiesSubcategoryRightDescription from "@/components/ActivitiesSubcategory/ActivitiesSubcategoryRightDescription";
import ActivitiesSubcategoryTab from "@/components/ActivitiesSubcategory/ActivitiesSubcategoryTab";
import { useState } from "react";
import img1 from "@/assets/images/activities/1.jfif";
import img2 from "@/assets/images/activities/2.jfif";
import img3 from "@/assets/images/activities/3.jfif";
import img4 from "@/assets/images/activities/4.jfif";
import img5 from "@/assets/images/activities/5.jfif";
import ActivitiesSubcategoryCard from "@/components/common/Cards/ActivitiesSubcategoryCard";
const ActivitiesSubcategory = () => {
  const activitiesSubcategoryTabs = [
    {
      title: "Speed Boats & Jet Skis",
      items: 3,
      contents: [
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
        {
          id: "speedboats-005",
          image: img5,
          title: "Granite Falls Zodiac Tour by Vancouver Water Adventures",
          duration: "2h 30m+",
        },
        {
          id: "speedboats-006",
          image: img5,
          title: "Granite Falls Zodiac Tour by Vancouver Water Adventures",
          duration: "2h 30m+",
        },
      ],
    },
    {
      title: "Waterskiing & Wakeboarding",
      items: 1,
      contents: [
        {
          id: "watersports-001",
          image: img4,
          title: "Indian Arm and Granite Falls Zodiac Boat Tour",
          duration: "2h 30m+",
        },
        {
          id: "watersports-002",
          image: img5,
          title: "Granite Falls Zodiac Tour by Vancouver Water Adventures",
          duration: "2h 30m+",
        },
        {
          id: "watersports-003",
          image: img5,
          title: "Granite Falls Zodiac Tour by Vancouver Water Adventures",
          duration: "2h 30m+",
        },
      ],
    },
    {
      title: "Snorkeling & Scuba Diving",
      items: 3,
      contents: [
        {
          id: "diving-001",
          image: img1,
          title: "The Best Diving Spots in Vancouver",
          duration: "2h 30m+",
        },
        {
          id: "diving-002",
          image: img2,
          title: "Indian Arm and Granite Falls Zodiac Boat Tour",
          duration: "2h 30m+",
        },
      ],
    },
    {
      title: "Boat Rental",
      items: 2,
      contents: [
        {
          id: "rental-001",
          image: img1,
          title: "The Best Diving Spots in Vancouver",
          duration: "2h 30m+",
        },
        {
          id: "rental-002",
          image: img2,
          title: "Indian Arm and Granite Falls Zodiac Boat Tour",
          duration: "2h 30m+",
        },
        {
          id: "rental-003",
          image: img3,
          title: "Scuba Boat Dive in Horseshoe Bay",
          duration: "2h 30m+",
        },
        {
          id: "rental-004",
          image: img4,
          title: "Indian Arm and Granite Falls Zodiac Boat Tour",
          duration: "2h 30m+",
        },
      ],
    },
  ];
  const [activeTab, setActiveTab] = useState(activitiesSubcategoryTabs[0]);

  return (
    <div>
      <CommonHeroBanner bg={bg} title="Water" italic="Activities" />

      {/* description */}

      <section className="2xl:my-20 md:my-10 mt-10 container">
        {/* title */}
        <div>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-editorsNoteNormal text-center text-primary">
            Water <span className="font-editorsNoteItalic">Activities</span>
          </h2>
        </div>

        {/* details */}
        <div className="w-full flex flex-col md:flex-col lg:flex-col xl:flex-row md:gap-[400px] gap-[340px] xs:gap-[350px] sm:gap-[350px] lg:gap-[450px] xl:gap-[35px] 2xl:gap-[56px] lg:mt-[60px] md:mt-6 mt-4 items-stretch">
          {/* image */}
          <ActivitiesSubcategoryLeftDescription />
          {/* right side */}

          <ActivitiesSubcategoryRightDescription />
        </div>

        {/* Water activities tab section */}
        <div className="xl:my-20 mt-5 md:mt-8 lg:mt-8">
          {/* title */}
          <div>
            <h2 className="text-3xl text-primary font-editorsNoteNormal">
              See Water Activities by Yourself
            </h2>
          </div>

          {/* tabs and contents*/}
          <div className=" xl:grid xl:grid-cols-8 gap-8 mt-4 md:mt-5 xl:mt-10">
            {/* tabs */}
            <div className="flex flex-col gap-5 col-span-2">
              {activitiesSubcategoryTabs?.map((tab) => (
                <ActivitiesSubcategoryTab
                  key={tab?.title}
                  tab={tab}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              ))}
            </div>

            {/* contents */}
            <div className="grid md:grid-cols-2 md:gap-2 gap-5 col-span-6 my-8 xl:my-0">
              {activeTab?.contents?.map((item) => (
                <ActivitiesSubcategoryCard item={item} key={item?.id} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivitiesSubcategory;
