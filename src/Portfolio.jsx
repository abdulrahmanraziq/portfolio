import React, { useState } from "react";
import webdesigning1 from "../src/assets/image/webdesigning1.jpg";
import webdesigning2 from "../src/assets/image/webdesigning2.jpg";
import webdesigning3 from "../src/assets/image/webdesigning3.jpg";
import frontEndDevelopment1 from "../src/assets/image/FrontEnddevelopment1.jpg";
import frontEndDevelopment2 from "../src/assets/image/FrontEnddevelopment2.jpg";
import mern1 from "../src/assets/image/mern1.jpg";
import mern2 from "../src/assets/image/mern2.jpg";
import mern3 from "../src/assets/image/mern3.jpg";
import mern4 from "../src/assets/image/mern4.jpg";

function Portfolio() {
  const [filter, setFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      category: "web-designing",
      title: "Cobra Sports",
      img: webdesigning1,
      isGitHub: false,
      isUrl: false,
    },
    {
      id: 2,
      category: "web-designing",
      title: "Civil Service India",
      img: webdesigning2,
      isGitHub: false,
      isUrl: false,
    },
    {
      id: 3,
      category: "web-designing",
      title: "FoodHub Carrers",
      img: webdesigning3,
      isGitHub: false,
      isUrl: false,
    },
    {
      id: 4,
      category: "front-end-devlopment",
      title: "Glencore",
      img: frontEndDevelopment1,
      isGitHub: false,
      isUrl: false,
    },
    {
      id: 5,
      category: "front-end-devlopment",
      title: "Strada Garnishment",
      img: frontEndDevelopment2,
      isGitHub: false,
      isUrl: false,
    },
    {
      id: 6,
      category: "mern",
      title: "News Apps",
      img: mern1,
      isGitHub: true,
      isUrl: true,
      githubUrl: "https://github.com/abdulrahmanraziq/capstoneRealTimeNewsApp",
      url: "https://6704f1c4db196bf95b4dc46e--thriving-squirrel-8d49f9.netlify.app/login",
    },
    {
      id: 7,
      category: "mern",
      title: "CRM Application",
      img: mern2,
      isGitHub: true,
      isUrl: true,
      githubUrl: "https://github.com/abdulrahmanraziq/crm",
      url: "https://thunderous-cucurucho-00682f.netlify.app/",
    },
    {
      id: 8,
      category: "mern",
      title: "Socializing",
      img: mern3,
      isGitHub: true,
      isUrl: true,
      githubUrl: "https://github.com/abdulrahmanraziq/socializing-app",
      url: "https://stellular-blancmange-9ba626.netlify.app/signin",
    },
    {
      id: 9,
      category: "mern",
      title: "flight-app",
      img: mern4,
      isGitHub: true,
      isUrl: true,
      githubUrl: "https://github.com/abdulrahmanraziq/flight-booking",
      url: "https://phenomenal-genie-c3b976.netlify.app/signin",
    },
  ];

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <>
      <div className="portfolio" id="portfolio">
        <div className="content-inner">
          <div className="content-header">
            <h2>Projects</h2>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul id="portfolio-flters">
                <li
                  onClick={() => setFilter("all")}
                  className={filter === "all" ? "filter-active" : ""}
                >
                  All
                </li>
                <li
                  onClick={() => setFilter("web-designing")}
                  className={filter === "web-designing" ? "filter-active" : ""}
                >
                  Web Designing
                </li>
                <li
                  onClick={() => setFilter("front-end-devlopment")}
                  className={
                    filter === "front-end-devlopment" ? "filter-active" : ""
                  }
                >
                  Front End Development
                </li>
                <li
                  onClick={() => setFilter("mern")}
                  className={filter === "mern" ? "filter-active" : ""}
                >
                  Mern Stack Development
                </li>
              </ul>
            </div>
          </div>
          <div className="row portfolio-container">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`col-lg-4 col-md-6 portfolio-item ${item.category}`}
              >
                <div className="portfolio-wrap">
                  <figure>
                    <img
                      src={item.img}
                      className="img-fluid"
                      alt={item.title}
                    />
                    {item.isGitHub && item.isUrl && (
                      <>
                        <a
                          href={item.githubUrl}
                          data-lightbox="portfolio"
                          data-title={item.title}
                          className="link-preview"
                          title="Preview"
                        >
                          <i className="fa fa-eye"></i>
                        </a>
                        <a
                          href={item.url}
                          className="link-details"
                          title="More Details"
                        >
                          <i className="fa fa-link"></i>
                        </a>
                      </>
                    )}
                    <a className="portfolio-title" href="#">
                      {item.title} <span>{item.category}</span>
                    </a>
                  </figure>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
