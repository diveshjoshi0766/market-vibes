import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {

    // const networks = 
    //   return (
    //     <li key="facebook">
    //       <a href="#">
    //         <i className="fa fa-facebook"></i>
    //       </a>
    //     </li>
    //   );
    // }

    return (
      <footer>

       <li key="facebook">
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
        </li>
        <li key="instagram">
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
        </li>
        <li key="twitter">
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
        </li>

        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links"></ul>

              <ul className="copyright">
                <li>&copy; Copyright 2021</li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
