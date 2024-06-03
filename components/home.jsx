import React, { useState, useEffect } from "react";
import "../styles/home.scss";
import TushikaPhoto from '../public/assets/tushika_fft.jpg';
import Fft_logo from '../public/assets/fft_logo.jpg';

function App() {
  const [studentCount, setStudentCount] = useState(1700);

  useEffect(() => {
    if (studentCount < 2000) {
      const interval = setInterval(() => {
        setStudentCount(prevCount => prevCount + 1);
      }, 10);

      return () => clearInterval(interval);
    }
  }, [studentCount]);

  return (
    <div className="App" class="Home_main">

      <div className="container">
        <div className="content">
          <h1>
            GET <span className="end-sem">END SEM</span> READY With <b><span class="tushika_didi">Tushika Didi</span></b>
          </h1>
          <p class="oneshot_endsem_papers">Complete Syllabus in just 5-6 Hr</p>
          <a href="https://forms.gle/mvzawUQX9rNfsmrU7">
            <button className="btn">
              <h5 className="text-4xl">Join IPU Smasher Series</h5>
            </button>
          </a>
           <p class="oneshot_endsem_papers">with 2 Bonus endsem solutions</p>
        </div>
        <div className="image"> 
          <img src={TushikaPhoto} alt="Placeholder image" class="home_page_photo" />
        </div>
      </div>

      <div className="batch-overview" class="home_page2">
        <h2 class="batch_overview">fifteenforteen</h2>
        <ul class="home_page_batch_1">
          <li>Welcome to College Journey</li>
          <li>Elevate: Personal Growth</li>
          <li>Transformative: Education-Inspiration Blend</li>
          <li>College-Centric: Tailored Resources</li>
          <li>Innovation: Cutting-Edge Methods</li>
          <li>Global Perspectives: Dynamic Curriculum</li>
          <li>Community: Collaborative Thrive</li>
        </ul>

        <div className="home_page_2">
          <h1 class="our_students">Our Students are from :-</h1>
          <ul class="list">
            <li>ADGIT</li>
            <li>VIPS</li>
            <li>GNIT</li>
            <li>BPIT</li>
            <li>GTBIT</li>
            <li>MAIT</li>
            <li>MSIT</li>
            <li>USICT</li>
            <li>TRINITY</li>
            <li>IIMT</li>
            <li>HMR</li>
            <li>DTC</li>
            <li>USAR</li>
            <li>JIMS</li>
            <li>SBIT</li>
            <li>KCC</li>
          </ul>
          <p className="animate__animated animate__fadeInUp" class="student_inc">A growing community of {studentCount}+ students</p>
        </div>
      </div>

    </div>
  );
}

export default App;
