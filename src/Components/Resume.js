import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>CHANNEL DEVELOPMENT</span>
              </h1>
            </div>

            <div className="nine columns main-col">
            <div key="ChannelDevelopement">
            
            <p>
            <span>&bull;</span>  <b>Emerging Growth</b>: This phase refers to times when a company is building a new sales channel, which includes various activities such as to recruit and involve these partners successfully. In the emerging phase, companies are usually engaged in making proper plans and procedures to make sure that everything is in place
            <br></br>
            <span>&bull;</span>  <b>Scaling</b>: Satisfy customer’s specific needs through a required product or service. The product or service should comply with the requirements and preferences of a customer when it’s consumed.
            <br></br>
            <span>&bull;</span>  <b>Continuous Improvement</b>: The scaling process is a never-ending process unless a company doesn’t want to progress. To keep on the scaling process requires major investments or expansions after when a company has reached a plateau point.<br></br>
            <span>&bull;</span>  <b>Sub-Optimized</b>: Sub-optimized is the only phase that prevents a company from generating revenue and increasing outreach.<br></br>
            </p>
            <br></br>
            <br></br>
            <p>
              <b>Advantages of Sales Channel development</b>
              <br></br>
              <span>&bull;</span> Effective selling <br></br>
              <span>&bull;</span> Low marketing, sales, and distribution cost <br></br>
              <span>&bull;</span> Low investment for venturing into a new market  <br></br>
            </p>
          </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
