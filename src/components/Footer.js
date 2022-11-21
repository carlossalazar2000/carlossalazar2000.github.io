import React, { Component } from "react";

class Footer extends Component {
  render() {
    var social = [
      {
        "name": "GitHub",
        "url": "https://github.com/carlossalazar2000",
        "class": "fab fa-github"
      },
      {
        "name": "Email",
        "url": "mailto:csalazar2018@fau.edu",
        "class": "fa fa-envelope"
      },
      {
        "name": "LinkedIn",
        "url": "https://www.linkedin.com/in/carlos-salazar-174b56196/",
        "class": "fab fa-linkedin"
      }
    ]

    var networks = social.map(network => {
      return (
        <span key={network.name} className="m-4">
          <a href={network.url} target="_blank" rel="noopener noreferrer">
            <i className={network.class}></i>
          </a>
        </span>
      );
    });

    return (
      <footer>
        <div className="col-md-12">
          <div className="social-links">{networks}</div>

          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                Copyright &copy; Carlos Salazar
              </small>
            </div>
          </div>

        </div>
      </footer>
    );
  }
}

export default Footer;
