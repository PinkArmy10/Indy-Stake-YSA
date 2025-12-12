import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Make the container relative so the panel can be absolutely positioned
    <div className="border-b border-gray-200 relative">
      <button
        className="w-full text-left py-4 px-6 text-lg font-medium text-gray-700 hover:bg-gray-100 focus:outline-none flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`accordion-panel-${title.replace(/\s+/g, '-')}`}
      >
        <span>{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>

      {/* Render panel as an overlay so it doesn't push other content */}
      {isOpen && (
        <div
          id={`accordion-panel-${title.replace(/\s+/g, '-')}`}
          className="absolute left-0 top-full mt-2 w-full bg-white border rounded shadow-md px-6 py-4 text-gray-600 z-20 max-h-64 overflow-auto"
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
