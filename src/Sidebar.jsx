import React, {useState} from "react";
import profileImage from "./assets/image/abdulrahmanraziq-profile.jpg";

const sideBarData = {
  profileImage: profileImage,
  header: "My Portfolio",
  navigation: [
    { id: "header", label: "Home", iconClass: "fa fa-home" },
    { id: "about", label: "About", iconClass: "fa fa-address-card" },
    { id: "experience", label: "Experience", iconClass: "fa fa-star" },
    { id: "service", label: "Skills", iconClass: "fa fa-tasks" },
    { id: "portfolio", label: "Projects", iconClass: "fa fa-file-archive" },
    { id: "contact", label: "Contact", iconClass: "fa fa-envelope" },
  ],
  socialLinks: [
    {
      href: "https://www.linkedin.com/in/abdulrahman-raziq-168bb020b/",
      iconClass: "fab fa-linkedin-in",
      title: "LinkedIn",
    },
    {
      href: "https://github.com/abdulrahmanraziq",
      iconClass: "fab fa-github-square",
      title: "GitHub",
    },
  ],
};
function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-header">
          <img src={sideBarData.profileImage} alt="Profile" />
        </div>
        <div className="sidebar-content">
          <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <a href="#" className="navbar-brand">
              {sideBarData.header}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleNavbar}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${
                isCollapsed ? "" : "show"
              }`}
              id="navbarCollapse"
            >
              <ul className="nav navbar-nav">
                {sideBarData.navigation.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <a className="nav-link" href={`#${item.id}`}>
                      <i className={item.iconClass}></i> {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
        <div className="sidebar-footer">
          {sideBarData.socialLinks.map((item, index) => (
            <a
              href={item.href}
              key={index}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={item.iconClass}></i>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
