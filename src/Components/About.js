import React, { Component } from "react";
import Slide from "react-reveal";

class About extends Component {
  render() {

    return (
      <section id="about">
        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
              <span>FOCUSED MARKETING</span>
              </h1>
            </div>

            <div className="nine columns main-col">
            <div key="FocusedMaketing">
            
            <p className="info">
            surveys, interviews, focus groups & customer observation 
            </p>
            <p>Would you like to know why, how, and when to apply market research? Do you want to discover why your consumers are not buying your products? Are you interested in launching a new product, service, or even a new marketing campaign, but you’re not sure what your consumers want?</p>
            <br></br>
            <p>
            <span>&bull;</span>  Administrative: Help a company or business development, through proper planning, organization, and both human and material resources control, and thus satisfy all specific needs within the market, at the right time.
            <br></br>
            <span>&bull;</span>  Social: Satisfy customer’s specific needs through a required product or service. The product or service should comply with the requirements and preferences of a customer when it’s consumed.
            <br></br>
            <span>&bull;</span>  Economical: Determine the economical degree of success or failure a company can have while being new to the market, or otherwise introducing new products or services, and thus providing certainty to all actions to be implemented.
            </p>
          </div></div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default About;
