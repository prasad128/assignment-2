import React from "react";
import { IoChevronForwardSharp, IoChevronBackSharp } from "react-icons/io5";
// import { motion, AnimatePresence } from "framer-motion";

function Carousel() {
  const [activeSlide, setActiveSlide] = React.useState(0);

  React.useEffect(() => {
    const slideInterval = setInterval(() => {
      if (activeSlide > 2) {
        setActiveSlide((activeSlide) => activeSlide - 3);
      } else {
        setActiveSlide((activeSlide) => activeSlide + 1);
      }
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [activeSlide]);

  const forwardSlide = () => {
    if (activeSlide === 3) {
      setActiveSlide(0);
    } else {
      setActiveSlide((activeSlide) => activeSlide + 1);
    }
  };

  const backwardSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(3);
    } else {
      setActiveSlide((activeSlide) => activeSlide - 1);
    }
  };

  return (
    <div className="px-3 pt-2 pb-3 space-y-2 bg-white shadow-2xl">
      <div className="text-xl tracking-wide text-gray-500 uppercase">
        Announcements
      </div>
      <div className="flex items-center justify-between space-x-4">
        <div
          onClick={backwardSlide}
          className="p-1.5 text-xl font-bold text-gray-500 bg-gray-300 rounded-full active:border-yellow-500 border hover:text-yellow-500 active:text-yellow-600 cursor-pointer"
        >
          <IoChevronBackSharp />
        </div>
        <div className="flex-grow h-32 overflow-hidden">
          <>
            {activeSlide >= 0 && (
              <Slider
                setActiveSlide={setActiveSlide}
                activeSlide={activeSlide}
              />
            )}
          </>
        </div>
        <div
          onClick={forwardSlide}
          className="p-1.5 text-xl text-gray-500 bg-gray-300 rounded-full active:border-yellow-500 border hover:text-yellow-500 active:text-yellow-600 cursor-pointer"
        >
          <IoChevronForwardSharp />
        </div>
      </div>
    </div>
  );
}

const Slider = ({ activeSlide }) => {
  return activeSlide === 0 ? (
    <Image url="https://via.placeholder.com/600/d32776" />
  ) : activeSlide === 1 ? (
    <Image url="https://via.placeholder.com/600/92c952" />
  ) : activeSlide === 2 ? (
    <Image url="https://via.placeholder.com/600/474645" />
  ) : activeSlide === 3 ? (
    <Image url="https://via.placeholder.com/600/54176f" />
  ) : null;
};

const Image = ({ url }) => {
  return (
    <img
      // key="https://via.placeholder.com/600/d32776"
      // initial={{ x: 300, opacity: 0 }}
      // animate={{ x: 0, opacity: 1, transitionDuration: 4 }}
      // exit={{ x: -300, opacity: 0 }}
      className="object-cover object-center w-full h-full origin-right border rounded-lg shadow-md"
      src={url}
      alt="json-photos"
    />
  );
};

export default Carousel;
