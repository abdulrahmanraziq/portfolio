import React from "react";

const skillsData = {
  frontEnd: [
    { category: "HTML5", percentage: 95 },
    { category: "CSS3", percentage: 95 },
    { category: "Bootstrap (3, 4, 5)", percentage: 95 },
    { category: "Javascript", percentage: 85 },
    { category: "Angular", percentage: 85 },
    { category: "React JS", percentage: 85 },
  ],
  BackEnd: [{ category: "Node JS", percentage: 70 }],
  DataBase: [
    { category: "Mongo DB", percentage: 70 },
    { category: "SQL", percentage: 70 },
  ],
};

function Skills() {
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="skills">
          <h4 className="mb-4">Front-End Skills</h4>
          {skillsData.frontEnd.map((skill, index) => (
            <React.Fragment key={index}>
              <div className="skill-name">
                <p>{skill.category}</p>
                <p>{skill.percentage}%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={skill.percentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="col-md-4">
        <div className="skills">
          <h4 className="mb-4">Back-End Skills</h4>
          {skillsData.BackEnd.map((skill, index) => (
            <React.Fragment key={index}>
              <div className="skill-name">
                <p>{skill.category}</p>
                <p>{skill.percentage}%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={skill.percentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="col-md-4">
        <div className="skills">
          <h4 className="mb-4">Database Skills</h4>
          {skillsData.DataBase.map((skill, index) => (
            <React.Fragment key={index}>
              <div className="skill-name">
                <p>{skill.category}</p>
                <p>{skill.percentage}%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={skill.percentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
