/* eslint-disable react/prop-types */

const ActivitiesDetailsGalleryCard = ({ item }) => {
  const imgBaseurl = import.meta.env.VITE_SERVER_URL;
  return (
    <div>
      <div className="h-96">
        <img
          className="h-full w-full object-cover"
          src={`${imgBaseurl}/${item}`}
          alt="not found"
        />
      </div>
    </div>
  );
};

export default ActivitiesDetailsGalleryCard;
