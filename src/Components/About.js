import React, { Component } from "react";
import Slide from "react-reveal";

class About extends Component {
  render() {

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>RESEARCH MARKETING</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns"><div key="ResearchMaketing">
         
          <br></br>
          <p>
          <span>&bull;</span>  Get to Know Your Customers
          <br></br>
          <span>&bull;</span>  Personalize the Customer Experience
          <br></br>
          <span>&bull;</span>  Use the Right CRM(customer relationship management)
          <br></br>
          <span>&bull;</span>  Focus on the Customer Experience
          <br></br>
          <span>&bull;</span>  Focus on the Customer Experience
          </p>
        </div></div>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default About;
