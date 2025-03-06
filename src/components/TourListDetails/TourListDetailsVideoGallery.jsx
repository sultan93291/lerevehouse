import CommonTitle from '../common/Title/CommonTitle';
import heroBg from '../../assets/video/destination-details.mp4';
import heroBg1 from '../../assets/video/contact-bg.mp4';
import heroBg2 from '../../assets/video/tourist-guide-bg-video.mp4';
import { useState } from 'react';
const TourListDetailsVideoGallery = () => {
  const videoGallery = [
    {
      src: heroBg,
    },
    {
      src: heroBg1,
    },
    {
      src: heroBg2,
    },
  ];

  const [active, setActive] = useState(videoGallery[0]);
  return (
    <div id="Video" className="mt-8 sm:my-10 xl:my-16">
      {/* title */}
      <div>
        <CommonTitle title="Explore our" italic="Video Gallery" />
      </div>
      {/* video gallery */}
      <div className="w-full flex gap-2 xl:gap-6 mt-5 sm:mt-10 items-stretch">
        {/* preview */}
        <div className="w-3/4 flex">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            src={active?.src}
          ></video>
        </div>

        {/* videos */}
        <div className="w-1/4 flex flex-col gap-2 xl:gap-6">
          {videoGallery?.map(video => (
            <div
              className="cursor-pointer"
              key={video?.src}
              onClick={() => setActive(video)}
            >
              <video className="  object-cover" src={video?.src}></video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourListDetailsVideoGallery;
