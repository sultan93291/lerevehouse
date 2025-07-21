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
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  useGetAcitivitySubCategoryDetailsQuery,
  useGetRecomendedActivitiesQuery,
  useMetaDetailsDataMutation,
} from "@/Redux/features/api/apiSlice";
import HelmetComponent from "@/components/Helmet/Helmet";

const ActivitiesDetails = () => {
  const location = useLocation();
  const [bgImg, setBgImg] = useState("");
  const [title, setTitle] = useState("");
  const { id } = useParams();

  const [metaDetailsData, { isLoading: isMetaLoading, isSuccess, isError }] =
    useMetaDetailsDataMutation();

  const [metaData, setMetaData] = useState(null);

  useEffect(() => {
    metaDetailsData("activity_sub_category_details")
      .unwrap()
      .then(res => setMetaData(res?.data))
      .catch(err => console.error("Meta save error:", err));
  }, [metaDetailsData]);

  const { data, error, isLoading } = useGetAcitivitySubCategoryDetailsQuery(
    id || "default",
    {
      skip: !id,
      refetchOnFocus: true,
      refetchOnReconnect: true,
    }
  );

  const {
    data: RecomendedData,
    error: recomendedError,
    isLoading: isRecomendedLoading,
  } = useGetRecomendedActivitiesQuery(id || "default", {
    skip: !id,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  useEffect(() => {
    if (error) {
      const errorMessage =
        error.data?.message || error.error || error.status || error.message;
      toast.error(errorMessage);
    } else if (recomendedError) {
      const errorMessage =
        recomendedError.data?.message ||
        recomendedError.error ||
        recomendedError.status ||
        recomendedError.message;
      toast.error(errorMessage);
    }
  }, [error]);

  const imgBaseurl = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    const url = new URL(window.location.href);
    const bgImgRaw = url.searchParams.get("BgImg");

    if (bgImgRaw?.includes("?title=")) {
      const [imgPart, titlePart] = bgImgRaw.split("?title=");
      setBgImg(imgPart);
      setTitle(decodeURIComponent(titlePart));
    } else {
      setBgImg(bgImgRaw);
      setTitle(url.searchParams.get("title") || "");
    }
  }, [location]);

  return (
    <HelmetComponent
      title={metaData?.title}
      description={metaData?.description}
    >
      <CommonHeroBanner
        uppercaseItalic={true}
        uppercaseTitle={true}
        bg={`${imgBaseurl}/${bgImg}`}
        title={title}
      />

      <section className="container md:my-20 mt-10 mb-10">
        {/* gallery */}
        <ActivitiesDetailsGallery
          activitiesDetailsGalleryItems={
            data?.data[0]?.activity_sub_category_details_images
          }
        />

        {/* description */}
        <div className="md:mt-16 mt-8">
          {/* title */}
          <div
            dangerouslySetInnerHTML={{
              __html: data?.data[0]?.short_description,
            }}
            className="space-y-2 text-2xl font-editorsNoteNormal text-text-black font-medium short_descreption "
          ></div>
        </div>

        {/* map section */}
        <div className="md:mt-16 mt-8 flex flex-col md:flex-row md:gap-10 gap-6 md:h-[700px] items-stretch">
          {/* left side */}
          <div className="md:w-2/3">
            <img
              src={`${imgBaseurl}/${data?.data[0]?.image}`}
              className="w-full h-[280px] md:h-[665px] object-cover"
              alt="not found"
            />
          </div>

          {/* right side */}
          <div className="flex flex-col gap-6 justify-center md:w-1/3">
            <div className="space-y-3">
              <h4 className="text-2xl font-editorsNoteNormal text-text-black font-medium leading-[140%]">
                Where are the activities?
              </h4>
              <div className="space-y-2 font-interTight text-text-gray">
                <p> {data?.data[0]?.where}</p>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-2xl font-editorsNoteNormal text-text-black font-medium leading-[140%]">
                When are the activities?
              </h4>
              <div className="space-y-2 font-interTight text-text-gray">
                <p> {data?.data[0]?.when}</p>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-2xl font-editorsNoteNormal text-text-black font-medium leading-[140%]">
                Available Date
              </h4>
              <div className="space-y-2 font-interTight text-text-gray">
                <p> {data?.data[0]?.avaiable_date}</p>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-2xl font-editorsNoteNormal text-text-black font-medium leading-[140%]">
                Number of Travelers
              </h4>
              <div className="space-y-2 font-interTight text-text-gray">
                <p> {data?.data[0]?.number_of_people}</p>
              </div>
            </div>
          </div>
        </div>

        {/* includes and excludes */}
        <div className="md:mt-16 mt-8 md:p-10 p-5 bg-[#efefef] flex flex-row gap-[60px] flex-wrap ">
          <div className="flex flex-col gap-y-[36px]  ">
            <div
              dangerouslySetInnerHTML={{
                __html: data?.data[0]?.description,
              }}
              className="flex flex-col flex-wrap gap-y-4 text-[#252525] text-lg lg:text-2xl font-fontSpring font-medium leading-[150%]  "
            ></div>
          </div>
        </div>

        {/* recommendation */}
        <div className="md:mt-16 mt-8">
          {/* title */}
          <div>
            <h4 className="font-editorsNoteNormal text-3xl font-medium leading-[132%]">
              Recommended Activities for You
            </h4>
          </div>

          {/* cards */}
          <div className="md:mt-16 mt-4 grid lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 md:gap-2 gap-5 col-span-6">
            {RecomendedData?.data?.slice(0, 4).map(item => (
              <ActivitiesSubcategoryCard item={item} key={item?.id} />
            ))}
          </div>
        </div>
      </section>
    </HelmetComponent>
  );
};

export default ActivitiesDetails;
