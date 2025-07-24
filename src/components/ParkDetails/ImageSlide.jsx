import "swiper/css";
import "swiper/css/pagination";

const ImageSlide = ({ images }) => {
  const imgBaseurl = import.meta.env.VITE_SERVER_URL;

  return (
    <div className="flex items-center justify-center relative h-[300px] xl:h-[500px] gap-0 overflow-hidden">
      {images.map((image, idx) => {
        return (
          <div
            key={idx}
            className={`shadow-md transition-all duration-300 overflow-hidden
              ${idx === 1 ? "w-[866px]" : "w-[363px]"}
              h-[250px] sm:h-[300px] lg:h-full`}
          >
            <img
              src={`${imgBaseurl}/${image?.image}`}
              alt={image?.image_alt_txt}
              className="w-full h-full object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlide;
