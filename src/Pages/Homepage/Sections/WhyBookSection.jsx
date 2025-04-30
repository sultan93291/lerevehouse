import BookCard from "@/components/common/Cards/BookCard";
import image1 from "@/assets/images/11.jpg";
import image2 from "@/assets/images/22.jpg";
import image3 from "@/assets/images/33.jpg";
import { forwardRef } from "react";
import { useGetWhyBookWithLereveHouseQuery } from "@/Redux/features/api/apiSlice";
const WhyBookSection = forwardRef(({ ...props }, ref) => {
   const { data, error, isLoading } = useGetWhyBookWithLereveHouseQuery(
     undefined,
     {
       refetchOnFocus: true,
       refetchOnReconnect: true,
     }
  );
  
  return (
    <section
      ref={ref}
      {...props}
      id="tour"
      className="lg:py-14 2xl:py-28 container mx-auto mt-10 xl:mt-0"
    >
      <div>
        <h2 className=" text-[28px] md:text-4xl xl:text-5xl font-editorsNoteNormal text-center text-primary">
          Why book with Lerevehouse?
        </h2>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-12 mb-16 mt-10">
        {data?.data?.map((info) => (
          <BookCard key={info?.title} info={info} />
        ))}
      </div>
    </section>
  );
});
WhyBookSection.displayName = "WhyBookSection";

export default WhyBookSection;
