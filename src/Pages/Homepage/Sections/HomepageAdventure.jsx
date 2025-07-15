import ctaBg from '../../../assets/images/cta-bg.jfif';
import { Modal } from '@/components/Modals/Modal';
import TestModal from '@/components/Modals/TestModal';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const HomepageAdventure = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <section
      className="h-[450px] lg:h-[550px] 2xl:min-h-[750px] flex items-center justify-center"
      style={{
        background: `url(${ctaBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* content */}
      <div className="bg-primary py-4 md:py-6 md:px-8 text-white px-4 lg:px-8 2xl:px-16 3xl:px-32 w-[300px] md:w-[400px] lg:w-auto lg:max-w-[640px]">
        <div className="flex items-center justify-center flex-col gap-5">
          <h2 className="font-editorsNoteNormal text-2xl lg:text-4xl text-center tracking-wider font-extralight">
            {t('homepageAdventure.title')}
          </h2>
          <p className="font-interTight text-center font-light text-sm lg:text-lg">
            {t('homepageAdventure.description')}
          </p>
          <div>
            <div
              onClick={() => setOpen(true)}
              className="block cursor-pointer font-interTight text-sm lg:text-base bg-secondary px-4 lg:px-8 py-3 rounded-md"
            >
              {t('homepageAdventure.button')}
            </div>
          </div>
        </div>
      </div>

      <Modal open={open} setOpen={setOpen}>
        <TestModal setOpen={setOpen} />
      </Modal>
    </section>
  );
};

export default HomepageAdventure;
