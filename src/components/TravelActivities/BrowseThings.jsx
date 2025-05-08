import { useGetAllTravelStylesDataQuery } from "@/Redux/features/api/apiSlice";
import imageOne from "../../assets/images/thingstodo1.png";
import imageTwo from "../../assets/images/thingstodo2.png";
import imageThree from "../../assets/images/thingstodo3.png";
import imageFour from "../../assets/images/thingstodo4.png";
import imageFive from "../../assets/images/thingstodo5.png";
import imageSix from "../../assets/images/thingstodo6.png";
import imageSeven from "../../assets/images/thingstodo7.png";
import imageEight from "../../assets/images/thingstodo8.png";
import imageNine from "../../assets/images/thingstodo9.png";
import TravelExploreCard from "../TravelStyles/TravelExploreCard";
import { InfinitySpin } from "react-loader-spinner";
import toast from "react-hot-toast";

const BrowseThings = () => {
  const { data, error, isLoading } = useGetAllTravelStylesDataQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 bg-white">
        <InfinitySpin
          visible={true}
          width="200"
          color="#004265"
          ariaLabel="infinity-spin-loading"
        />
      </div>
    );
  }

  if (error) {
    const errorMessage =
      error.data?.message || error.error || error.status || error.message;
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }

  return (
    <section className="2xl:py-20 md:py-0 py-1">
      <div className="container">
        <div className="2x:mb-[60px] mb-7 md:mb-10">
          <h3 className="title--xxl text-center">
            Browse{" "}
            <span className="text-secondary font-editorsNoteItalic">
              Things to Do
            </span>{" "}
            by Your Interest
          </h3>
        </div>
        <div>
          <div className="grid lg:grid-cols-3 gap-5">
            {data?.data?.map(item => (
              <TravelExploreCard
                link={"/activities/subcategory/"}
                key={item.id}
                item={item}
                travelMode={"activity"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseThings;
