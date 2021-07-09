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

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>TRAINNING & DEVELOPMENT OF SALES TEAMS</span>
              </h1>
            </div>

            <div className="nine columns main-col">
            <div key="ChannelDevelopement">
            <p>One of the best ways to improve results in any sales organization is through a strategic, structured training program. What many sales managers find difficult however, is deciding on what training is needed, how much of it is needed and how frequently. Combine this with time constraints and many managers end up opting for the classic two-day, intensive sales seminar where your staff sit around listening to an ‘expert’ tell them stuff they either know already or will have forgotten by the time they get back to their hotel that evening.</p>
            <br></br>
            <br></br> 
            <p>
            <span>&bull;</span>  <b>Start with the basics</b>: There are some skills that transcend industry, product or sales methodology. Ensuring that your sales team is well-versed in the basic foundations of successful selling is something many managers overlook, as are the practicalities of simply navigating the tools and systems your salespeople are expected to use
            <br></br>
            <span>&bull;</span>  <b>E-learning and online seminars</b>: Shipping your entire sales team off to a training course is simply not practical, as this means your sales process stops for the duration of this session. This approach is also predicated on the assumption that all of your team members have exactly the same needs.
            <br></br>
            <span>&bull;</span>  <b>Forget the crash course approach</b>: Research has shown that without systematic, regular learning and reinforcement, approximately 70% of what people are being taught is forgotten within 24 hours.<br></br>
            <span>&bull;</span>  <b>Keep it practical - let them learn in the field</b>: It is vital that any training your sales team undergoes has a strong practical side and that this relates specifically to your own company, sales process, and product or service. When people notice an immediate positive impact on their daily experience, it becomes much easier to keep them motivated to complete a lengthy training schedule. This also ties in with point one above. You’ll often reap the largest rewards simply by training your staff to effectively use the systems and tools that are already in place at your company. If you manage to get your team to the point where they enjoy using the tools you give them, you will greatly increase productivity and the quality of records inside your business.<br></br>

            <span>&bull;</span>  <b>The numbers matter - keep an eye on them</b>: Sales is the ultimate results-driven activity, and this approach should also underpin any training program you develop. Look at the data regularly rather than just going on subjective feedback. Is the training actually bringing the results you expected during planning? Your team may be loving their regular seminars on the importance of posture and a nice view while conducting a sales call, but if there’s no change in your results you’re most likely wasting everybody’s time.<br></br>
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
