/* eslint-disable react/prop-types */
const CommonHeroBannerVideo = ({ heroBg, title, italic, capitalize }) => {
  return (
    <div className="relative h-[400px] lg:h-[600px] mt-24 w-full flex items-center justify-center overflow-hidden text-white">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        src={heroBg}
      ></video>

      {/* Linear Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.40)_0%,rgba(0,0,0,0.40)_100%)] z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center flex-col text-center space-y-8">
        <h1
          className={`text-3xl lg:text-6xl text-center xl:text-left font-editorsNoteNormal space-y-2 ${
            capitalize ? "capitalize" : "normal-case"
          }`}
        >
          {title}
          {italic && (
            <span className="font-editorsNoteItalic ml-4">{italic}</span>
          )}
        </h1>
      </div>
    </div>
  );
};

export default CommonHeroBannerVideo;
