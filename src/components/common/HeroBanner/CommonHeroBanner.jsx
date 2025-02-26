/* eslint-disable react/prop-types */
import { TourListDetailsClockSvg } from '../SvgContainer/SvgContainer';

const CommonHeroBanner = ({
  bg,
  title,
  italic,
  duration,
  uppercaseTitle,
  uppercaseItalic,
}) => {
  return (
    <section
      className=" h-[400px] xl:h-[600px] mt-12 xl:mt-24 bg-cover bg-center flex flex-col gap-5 lg:gap-10 items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(${bg})`,
        backgroundColor: 'lightgray',
        backgroundPosition: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <h1 className=" text-4xl lg:text-6xl text-center xl:text-left font-editorsNoteNormal font-light text-white ">
        <span className={`${uppercaseTitle ? 'uppercase' : 'capitalize'}`}>
          {title && title.toLowerCase()}
        </span>
        {italic && (
          <span
            className={`font-editorsNoteItalic ml-4 ${
              uppercaseItalic ? 'uppercase' : 'capitalize'
            }`}
          >
            {italic}
          </span>
        )}
      </h1>

      {duration && (
        <div className="bg-white px-5 py-2 text-primary font-interTight font-semibold flex items-center gap-3">
          <TourListDetailsClockSvg />
          <span> {duration} </span>
        </div>
      )}
    </section>
  );
};

export default CommonHeroBanner;
