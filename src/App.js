import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Events from "./pages/events";
import Contact from "./pages/contact";

//import Calendar from "./pages/calendar";
import Calendar from "./pages/FirebaseCalendar";

import Layout from "./components/Layout";
import "./App.css";


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/calendar" element={<Calendar />} />
      </Route>
    </Routes>
  );
}

export default App;
