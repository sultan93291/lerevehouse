import descriptionBg from "../../assets/images/activities/ac-details.jfif";
const ActivitiesSubcategoryLeftDescription = () => {
  return (
    <div className="xl:w-1/2 w-full relative">
      <img
        className="absolute inset-0 w-full md:w-full lg:w-full h-[300px] md:h-[350px] lg:h-[400px] xl:h-full object-cover"
        src={descriptionBg}
        alt="Description background"
      />
    </div>
  );
};

export default ActivitiesSubcategoryLeftDescription;
