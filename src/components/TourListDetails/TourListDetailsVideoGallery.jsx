import { useTranslation } from "react-i18next";
import CommonTitle from "../common/Title/CommonTitle";
import { useEffect, useState } from "react";

const TourListDetailsVideoGallery = ({ videos }) => {
  const [videoGallery, setvideoGallery] = useState([]);
  const imgBaseUrl = import.meta.env.VITE_SERVER_URL;

  const { t } = useTranslation();

  useEffect(() => {
    if (Array.isArray(videos)) {
      const urls = videos.map(video => video?.video_url);
      setvideoGallery(urls);
    }
  }, [videos]);

  const [active, setActive] = useState(null);

  useEffect(() => {
    if (videoGallery.length > 0) {
      setActive(videoGallery[0]);
    }
  }, [videoGallery]);

  return (
    <div id="Video" className="mt-8 sm:my-10 xl:my-16">
      {/* title */}
      <div>
        <CommonTitle title={t("videoTitle")} />
      </div>

      {/* video gallery */}
      <div className="w-full flex gap-2 xl:gap-6 mt-5 sm:mt-10 items-stretch">
        {/* preview */}
        <div className="w-3/4 flex">
          {active && (
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              src={`${imgBaseUrl}/${active}`}
            ></video>
          )}
        </div>

        {/* videos */}
        <div className="w-1/4 flex flex-col gap-2 xl:gap-6">
          {videoGallery?.map((video, index) => (
            <div
              className="cursor-pointer"
              key={index}
              onClick={() => setActive(video)}
            >
              <video
                className="object-cover"
                muted
                src={`${imgBaseUrl}/${video}`}
              ></video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourListDetailsVideoGallery;
