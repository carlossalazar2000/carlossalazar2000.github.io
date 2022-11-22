import React, { Component } from "react";
import recipeMeetsYouImage from "../assets/recipeMeetsYou.JPG"
import rakAppImage from "../assets/rakApp.JPG"
import venditShoppingAppImage from "../assets/venditShoppingApp.JPG"
import businessSearchAppImage from "../assets/businessSearchApp.JPG"
import divocImage from "../assets/divoc.JPG"
import encryptionImage from "../assets/encryptionProject.JPG"

class Projects extends Component {
  render() {
    var projectsList = [
      {
        title: "Recipe Meets You Website",
        description: "Recipe Meets You is a website designed to tackle the problem people face by allowing them to be able to use ingredients in there household to find recipes in one central web application. The user will also be safe from there allergies and provided new ideas for creating delicious meals. This website is built using HTML, CSS, and JavaScript, and utilizes Google's NoSQL Database Firebase to store user information.",
        image: recipeMeetsYouImage,
        url: "https://carlossalazar2000.github.io/Recipe-Meets-You/index.html",
        youtubeUrl: "https://www.youtube.com/watch?v=LVwHrz1mdSc",
        technologies: [
          {
            name: "HTML 5",
            class: "devicon-html5-plain"          
          },
          {
            name: "CSS 3",
            class: "devicon-css3-plain"          
          },
          {
            name: "JavaScript",
            class: "devicon-javascript-plain"
          },
          {
            name: "Firebase",
            class: "devicon-firebase-plain"          
          }
        ]
      },

      {
        title: "RAKApp",
        description: "RAKApp is a mobile application for the 101st Airborne Division in the United States Air Force. RAKApp is a centralized communication and information hub that is built using React Native and deployed using AWS and Expo CLI. Information is hosted on Google's NoSQL Database Firebase and Strapi CMS. RAKApp received the Judge's Award for best project in the Department of Electrical Engineering and Computer Science at FAU's Senior Design Showcase in Fall 2021.",
        image: rakAppImage,
        url: "https://www.fau.edu/engineering/senior-design/projects/fall2021/rakapp/",
        youtubeUrl: "",
        technologies: [
          {
            name: "React",
            class: "devicon-react-plain"          
          },
          {
            name: "JavaScript",
            class: "devicon-javascript-plain"
          },
          {
            name: "AWS",
            class: "devicon-amazonwebservices-plain"          
          },
          {
            name: "Firebase",
            class: "devicon-firebase-plain"          
          }
        ]
      },

      {
        title: "Vendit Shopping App",
        description: "Vendit is a shopping application that allows users to browse through an inventory of drones and purchase any drones they want. Vendit is built using Android Java and uses Google's NoSQL Database Firebase to host user information.",
        image: venditShoppingAppImage,
        url: "https://github.com/carlossalazar2000/Vendit-Shopping-App",
        youtubeUrl: "https://www.youtube.com/watch?v=IkCcx3LDFB0",
        technologies: [
          {
            name: "Java",
            class: "devicon-java-plain"
          },
          {
            name: "Firebase",
            class: "devicon-firebase-plain"          
          }
        ]
      },

      {
        title: "Business Search Mobile Application",
        description: "The Business Search App allows users to search for businesses based on the business name, type, or location. The Business Search App is built using Android Java and uses the Yelp Fusion API that contains content and reviews from millions of businesses. The Business Search App also uses Google's NoSQL Database Firebase to store all user information.",
        image: businessSearchAppImage,
        url: "https://github.com/carlossalazar2000/Business-Search-Application",
        youtubeUrl: "https://www.youtube.com/watch?v=mxosKae4Pc0",
        technologies: [
          {
            name: "Java",
            class: "devicon-java-plain"
          },
          {
            name: "Firebase",
            class: "devicon-firebase-plain"          
          }
        ]
      },

      {
        title: "DIVOC Forum",
        description: "DIVOC Forum is a website that allows people to connect with one another from around the world. This project was made during the COVID-19 pandemic so the aim for this forum is to connect people and share their experiences with one another. DIVOC Forum is built with HTML, CSS, and Javascript, and uses Google's NoSQL Database Firebase to store user information.",
        image: divocImage,
        url: "https://carlossalazar2000.github.io/DIVOC-Forum/home.html",
        youtubeUrl: "",
        technologies: [
          {
            name: "HTML 5",
            class: "devicon-html5-plain"          
          },
          {
            name: "CSS 3",
            class: "devicon-css3-plain"          
          },
          {
            name: "JavaScript",
            class: "devicon-javascript-plain"
          },
          {
            name: "Firebase",
            class: "devicon-firebase-plain"          
          }
        ]
      },

      {
        title: "Cybersecurity Encryption Project",
        description: "This is a GUI that allows users to view certain encryption schemes. Encryption methods include Caesar cipher, reverse cipher, AES encryption, and homomorphic encryption. GUI interface is built with HTML, CSS, JavaScript, and Python.",
        image: encryptionImage,
        url: "https://carlossalazar2000.github.io/Cybersecurity-Project/pdfs/processing_encrypted_data.pdf",
        youtubeUrl: "https://www.youtube.com/watch?v=Uh6Eu7aTPes",
        technologies: [
          {
            name: "HTML 5",
            class: "devicon-html5-plain"          
          },
          {
            name: "CSS 3",
            class: "devicon-css3-plain"          
          },
          {
            name: "JavaScript",
            class: "devicon-javascript-plain"
          },
          {
            name: "Python",
            class: "devicon-python-plain"
          },
        ]
      },
    ];

    var projects = projectsList.map((project, i) => {
        return (
          <div className="col-sm-12 col-md-6 col-lg-4"
            key={project.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="card" key={i}>
                <img
                  src={project.image}
                  alt="projectimage"
                  style={{ padding: 10, position: 'relative'}}
                />

                <p className="project-title-settings mt-3">
                  {project.title}

                  {project.url ? (
                    <a className="link-href" href={project.url} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt" style={{ marginLeft: "10px" }} />
                    </a>
                  ) : null}

                  {project.youtubeUrl ? (
                    <a className="link-href" href={project.youtubeUrl} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-youtube" style={{ marginLeft: "10px" }} />
                    </a>
                  ) : null}
                </p>

                <div className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{height: "auto", fontSize: "132%", lineHeight: "200%"}}
                >
                  <p className="modal-description">{project.description}</p>

                  <div className="col-md-12 text-center">
                    {project.technologies.map((icons, j) => {
                      return (
                        <li className="list-inline-item mx-3" key={j}>
                          <span>
                            <div className="text-center">
                              <i className={icons.class} style={{ fontSize: "300%" }}>
                                <p className="text-center" style={{ fontSize: "30%" }}>
                                  {icons.name}
                                </p>
                              </i>
                            </div>
                          </span>
                        </li>
                      );
                    })}
                  </div>
                  
                </div>
              </div>
            </span>
          </div>
        );
      }
    );
    
    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>Projects</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;