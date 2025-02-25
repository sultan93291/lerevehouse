import person from '@/assets/images/person.png';
import { TestimonialStarSvg } from '../SvgContainer/SvgContainer';

const TestimonialSliderHomepage = () => {
  return (
    <div className="max-w-[760px] mx-auto text-white pb-20">
      <div className="w-full flex items-center justify-center">
        <div className="size-24">
          <img
            className="w-full h-full object-cover rounded-full"
            src={person}
            alt=""
          />
        </div>
      </div>
      {/* description */}
      <p className="font-editorsNoteNormal text-xl tracking-wider font-light mt-6 text-center leading-[1.6]">
        This is the second time we have used Le Re House. They are an
        exceptional company that goes above and beyond to make their clients
        happy. Every detail is taken care of. From the properties they recommend
        to the experiences they curate, they are second to none. They anticipate
        your needs and arrange surprises that enhance your vacation. I have
        and...
      </p>

      {/* star */}
      <div className="mt-5 w-full flex items-center justify-center gap-1">
        <div className="bg-white size-6 flex items-center justify-center rounded-md">
          <TestimonialStarSvg />
        </div>
        <div className="bg-white size-6 flex items-center justify-center rounded-md">
          <TestimonialStarSvg />
        </div>
        <div className="bg-white size-6 flex items-center justify-center rounded-md">
          <TestimonialStarSvg />
        </div>
        <div className="bg-white size-6 flex items-center justify-center rounded-md">
          <TestimonialStarSvg />
        </div>
        <div className="bg-white size-6 flex items-center justify-center rounded-md">
          <TestimonialStarSvg />
        </div>
      </div>

      {/* user info */}
      <div className="mt-5 space-y-1">
        <h4 className="font-inter text-lg text-center">Name Surname</h4>
        <p className="font-inter text-lg text-center">
          Published 05th December 2024 on Trustpilot{' '}
        </p>
      </div>
    </div>
  );
};

export default TestimonialSliderHomepage;
