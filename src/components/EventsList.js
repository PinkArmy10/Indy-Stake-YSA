import EventCard from "./EventsCard";
import events from "./eventsData";

const EventList = () => {
    return (
      <div className="meetings_container">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    );
};

export default EventList;