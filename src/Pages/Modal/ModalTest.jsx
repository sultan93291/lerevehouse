import { useState } from "react";
import { Modal } from "@/components/Modals/Modal";
import WishListModal from "@/components/Modals/WishListModal";
import RecomendedAttractionModal from "@/components/Modals/RecomendedAttractionModal";
import StartYourJourney from "@/components/Modals/StartYourJourney";

const ModalTest = () => {
  const [wishListOpen, setWishListOpen] = useState(false);
  const [recommendedOpen, setRecommendedOpen] = useState(false);

  return (
    <div className="py-56">
      {/* WishListModal */}
      <WishListModal
        open={wishListOpen}
        setOpen={setWishListOpen}
        onSpeakToExpertClick={() => {
          setWishListOpen(false);
          setRecommendedOpen(true);
        }}
      />

      {/* RecomendedAttractionModal */}
      <Modal open={recommendedOpen} setOpen={setRecommendedOpen}>
        <StartYourJourney setOpen={setRecommendedOpen} />
      </Modal>

      {/* Button to open WishListModal */}
      <div className="flex text-center justify-center mt-5 w-full">
        <button
          onClick={() => setWishListOpen(true)} // Open WishListModal on button click
          className="text-[#FFF] text-base bg-[#004265] font-semibold py-4 px-8 md:w-[422px] w-[90%]"
        >
          Open Wishlist
        </button>
      </div>
    </div>
  );
};

export default ModalTest;
