// src/pages/CalendarTest.js
import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export default function CalendarTest() {
  const [events] = useState([
    {
      id: 1,
      start: moment().toDate(),
      end: moment().add(1, "hours").toDate(),
      title: "Test event",
    },
  ]);

  return (
    <div style={{ paddingTop: 80 }}>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "80vh" }}
      />
    </div>
  );
}
