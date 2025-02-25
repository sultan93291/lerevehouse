import { ReviewStarLightSvg } from '../common/SvgContainer/SvgContainer';

const HeroReviewButton = () => {
  return (
    <div
      style={{
        background: `
          linear-gradient(0deg, rgba(0, 0, 0, 0.06) 0%, rgba(0, 0, 0, 0.06) 100%),
          rgba(255, 255, 255, 0.27)
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="flex items-center gap-3 text-white bg rounded-md px-2.5 py-2"
    >
      <div className="p-2 bg-black/15 backdrop-blur-sm rounded">
        <ReviewStarLightSvg />
      </div>
      <p className='font-interTight font-normal text-sm'>4.9/5 from over 600 reviews</p>
    </div>
  );
};

export default HeroReviewButton;
