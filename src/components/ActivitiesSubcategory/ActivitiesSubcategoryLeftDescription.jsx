import descriptionBg from "../../assets/images/activities/ac-details.jfif";
const ActivitiesSubcategoryLeftDescription = () => {
  return (
    <div className="md:w-1/2 w-full relative">
      <img
        className="absolute inset-0 md:w-full md:h-full object-cover"
        src={descriptionBg}
        alt="Description background"
      />
    </div>
  );
};

export default ActivitiesSubcategoryLeftDescription;
