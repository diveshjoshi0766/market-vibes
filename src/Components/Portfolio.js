import React, { Component } from "react";
import Slide from "react-reveal"

class Portfolio extends Component {
  render() {

    return (
      <section id="portfolio">
        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
              <span>CHANNEL MANAGEMENT</span>
              </h1>
            </div>

            <div className="nine columns main-col">
            <div key="FocusedMaketing">
            
            <br></br>
            <p>
            The term Channel Management is widely used in sales marketing parlance. It is defined as a process where the company develops various marketing techniques as well as sales strategies to reach the widest possible customer base. The channels are nothing but ways or outlets to market and sell products. The ultimate aim of any organization is to develop a better relationship between the customer and the product.
            </p>
            <br></br>
            <p>
            Channel management helps in developing a program for selling and servicing customers within a specific channel. The aim is to streamline communication between a business and the customer. To do this, you need to segment your channels according to the characteristics of your customers: their needs, buying patterns, success factors, etc. and then customize a program that includes goals, policies, products, sales, and marketing program (1). The goal of channel management is to establish direct communication with customers in each channel. If the company is able to effectively achieve this goal, the management will have a better idea which marketing channel best suits that particular customer base. The techniques used in each channel could be different, but the overall strategy must always brand the business consistently throughout the communication
            </p>
          </div></div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Portfolio;
