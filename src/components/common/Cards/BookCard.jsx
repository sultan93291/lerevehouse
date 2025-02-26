/* eslint-disable react/prop-types */
const BookCard = ({ info }) => {
  return (
    <div className="font-interTight group">
      <div className="h-48 w-full overflow-hidden ">
        <img className="w-full h-full object-cover group-hover:scale-95 transition-all duration-300" src={info?.image} alt="" />
      </div>
      {/* title */}
      <div className="text-center mt-6 space-y-2">
        <h3 className="text-text-black font-semibold text-xl lg:text-2xl">{info?.title}</h3>
        <p className="text-[#565656] text-base lg:text-lg">{info?.description}</p>
      </div>
    </div>
  );
};

export default BookCard;
