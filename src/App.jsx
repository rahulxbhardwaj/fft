import "./App.css";
import Header from "../components/header";
import Home from "../components/home.jsx";
import Aboutus from "../components/aboutUs.jsx";
import Courses from "../components/courses.jsx";
import Notes from "../components/notes.jsx";
import { Analytics } from "@vercel/analytics/react";
import Study from '../components/study';
import ProtectedRoute from '../components/ProtectedRoute.jsx'; 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';

export default function App() {
  return (
    <Auth0Provider
      domain= "dev-e8gtczbsvzmakjnf.us.auth0.com"
      clientId= "e6odmsAazSppPbwUNwKvuOrugGpPhj8H"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >

    <Router>
      <Analytics/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/notes" element={<Courses />} />
        <Route path="/notes/:id" element={<Notes />} />
         <Route path="/study" element={<Study />} />
          </Routes>
    </Router>
      </Auth0Provider>
  );
}
