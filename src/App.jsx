import "./App.css";
import Header from "../components/header";
import Home from "../components/home.jsx";
import Aboutus from "../components/aboutUs.jsx";
import Courses from "../components/courses.jsx";
import Notes from "../components/notes.jsx";
import { Analytics } from "@vercel/analytics/react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Analytics/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/notes" element={<Courses />} />
        <Route path="/notes/:id" element={<Notes />} />
      </Routes>
    </Router>
  );
}
