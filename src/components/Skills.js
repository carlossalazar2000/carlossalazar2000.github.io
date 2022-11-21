import React, { Component } from "react";

class Skills extends Component {
  render() {
    var skillsList = [
      {
        name: "Java",
        class: "devicon-java-plain"          
      },
      {
        name: "C#",
        class: "devicon-csharp-plain"          
      },
      {
        name: ".NET Core",
        class: "devicon-dotnetcore-plain"          
      },
      {
        name: "React",
        class: "devicon-react-plain"          
      }, 
      {
        name: "JavaScript",
        class: "devicon-javascript-plain"
      },
      {
        name: "Python",
        class: "devicon-python-plain"
      },
      {
        name: "HTML 5",
        class: "devicon-html5-plain"          
      },
      {
        name: "CSS 3",
        class: "devicon-css3-plain"          
      },
      {
        name: "Swift",
        class: "devicon-swift-plain"
      },
      {
        name: "MySQL",
        class: "devicon-mysql-plain"
      },
      {
        name: "Git",
        class: "devicon-git-plain"
      },
      {
        name: "C++",
        class: "devicon-cplusplus-plain"
      },
      {
        name: "C",
        class: "devicon-c-plain"
      },
      {
        name: "R",
        class: "devicon-r-plain"
      }, 
    ]

    var toolsList = [
      {
        name: "Azure",
        class: "devicon-azure-plain"          
      },
      {
        name: "Jira",
        class: "devicon-jira-plain"          
      },
      {
        name: "Docker",
        class: "devicon-docker-plain"          
      },
      {
        name: "AWS",
        class: "devicon-amazonwebservices-plain"
      },
      {
        name: "Android studio",
        class: "devicon-androidstudio-plain"          
      },
      {
        name: "Firebase",
        class: "devicon-firebase-plain"          
      },
      {
        name: "Intellij",
        class: "devicon-intellij-plain"
      },
      {
        name: "Xcode",
        class: "devicon-xcode-plain"
      },
      {
        name: "Github",
        class: "devicon-github-plain"
      },
      {
        name: "MySQL",
        class: "devicon-mysql-plain"
      },
      {
        name: "Google Cloud",
        class: "devicon-googlecloud-plain"
      }, 
    ]

    var skills = skillsList.map(function (skills, i) {
      return (
        <li className="list-inline-item mx-3" key={i}>
          <span>
            <div className="text-center skills-tile">
              <i className={skills.class} style={{ fontSize: "220%" }}>
                <p className="text-center" style={{ fontSize: "30%", marginTop: "4px" }}>
                  {skills.name}
                </p>
              </i>
            </div>
          </span>
        </li>
    )});

    var tools = toolsList.map(function (tools, i) {
      return (
        <li className="list-inline-item mx-3" key={i}>
          <span>
            <div className="text-center skills-tile">
              <i className={tools.class} style={{ fontSize: "220%" }}>
                <p className="text-center" style={{ fontSize: "30%", marginTop: "4px" }}>
                  {tools.name}
                </p>
              </i>
            </div>
          </span>
        </li>
    )});

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">Skills</span>
            </h1>
          </div>

          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
        </div>

        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">Tools/Software</span>
            </h1>
          </div>

          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{tools}</ul>
          </div>
        </div>
      </section>
)}}

export default Skills;