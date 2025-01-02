import React from "react";
const educationData = {
  title: "Education",
  education: [
    {
      start_date: "01-Apr-2012",
      end_date: "01-Apr-2016",
      degree: "Bachelor Degree",
      description:
        "Bachelor Degree in (EEE) in S.A Engineering College with 6.94 CGPA.",
    },
    {
      start_date: "01-Mar-2011",
      end_date: "16-Mar-2012",
      degree: "High School",
      description:
        "HSC with 84% from Seetha Kingston House Matriculation Higher Secondary School.",
    },
    {
      start_date: "01-Mar-2010",
      end_date: "19-Mar-2011",
      degree: "SSLC School",
      description:
        "SSLC with 81% from Seetha Kingston House Matriculation Higher Secondary School.",
    },
  ],
};
function Education() {
  return (
    <>
      <div className="education" id="education">
        <div className="content-inner">
          <div className="content-header">
            <h2>{educationData.title}</h2>
          </div>
          <div className="row align-items-center">
            {educationData.education.map((edu, index) => (
              <div className="col-md-12" key={index}>
                <div className="edu-col">
                  <span>
                    {edu.start_date} <i>to</i> {edu.end_date}
                  </span>
                  <h3>{edu.degree}</h3>
                  <p>{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
