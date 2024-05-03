import React from "react";
import "../styles/home.scss";
import TushikaPhoto from '../public/assets/tushika_fft.jpg';

function App() {
  return (
    <div className="App" class="Home_main">
      <div className="container">
        <div className="content">
          <h1>
            GET <span className="end-sem">END SEM</span> READY With <b><span class="tushika_didi">Tushika Didi</span></b>
          </h1>
          <p class="oneshot_endsem_papers">OneShot Endsem Papers ! !</p>
          <a href="https://www.youtube.com/@15FORTEEN">
            <button className="btn">
              <h5 className="text-2xl">Join IPU Smasher Course</h5>
            </button>
          </a>

        </div>
        <div className="image"> 
          <img src={TushikaPhoto}
            alt="Placeholder image" class="home_page_photo"
          />
          
        </div>
      </div>
      <div className="batch-overview" class="home_page2">
          <h2 class="batch_overview">fifteenforteen</h2>
          <ul class="home_page_batch_1">
              <li>Welcome to Fifteen for teen,</li>
              <li>Elevate Your College Experience</li>
              <li>Embark on a transformative journey where education meets inspiration at Fifteen for teens. We're not just an educational firm; we're architects of your academic success and personal growth.</li>
              <li>🎓 College-Centric Learning: Immerse yourself in meticulously crafted resources tailored for college triumph.</li>
              <li>💡 Innovation in Education: Embrace the future with our pioneering methodologies and cutting-edge approaches.</li>
              <li>🌐 Global Perspectives: Navigate a dynamic curriculum that mirrors the evolving global landscape, preparing you for success on an international scale.</li>
              <li>👥 Community and Collaboration: Connect, collaborate, and thrive alongside like-minded individuals who share your passion for knowledge and growth.</li>
          </ul>
      </div>

    </div>
  );
}

export default App;
