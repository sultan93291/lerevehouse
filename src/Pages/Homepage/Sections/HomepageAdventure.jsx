import ctaBg from "../../../assets/images/cta-bg.jfif";
import { Modal } from "@/components/Modals/Modal";
import TestModal from "@/components/Modals/TestModal";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const HomepageAdventure = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <section className="relative h-[450px] lg:h-[550px] 2xl:min-h-[750px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={ctaBg}
        alt="Adventure call to action background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content Overlay */}
      <div className="relative z-10 bg-primary py-4 md:py-6 md:px-8 text-white px-4 lg:px-8 2xl:px-16 3xl:px-32 w-[300px] md:w-[400px] lg:w-auto lg:max-w-[640px]">
        <div className="flex items-center justify-center flex-col gap-5">
          <h2 className="font-editorsNoteNormal text-2xl lg:text-4xl text-center tracking-wider font-extralight">
            {t("homepageAdventure.title")}
          </h2>
          <p className="font-interTight text-center font-light text-sm lg:text-lg">
            {t("homepageAdventure.description")}
          </p>
          <div>
            <div
              onClick={() => setOpen(true)}
              className="block cursor-pointer font-interTight text-sm lg:text-base bg-secondary px-4 lg:px-8 py-3 rounded-md"
            >
              {t("homepageAdventure.button")}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal open={open} setOpen={setOpen}>
        <TestModal setOpen={setOpen} />
      </Modal>
    </section>
  );
};

export default HomepageAdventure;
