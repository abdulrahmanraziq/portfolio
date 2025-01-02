import React from "react";
import { useFormik } from "formik";
import toast from "react-hot-toast";

const socialLink = {
  socialLinks: [
    {
      platform: "LinkedIn",
      iconClass: "fab fa-linkedin-in",
      url: "https://www.linkedin.com/in/abdulrahman-raziq-168bb020b/",
    },
    {
      platform: "GitHub",
      iconClass: "fab fa-github-square",
      url: "https://github.com/abdulrahmanraziq",
    },
  ],
};
function Contact() {
  return (
    <>
      <div className="contact" id="contact">
        <div className="content-inner">
          <div className="content-header">
            <h2>Contact</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="contact-info">
                <p>
                  <i className="fa fa-user"></i>M.A Abdul Rahman Raziq
                </p>
                <p>
                  <i className="fa fa-tag"></i>Full Stack Developer, Front End
                  Developer
                </p>
                <p>
                  <i className="fa fa-envelope"></i>
                  <a href="mailto:abdulrahmanraziq548@gmail.com">
                    abdulrahmanraziq548@gmail.com
                  </a>
                </p>
                <p>
                  <i className="fa fa-phone"></i>
                  <a href="tel:9840548834">9840548834</a>
                </p>
                <p>
                  <i className="fa fa-map-marker"></i>NO 6A MANDAPAM ROAD
                  WILDFLOWER APARTMENT 1-C A, BLOCK KILPAUK CHENNAI - 10.
                </p>
                <div className="social">
                  {socialLink.socialLinks.map((item, index) => {
                    return (
                      <a
                        className="btn"
                        href={item.url}
                        title={item.platform}
                        key={index}
                        target="_blank"
                      >
                        <i className={item.iconClass}></i>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.200354112765!2d80.22789807795236!3d13.08648515433752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265d3578fc673%3A0xb810096da4d3512a!2sWild%20Flower%20Apartments!5e0!3m2!1sen!2sin!4v1734968243423!5m2!1sen!2sin"
                  width="350"
                  height="450"
                  style={{ border: "0" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
