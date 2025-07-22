import bg1 from "@/assets/images/bg1.png";
import bg2 from "@/assets/images/bg2.png";
import bg3 from "@/assets/images/bg3.png";
import bg4 from "@/assets/images/bg4.png";
import { useGetRequestedTripsQuery } from "@/Redux/features/api/apiSlice";
import RequestedTripCard from "@/components/common/Cards/RequestedTripCard";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const RequestedTrips = () => {
  const { t } = useTranslation();

  const { data, error, isLoading } = useGetRequestedTripsQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const [sanitizedData, setSanitizedData] = useState([]);

  useEffect(() => {
    if (!data?.data) return;

    const processed = data.data.map((item, idx) => {
      // console.log(item);

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
        newData.type = "vertical";
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

  return (
    <section className="bg-[#E8F3FA] flex flex-col py-10 2xl:py-20">
      {/* Title */}
      <div>
        <h2 className="text-center text-3xl 2xl:text-5xl font-editorsNoteNormal text-primary">
          {t("requestedTrips.sectionTitle.part1")}{" "}
          <span className="text-secondary">{t("requestedTrips.sectionTitle.highlight")}</span>{" "}
          {t("requestedTrips.sectionTitle.part2")} <br /> {t("requestedTrips.sectionTitle.part3")}
        </h2>
      </div>

      {/* Cards */}
      <div className="mt-8 2xl:mt-16 grid grid-cols-6 gap-6 container mx-auto px-4 lg:px-8 2xl:px-16 3xl:px-32">
        {sanitizedData?.map((item, idx) => (
          <RequestedTripCard idx={idx} key={item?.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default RequestedTrips;
