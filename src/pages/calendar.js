import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function CalendarPage() {
    const headingTitle = "Indy YSA Calendar";

    // Preset events
    const [events, setEvents] = useState([
        {
            id:1,
            start: moment().toDate(),
            end: moment().add(1, "hours").toDate(),
            title: "Event 1",
        },
        {
            id:2,
            start: moment().toDate(),
            end: moment().add(1, "days").toDate(),
            title: "Some title",
        },
    ]);

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
