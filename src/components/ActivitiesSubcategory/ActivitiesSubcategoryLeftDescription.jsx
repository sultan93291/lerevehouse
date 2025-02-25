import descriptionBg from '../../assets/images/activities/ac-details.jfif';
const ActivitiesSubcategoryLeftDescription = () => {
  return (
    <div className="w-1/2 relative">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={descriptionBg}
        alt="Description background"
      />
    </div>
  );
};

export default ActivitiesSubcategoryLeftDescription;
