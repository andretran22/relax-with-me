import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import "./About.css";
import Image from "react-bootstrap/Image";

//logo imports
import react from "../../assets/logos/react.png";
import bootstrap from "../../assets/logos/bootstrap.png";
import heroku from "../../assets/logos/heroku.png";
import spring from "../../assets/logos/spring.png";
import procreate from "../../assets/logos/procreate.png";
import chillin from "../../assets/logos/chillin.png"

const logos = [
  {
    name: "React JS",
    image: react,
    url: "https://reactjs.org/",
    description:
      "An open-source, front-end javascript library used to create interactive user interfaces and components. ",
    usage:
      "I used React JS as the backbone framwork to develop this web application.",
  },
  {
    name: "React Bootstrap",
    image: bootstrap,
    url: "https://react-bootstrap.github.io/",
    description:
      "An open-source CSS framework integrated and rebuilt as React components with accessibility in mind.",
    usage:
      "I used React Boostrap for prebuilt components I can scale quickly along with styling.",
  },
  {
    name: "React Spring",
    image: spring,
    url: "https://www.react-spring.io/",
    description:
      "A spring-physics based animation library that brings react components to life.",
    usage:
      "I used React Spring to create the interactive parallax animation effect.",
  },
  {
    name: "Heroku",
    image: heroku,
    url: "https://www.heroku.com/home",
    description:
      "A cloud platform service that enables developers to build, run, and operate applications entirely in the cloud.",
    usage: "I used Heroku to deploy my code to my domain relaxwith.me",
  },
  {
    name: "Procreate",
    image: procreate,
    url: "https://procreate.art/",
    description:
      "A raster graphics editor app for digital painting on the IPad.",
    usage: "I used Procreate to render and draw all the art seen on this site. With the expection of the images on this about page.",
  },
];

const About = () => {
  const [activeID, setActiveID] = useState(0);

  const getStyle = (index) => {
    if (index == activeID) {
      return "logo-image logo-active";
    } else {
      return "logo-image-nonactive";
    }
  };

  const makeLogos = () => {
    return logos.map((logoInfo, index) => {
      return (
        <Col xs={2} key={index}>
          <Image
            className={getStyle(index)}
            src={logoInfo["image"]}
            onClick={() => setActiveID(index)}
            fluid
          />
        </Col>
      );
    });
  };

  const getActive = () => {
    return logos[activeID];
  };

  return (
    <Container className="center-about">
      <Row className="first-box">
        {/* title */}
        <Row className="about-row">
          <h1>About</h1>
        </Row>
        <br />

        <Row>
          <Col xs={6}>
            {/* Paragraph 1 */}
            <Row className="inherit-pad">
              <p>
                Relax to the musical stylings of the talented
                <a href="https://louiezong.bandcamp.com/"> Louie Zong</a>. Create
                your own personal soundscape using a selection of calm sounds
                along with any of the curated playlists. See what you can
                create!
              </p>
            </Row>
            <br />

            {/* Paragraph 2 */}
            <Row className="inherit-pad"> 
              <p>
                This project was done by
                <a href="https://www.linkedin.com/in/andretran22/"> Andre Tran </a> 
                in association with The University of Texas' Bridging
                Disciplines Program for the
                <a href="https://ugs.utexas.edu/bdp/programs/dam"> Digital Art and Media </a> 
                certificate under the creative mentorship of Professor
                <a href="https://rtf.utexas.edu/faculty/ben-bays"> Ben Bays</a>.
              </p>
            </Row>
            <br />

            {/* Paragraph 3 */}
            <Row className="inherit-pad">
              <p>
                Many thanks to Professor Bays and the Bridging Disciplines
                Programs for giving me the opportunity to create this site. This
                was my first project combining code, art, and music to create a
                place anyone can relax and unwind. I hope you enjoy!
              </p>
            </Row>
            <br/>

            {/* Paragraph 4*/}
            <Row className="inherit-pad">
              <p>
                Feel free to take a look at my source code and other projects on 
                <a href="https://github.com/andretran22/relax-with-me"> Github</a>.
              </p>
            </Row>
          </Col>

          {/* about image */}
          <Col xs={6}>
            <Image src={chillin} fluid/>
          </Col>
        </Row>
      </Row>

      <br />
      <br />
      <br />

      <Row className="second-box">
        {/* second title */}
        <Row className="about-row">
          <h1>Tools Used</h1>
        </Row>
        <br />

        {/* logo images */}
        <Row className="logos-row">{makeLogos()}</Row>
        <br />
        <br />

        {/* tool name */}
        <Row className="tool-name">
          <h4>{getActive().name}</h4>
        </Row>
        <br />

        {/* tool description */}
        <Row className="tool-name">{getActive().description}</Row>
        <Row className="tool-name">{getActive().usage}</Row>
        <br />

        {/* learn more */}
        <Row className="tool-name">
          <a href={getActive().url}> Learn More about {getActive().name} </a>
        </Row>
      </Row>
    </Container>
  );
};

export default About;
