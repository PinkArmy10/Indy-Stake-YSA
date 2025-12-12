import { useState } from "react";

const EventCard = ({ event }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="meeting-card">
      <h3>{event.title}</h3>
      <p>{event.date}</p>
      <p>{event.location}</p>

      <button onClick={handleOpenModal}>More Info</button>

      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h4>Details</h4>
            <p>{event.address}</p>
            <p>{event.description}</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCard;
