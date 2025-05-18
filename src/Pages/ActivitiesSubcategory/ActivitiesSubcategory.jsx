import CommonHeroBanner from "@/components/common/HeroBanner/CommonHeroBanner";
import bg from "../../assets/images/activities/activities.jfif";
import ActivitiesSubcategoryLeftDescription from "@/components/ActivitiesSubcategory/ActivitiesSubcategoryLeftDescription";
import ActivitiesSubcategoryRightDescription from "@/components/ActivitiesSubcategory/ActivitiesSubcategoryRightDescription";
import ActivitiesSubcategoryTab from "@/components/ActivitiesSubcategory/ActivitiesSubcategoryTab";
import { useEffect, useMemo, useState } from "react";
import ActivitiesSubcategoryCard from "@/components/common/Cards/ActivitiesSubcategoryCard";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useGetSingleActivityDetailsQuery } from "@/Redux/features/api/apiSlice";
import { InfinitySpin } from "react-loader-spinner";
import toast from "react-hot-toast";

const ActivitiesSubcategory = () => {
  const location = useLocation();
  const [allActitvitySubCategoryTab, setallActitvitySubCategoryTab] = useState(
    []
  );
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState([]);

  const { heroImg, queryId } = useMemo(() => {
    const params = new URLSearchParams(location.search);
    const bgWithId = params.get("bg");

    if (bgWithId) {
      const [bgUrl, idPart] = bgWithId.split("?");
      const idParams = new URLSearchParams(idPart);
      return {
        heroImg: bgUrl,
        queryId: idParams.get("id"),
      };
    }

    return { heroImg: "", queryId: "" };
  }, [location.search]);

  const { data, error, isLoading } = useGetSingleActivityDetailsQuery(
    queryId || "default",
    {
      skip: !queryId,
      refetchOnFocus: true,
      refetchOnReconnect: true,
    }
  );

  useEffect(() => {
    if (error) {
      const errorMessage =
        error.data?.message || error.error || error.status || error.message;
      toast.error(errorMessage);
    }
  }, [error]);

  const imgBaseurl = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    if (data?.data?.activity_category) {
      const categories = data.data.activity_category.map(item => ({
        id: item.id,
        title: item.name,
        items: item.activity_sub_category.length,
        contents: item.activity_sub_category.map(sub => ({
          id: `${sub.id}`,
          image: `${imgBaseurl}/${sub?.image}`,
          title: sub.title,
          duration: sub.time,
        })),
      }));

      setallActitvitySubCategoryTab(categories);
      setActiveTab(categories[0]);
    }
  }, [data]);


  return (
    <>
      <div>
        <CommonHeroBanner bg={heroImg} title={id} italic="Activities" />
        {/* description */}

        <section className="2xl:my-20 md:my-10 mt-10 container">
          {/* title */}
          <div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-editorsNoteNormal text-center text-primary">
              {id} <span className="font-editorsNoteItalic">Activities</span>
            </h2>
          </div>

          {/* details */}
          <div className="w-full flex flex-col md:flex-col lg:flex-col xl:flex-row md:gap-[400px] gap-[340px] xs:gap-[350px] sm:gap-[350px] lg:gap-[450px] xl:gap-[35px] 2xl:gap-[56px] lg:mt-[60px] md:mt-6 mt-4 items-stretch">
            {/* image */}
            <ActivitiesSubcategoryLeftDescription
              bgImg={`${imgBaseurl}/${data?.data?.activity_details[0]?.image}`}
            />
            {/* right side */}

            <ActivitiesSubcategoryRightDescription
              data={data?.data?.activity_details[0]}
            />
          </div>

          {/* Water activities tab section */}
          <div className="xl:my-20 mt-5 md:mt-8 lg:mt-8">
            {/* title */}
            <div>
              <h2 className="text-3xl text-primary font-editorsNoteNormal">
                See {id} Activities by Yourself
              </h2>
            </div>

            {/* tabs and contents*/}
            <div className=" xl:grid xl:grid-cols-8 gap-8 mt-4 md:mt-5 xl:mt-10">
              {/* tabs */}
              <div className="flex flex-col gap-5 col-span-2">
                {allActitvitySubCategoryTab &&
                  allActitvitySubCategoryTab?.map(tab => {
                    return (
                      <ActivitiesSubcategoryTab
                        key={tab?.id}
                        tab={tab}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                      />
                    );
                  })}
              </div>

              {/* contents */}
              <div className="grid md:grid-cols-2 md:gap-2 gap-5 col-span-6 my-8 xl:my-0">
                {activeTab?.contents?.map(item => (
                  <ActivitiesSubcategoryCard item={item} key={item?.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ActivitiesSubcategory;
