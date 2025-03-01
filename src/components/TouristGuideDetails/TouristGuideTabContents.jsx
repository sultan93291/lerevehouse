/* eslint-disable react/prop-types */
const TouristGuideTabContents = ({ content }) => {
  return (
    <div
      id={content?.id}
      className={`flex flex-col xl:flex-row gap-5 md:gap-8 2xl:gap-12 items-stretch ${content?.align == 'right' ? 'flex-row-reverse' : 'flex-row'
        }`}
    >
      <div className="xl:w-1/2">
        <img
          className="w-full object-cover h-full"
          src={content?.image}
          alt="Denali National Park"
        />
      </div>
      <div className="xl:w-1/2">
        <h3 className="text-lg xs:text-xl md:text-3xl tracking-wider font-semibold font-editorsNoteNormal">
          {content?.title}
        </h3>
        <div className="text-text-gray font-interTight mt-3 md:mt-6 leading-[170%] space-y-4 text-[15px] xs:text-base lg:text-lg">
          {content?.descriptions.map((description, idx) => (
            <p key={idx}>{description}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TouristGuideTabContents;
