import React, { Component } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Experience extends Component {
  render() {
    var experienceList = [
      {
        company: "PairSelfcare",
        title: "Front-End Developer",
        years: "February 2022 - present",
        icon: "fab fa-react experience-icon",
        notableTasks: [
          "◦ Developed an e-commerce website for connecting clients to providers and providing a platform to promote various self-care services using ReactJS, .NET Core, Kubernetes, and native Azure services.\n",
          "◦ Enabled login authentication using the KeyCloak IDM to allow authenticated users to schedule appointments for selected services.\n",
          "◦ Enabled faster software delivery by implementing CI/CD pipelines which automatically built, tested, and deployed front-end changes to Kubernetes.\n",
          "◦ Implemented a REST API using .NET Core, CosmosDB, and Azure Storage to store and modify service provider data."
        ],
        technologies: [
          "REST API",
          ".NET Core",
          "React",
          "JavaScript",
          "Azure DevOps",
          "Kubernetes",
          "Keycloak IDM",
        ]
      },
      {
        company: "Telit",
        title: "Research and Development Software Engineer Intern",
        years: "May 2021 - November 2021",
        icon: "fab fa-java experience-icon",
        notableTasks: [
          "◦ Eliminated the import of incorrect CSV files by creating a Java utility program utilizing Spring Boot to sort these incorrect CSV files from correct CSV files, which resolved the issue of unsuccessful AT&T device imports.\n",
          "◦ Integrated code coverage using the JaCoCo library in various microservices that are generated from JHipster and utilized the Spring framework, which improved the overall quality of the code base.\n",
          "◦ Enabled manual test cases using testing frameworks such as JUnit and Mockito to produce a code coverage of 70% to test if functionality within the microservices meets the necessary requirements.\n"
        ],
        technologies: [
          "Java",
          "Unit Tests",
          "Spring",
          "Spring Boot",
          "JaCoCo",
          "JUnit",
          "Mockito",
          "JHipster"
        ]
      },
      {
        company: "School District of Palm Beach County",
        title: "Intern/End User Support Team",
        years: "June 2018 - August 2018",
        icon: "fab fa-windows experience-icon",
        notableTasks: [
          "◦ Administered and updated district devices that operated under a variety of OS including Windows, Mac OS, iOS, and Linux.\n",
          "◦ Collaborated with specialists on software applications valued by the district that includes Ivanti, Microsoft System Center Configuration Manager, and Jamf.\n"
        ],
        technologies: [
          "IT",
          "Ivanti",
          "Microsoft System Center Configuration Manager",
          "Jamf",
          "Windows",
          "Mac OS",
          "Linux"
        ]
      }
    ]

    var work = experienceList.map(function (work, i) {
      const technologies = work.technologies;

      var tech = technologies.map((technology, i) => {
        return (
          <Badge pill className="experience-badge mr-2 mb-2" key={i}>
            {technology}
          </Badge>
        );
      });

      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={work.years}
          iconStyle={{
            background: "#AE944F",
            color: "#fff",
            textAlign: "center",
          }}
          icon={<i className={work.icon}></i>}
          key={i}
        >

          <h3 className="vertical-timeline-element-title" style={{ textAlign: "left" }}>
            {work.title}
          </h3>

          <h4 className="vertical-timeline-element-subtitle" style={{ textAlign: "left" }}>
            {work.company}
          </h4>

          {work.notableTasks.map((notableTasks, i) => {
            return (
              <p className="vertical-timeline-element-subtitle" style={{ textAlign: "left", fontSize: "8pt"}} key={i}>
                {notableTasks}
              </p>
            );
          })}
          
          <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
        </VerticalTimelineElement>
      );
    });
    
    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                Work Experience
              </span>
            </h1>
          </div>
        </div>

        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={<i className="fas fa-hourglass-start mx-auto experience-icon"></i>}
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;