import React, { Component } from "react";
import Typical from "react-typical";

class Header extends Component {
  render() {
    return (
      <header id="home" style={{ height: window.innerHeight - 500, display: 'block' }}>
        <div className="row aligner" style={{height: '100%'}}>
          <div className="col-md-12">
            <div>
              <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
              <h1 className="mb-0">Carlos Salazar</h1>

              <div className="title-container">
                <Typical className="title-styles" steps={"Software Engineer"} loop={1} />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;