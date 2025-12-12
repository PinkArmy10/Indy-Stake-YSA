import React, { useState } from 'react';

function Carousel({ items = null }) {
  const [current, setCurrent] = useState(0);

  const slides = Array.isArray(items) && items.length ? items : [];

  const getSrc = (slide) => slide.image ?? slide.url ?? '';
  const getTitle = (slide) => slide.title ?? '';
  const getDescription = (slide) => slide.description ?? slide.title ?? slide.url ?? '';

  const prevSlide = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const nextSlide = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  if (!slides.length) {
    return <div>No slides available</div>;
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative">
        {/* Fixed-height image container so layout doesn't jump between slides */}
        <div className="w-full overflow-hidden rounded relative">
          <img
            src={getSrc(slides[current])}
            alt={getTitle(slides[current]) || `Slide ${current + 1}`}
            className="w-full h-full object-cover block"
          />

          {/* Controls anchored to the image container so they don't shift */}
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            &#8592;
          </button>
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            &#8594;
          </button>
        </div>
      </div>

      {/* Description below image - reserve vertical space to avoid shifting */}
      <div className="mt-3 text-center text-gray-700 min-h-[3rem]">
        {getDescription(slides[current])}
      </div>
    </div>
  );
}

export default Carousel;
