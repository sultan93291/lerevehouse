/* eslint-disable react/prop-types */

const ActivitiesDetailsGalleryCard = ({ item }) => {
  return (
    <div>
      <div className="h-96">
        <img className="h-full w-full object-cover" src={item?.image} alt="" />
      </div>
    </div>
  );
};

export default ActivitiesDetailsGalleryCard;
