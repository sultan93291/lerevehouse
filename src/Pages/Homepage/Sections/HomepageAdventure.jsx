import ctaBg from '../../../assets/images/cta-bg.jfif';
import { Modal } from '@/components/Modals/Modal';
import TestModal from '@/components/Modals/TestModal';
import { useState } from 'react';
const HomepageAdventure = () => {
  const [open, setOpen] = useState(false);
  return (
    <section
      className="min-h-[750px] flex items-center justify-center"
      style={{
        background: `url(${ctaBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* contents */}
      <div className="bg-primary py-6 px-8 text-white max-w-[640px] ">
        <div className="flex items-center justify-center flex-col gap-5">
          <h2 className="font-editorsNoteNormal text-4xl text-center tracking-wider font-extralight">
            Your adventure starts now
          </h2>
          <p className="font-interTight text-center font-light text-lg">
            At Le Rêve House Adventure, we craft fully bespoke luxury private
            tours and safari itineraries tailored exclusively for you.
          </p>

          <div>
            <div
              onClick={() => setOpen(true)}
              className="block cursor-pointer font-interTight bg-secondary px-8 py-3 rounded-md "
            >
              Start Panning
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
