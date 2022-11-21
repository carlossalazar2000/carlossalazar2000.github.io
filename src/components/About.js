import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>About me</h1>

          <div className="row center mx-auto mb-5">

            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    src={require("../assets/profile.jpg")}
                    alt="Avatar placeholder"
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <span className="wave">Hello! I am Carlos Salazar. I am a graduate student pursuing a master's degree in Computer Science. 
                      I have gained a sufficient amount of knowledge in software engineering, web development, and mobile app development from my work experience and college coursework.
                      My passions are cloud engineering and mobile app development.
                    </span>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
}}

export default About;