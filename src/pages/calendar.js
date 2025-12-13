import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ysaEvents from "../components/eventsData";

import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

// Helper: convert your YSA events into calendar events
function buildCalendarEvents() {
  const events = [];

  ysaEvents.forEach((e) => {
    if (e.id === 1) {
      // Monthly YSA Meeting – pick next "3rd Saturday" at 1:00 PM
      const base = moment().month(11).year(2025); // e.g., December 2025 for demo
      const thirdSaturday = base
        .startOf("month")
        .day(6 + 14); // 6 = Saturday; +14 -> 3rd Saturday
      const start = thirdSaturday.hour(13).minute(0).toDate();
      const end = thirdSaturday.hour(15).minute(0).toDate();

      events.push({
        id: e.id,
        title: e.title,
        start,
        end,
        allDay: false,
      });
    } else if (e.id === 2) {
      // Book of Mormon Study – pick next Wednesday at 8:30 PM
      const nextWed = moment().day(3); // 3 = Wednesday
      if (nextWed.isBefore(moment())) nextWed.add(1, "week");
      const start = nextWed.hour(20).minute(30).toDate();
      const end = nextWed.hour(21).minute(30).toDate();

      events.push({
        id: e.id,
        title: e.title,
        start,
        end,
        allDay: false,
      });
    } else if (e.id === 3) {
      // Temple Trip – "December 13th 2025", 1–3 PM block
      const start = moment("December 13th 2025 1:00 PM", "MMMM Do YYYY h:mm A").toDate();
      const end = moment("December 13th 2025 3:00 PM", "MMMM Do YYYY h:mm A").toDate();

      events.push({
        id: e.id,
        title: e.title,
        start,
        end,
        allDay: false,
      });
    } else if (e.id === 4) {
      // Caroling – "December 20th 2025", 7–9 PM (example)
      const start = moment("December 20th 2025 7:00 PM", "MMMM Do YYYY h:mm A").toDate();
      const end = moment("December 20th 2025 9:00 PM", "MMMM Do YYYY h:mm A").toDate();

      events.push({
        id: e.id,
        title: e.title,
        start,
        end,
        allDay: false,
      });
    }
  });

  return events;
}

function CalendarPage() {
    const headingTitle = "Indy YSA Calendar";

    // Preset events
    const [events, setEvents] = useState(buildCalendarEvents());

    // user added events
    const handleSelectSlot = ({ start, end }) => {
        const title = window.prompt("What is the event title?");
        if (!title) return;

        const newEvent = {
        id: events.length + 1,
        start,
        end,
        title,
        };

        setEvents((prev) => [...prev, newEvent]);
    };

    //CRUD events

    const handleSelectEvent = (event) => {
        const action = window.prompt(
            `Event: "${event.title}"\nType "d" to delete, or enter a new title to rename:`,
            event.title
        );


        if (action === null) return; //cancelled

        if (action.toLowerCase() === "d") {
            setEvents((prev) => prev.filter((e) => e.id !== event.id));
        }else if (action.trim() !== "") {
            setEvents((prev) =>
                prev.map((e) =>
                    e.id === event.id ? { ...e, title: action.trim() } : e
                )
            );
        }
    };

    return (
        <div className="home">
        <Header title={headingTitle} subtitle="" />

        <div className="calendar-placeholder">
            <div className="App">
                <Calendar
                    localizer={localizer}
                    defaultDate={new Date()}
                    defaultView="month"
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: "80vh" }}
                    selectable={true}              // enable slot selection
                    onSelectSlot={handleSelectSlot} // click/drag empty time => add
                    onSelectEvent={handleSelectEvent} // click event => edit/delete
                />
            </div>
            <p>
                Click a day/time to create an event. Click an existing event to rename
                or delete it.
            </p>
        </div>

        <Footer />
        </div>
    );
}

export default CalendarPage;
