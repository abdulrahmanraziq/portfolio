import React from "react";
import profileImage from "./assets/image/abdulrahmanraziq-profile.jpg";
import Skills from "./Skills";
import myResume from './assets/image/Abdul Rahman Raziq MERN STACK RESUME.pdf'
function About() {
  return (
    <>
      <div className="about" id="about">
        <div className="content-inner">
          <div className="content-header">
            <h2>About Me</h2>
          </div>
          <div className="row align-items-center mb-5">
            <div className="col-md-6 col-lg-5">
              <img src={profileImage} alt="Image" />
            </div>
            <div className="col-md-6 col-lg-7">
              <p>
                I am an avid user experience specialist skilled in interaction
                designing, information architecture, usability and development.
                I have experienced working in all stages of the product life
                cycle, from conception of design, development and validation. I
                work well with cross functional, collaborative teams and I am
                effective in bringing user-centered design methods to the table.
                I enjoy designing and developing simple and usable experiences.
              </p>
              <a
                className="btn"
                href={myResume}
                download="Abdul_Rahman_Raziq.pdf"
              >
                <i className="fa fa-download"></i>Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
