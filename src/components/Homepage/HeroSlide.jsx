import heroBg from '../../assets/video/hero-bg.mp4';
import HeroBtn from '../common/Buttons/HeroBtn';
import HeroReviewButton from './HeroReviewButton';

const HeroSlide = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden text-white">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        src={heroBg}
      ></video>

      {/* Linear Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00426533] to-[#00426533] z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center flex-col text-center space-y-8">
        <HeroReviewButton />
        <h1 className="text-white text-3xl md:text-5xl lg:text-8xl font-editorsNoteNormal space-y-2">
          Honeymoon & <br />
          <span className="!font-editorsNoteItalic">Romantic</span> Adventures
        </h1>

        <h4 className="font-interTight font-semibold text-xl">
          Daydreaming between British Columbia & Polynesia
        </h4>

        <HeroBtn />
      </div>
    </div>
  );
};

export default HeroSlide;
