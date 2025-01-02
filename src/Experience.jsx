import React from "react";
const experienceData = {
  title: "Experience",
  experience: [
    {
      startDate: "01-Apr-2016",
      endDate: "12-Sep-2017",
      company: "Tiscon Weblogic Solutions",
      location: "Chennai",
      role: "Web Designer",
      description:
        "Web Development using HTML 5, CSS3, Javascript, Bootstrap 3 and SEO.",
    },
    {
      startDate: "15-Sept-2017",
      endDate: "12-Feb-2020",
      company: "Touch2Success or (Foodhub)",
      location: "Chennai",
      role: "Web Designer",
      description:
        "Worked on nearly 100+ responsive website using HTML5, CSS3, Javascript, Bootstrap 3 and Photoshop", 
    },
    {
      startDate: "15-Feb-2020",
      endDate: "20-Nov-2021",
      company: "Cognizant Pvt LTD",
      location: "Chennai",
      role: "Front End Developer",
      description:
        "Web Development using HTML5, CSS3, Javascript, Bootstrap 3, Bootstrap 4, Angular 8+, Unit Test, View Script",
    },
    {
      startDate: "21-Nov-2021",
      endDate: "Present",
      company: "Wipro",
      location: "Chennai",
      role: "Front End Developer",
      description:
        "Web Development using HTML5, CSS3, Javascript, Fabricjs Bootstrap 4, Bootstrap 5, Angular version 14+ to the latest version and Rxjs and Ngrx Basic.",
    },
  ],
};
function Experience() {
  return (
    <>
      <div className="experience" id="experience">
        <div className="content-inner">
          <div className="content-header">
            <h2>{experienceData.title}</h2>
          </div>
          <div className="row align-items-center">
            {experienceData.experience.map((exp, index) => (
              <div className="col-md-6" key={index}>
                <div className="exp-col">
                  <span>
                    {exp.startDate} <i>to</i> {exp.endDate}
                  </span>
                  <h3>{exp.company}</h3>
                  <h4>{exp.location}</h4>
                  <h5>{exp.role}</h5>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
