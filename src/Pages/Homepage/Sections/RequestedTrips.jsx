import bg1 from "@/assets/images/bg1.png";
import bg2 from "@/assets/images/bg2.png";
import bg3 from "@/assets/images/bg3.png";
import bg4 from "@/assets/images/bg4.png";
import bg from "@/assets/images/bg.png";
import { Link } from "react-router-dom";
import RequestedTripCard from "@/components/common/Cards/RequestedTripCard";
import { useGetRequestedTripsQuery } from "@/Redux/features/api/apiSlice";
import { useEffect, useState } from "react";

const RequestedTrips = () => {
  const { data, error, isLoading } = useGetRequestedTripsQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const [sanitizedData, setSanitizedData] = useState([]);

  useEffect(() => {
    if (!data?.data) return;

    const processed = data.data.map((item, idx) => {
      console.log(item);

      const newData = {
        id: item?.trip_package?.id,
        image: item?.trip_package?.trip_package_image,
        title: item?.trip_package?.trip_package_title,
        description: item?.trip_package?.trip_detail?.hero_section_description,
      };

      if (idx === 0) {
        newData.bgColor = "#002B4D";
        newData.type = "horizontal";
      } else if (idx === 1) {
        newData.bgColor = "#455C01";
        newData.type = "verticall";
      } else if (idx === 2) {
        newData.bgColor = "#271000";
        newData.type = "vertical";
      } else if (idx === 3) {
        newData.bgColor = "#C54F05";
        newData.type = "horizontal";
      }

      return newData;
    });

    setSanitizedData(processed);
  }, [data?.data]);

  console.log(sanitizedData);

  const requestedTripsInfo = [
    {
      id: 1,
      image: bg1,
      type: "horizontal",
      title: "Western Canada Tour ",
      bgColor: "#002B4D",
      description:
        "Experience the breathtaking landscapes of Western Canada, from majestic mountains to serene lakes, with unforgettable adventures and cultural highlights.",
    },
    {
      id: 2,
      image: bg2,
      type: "vertical",
      bgColor: "#455C01",
      title: "Grizzlies & Orcas of the West Coast  ",
      description:
        "Witness majestic grizzlies and orcas in their natural habitats on the West Coast, blending wildlife encounters with stunning scenery.",
    },
    {
      id: 3,
      image: bg3,
      type: "vertical",
      bgColor: "#271000",
      title: "Mini-Group Western Canada Tour  ",
      description:
        "Join a mini-group adventure through Western Canada, exploring scenic landscapes, iconic landmarks, and local culture for an intimate experience.",
    },
    {
      id: 4,
      image: bg4,
      type: "horizontal",
      bgColor: "#C54F05",
      title: "Kayak Adventure Trip  ",
      description:
        "Create unforgettable memories with your family on a trip tailored for all ages, featuring fun, relaxation, and adventure. ",
    },
  ];
  return (
    <section className="bg-[#E8F3FA] flex flex-col   py-10 2xl:py-20">
      {/* title */}
      <div>
        <h2 className="text-center  text-3xl 2xl:text-5xl font-editorsNoteNormal text-primary">
          Here is a <span className="text-secondary">List of</span> Our Most{" "}
          <br /> Requested Trips
        </h2>
      </div>

      {/* cards */}
      <div className="mt-8 2xl:mt-16 grid grid-cols-6 gap-6 container mx-auto px-4 lg:px-8 2xl:px-16 3xl:px-32">
        {sanitizedData?.map((item, idx) => (
          <RequestedTripCard idx={idx} key={item?.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default RequestedTrips;
