import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { db } from "../firebase";
import { collection, onSnapshot, addDoc, deleteDoc, doc } from "firebase/firestore";

const localizer = momentLocalizer(moment);

export default function FirebaseCalendar() {
  const headingTitle = "Indy YSA Calendar";
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "events"), (snapshot) => {
      const firebaseEvents = [];
      snapshot.docs.forEach((doc) => {
        const data = doc.data();
        firebaseEvents.push({
          id: doc.id,
          title: data.title || "Untitled",
          start: data.start?.toDate ? data.start.toDate() : new Date(data.start),
          end: data.end?.toDate ? data.end.toDate() : new Date(data.end),
          allDay: data.allDay || false,
        });
      });
      setEvents(firebaseEvents);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleSelectSlot = async ({ start, end }) => {
    const title = window.prompt("What is the event title?");
    if (!title) return;
    try {
      await addDoc(collection(db, "events"), {
        title,
        start,
        end,
        allDay: false,
      });
    } catch (error) {
      console.error("Failed to add event:", error);
      alert("Failed to add event. Check console for details.");
    }
  };

  const handleSelectEvent = async (event) => {
  const action = window.prompt(
    `Event: "${event.title}"\nType "d" to delete, or enter a new title to rename:`,
    event.title
  );
  if (action === null) return;
  
  if (action.toLowerCase() === "d") {
    try {
      await deleteDoc(doc(db, "events", event.id));
      // Event auto-removes via onSnapshot
    } catch (error) {
      console.error("Failed to delete event:", error);
      alert("Failed to delete event.");
    }
  } else if (action.trim() !== "") {
    // Update implementation would need updateDoc import
    console.log("Update not implemented yet");
  }
};

  if (loading) {
    return (
      <div className="home">
        <Header title={headingTitle} />
        <div className="calendar-placeholder">
          <div>Loading calendar events...</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="home">
      <Header title={headingTitle} />
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
            selectable={true}
            onSelectSlot={handleSelectSlot}
            onSelectEvent={handleSelectEvent}
          />
        </div>
        <div>
          <p>Click a day/time to create an event. Click an existing event to rename or delete it.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
