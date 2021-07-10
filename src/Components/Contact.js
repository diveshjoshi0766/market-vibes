import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  render() {

    return (
      <section id="contact">
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

export default Contact;
