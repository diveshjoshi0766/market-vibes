import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Reach Marketing
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                Focused Marketing
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Channel Development
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Channel Management
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Training of Sales Team
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">market vibes</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>People don’t buy what you do, they buy why you do it</h3>
            </Fade>
            <hr />
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
