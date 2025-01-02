import React from "react";
import TypedText from "./TypedText";
import myResume from './assets/image/Abdul Raziq MERN STACK RESUME.pdf'

function MainContent() {
  return (
    <>
      <div className="header" id="header">
        <div className="content-inner">
          <p>I'm</p>
          <h1>M.A Abdul Rahman Raziq</h1>
          <TypedText/>
        </div>
      </div>

      <div className="large-btn">
        <div className="content-inner">
          <a className="btn" href={myResume} download="Abdul_Rahman_Raziq.pdf">
            <i className="fa fa-download"></i>Download Resume
          </a>
          <a className="btn" href={myResume} target="_blank">
            <i className="fas fa-eye"></i>Read Resume
          </a>
        </div>
      </div>
    </>
  );
}

export default MainContent;
