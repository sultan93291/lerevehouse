/* eslint-disable react/prop-types */
import { Link, useNavigate, useParams } from "react-router-dom";

const SingleDestinationCard = ({
  bg,
  title,
  height,
  id,
  isTravelGuide = false,
}) => {
  const navigate = useNavigate();

  // /tourist-guide/:id

  return (
    <div
      onClick={() => {
        if (isTravelGuide) {
          navigate(`/tourist-guide/${id}`);
        } else {
          navigate(`/destination-details/${id}`);
        }
      }}
      className={`${
        height == "full"
          ? " h-[250px] 3xl:h-[650px]"
          : " h-[250px] 3xl:h-[450px]"
      } group hover:bg-opacity-55 transition-all duration-500 bg-center cursor-pointer w-full flex items-center justify-center text-white`}
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(${bg})`,
        backgroundColor: "lightgray",
        backgroundPosition: "50%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <p className=" text-2xl 3xl:text-4xl font-semibold font-editorsNoteNormal text-center xl:text-left group-hover:scale-105 transition-all duration-500">
        {title}
      </p>
    </div>
  );
};

export default SingleDestinationCard;
