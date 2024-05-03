import React from 'react';
import '../styles/aboutus.scss';
 

const AboutUs = () => {
  return (
    <section className="section-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2 className="section-title-left">YOU GROW WE GROW</h2>
          </div>
          <div className="col-md-8">
            <div className="home-container">
              {/* Profile Cards */}
              {/* Profile 1 */}
              <div className="profile-card">
                <div className="img">
                  <img src={Vatsal} alt="Doctor" />
                </div>
                <div className="caption">
                  <h3>Vatsal Mishra</h3>
                  <p>Python Developer</p>
                  <div className="social-links">
                    <a
                      href="https://github.com/Vatsal212005"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://3-d-portfolio-xmpn.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-chrome"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Add more profile cards here */}

            </div>
          </div>
        </div>

        {/* Heading for Subject Experts */}
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">Our Subject Experts</h2>
          </div>
        </div>

        {/* Profile Cards for Subject Experts */}
        <div className="row justify-content-center">
          {/* Profile 1 */}
          <div className="col-md-2">
            <div className="profile-card">
              <div className="img">
                <img src={Vatsal} alt="Maths Faculty" />
              </div>
              <div className="caption">
                <h3>Vatsal Mishra</h3>
                <p>Maths Expert </p>
              </div>
            </div>
          </div>

          {/* Add more profile cards here */}

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
