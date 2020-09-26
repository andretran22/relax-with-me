import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { motion } from "framer-motion";
import {
  defaultVariant,
  defualtTransition,
  styleAbsolute,
} from "../FramerContants";
import "./About.css";

const About = () => {
  return (
    <motion.div
      style={styleAbsolute}
      initial="initial"
      animate="in"
      exit="out"
      variants={defaultVariant}
      transition={defualtTransition}
    >
      <Container className="center-page">
        <Row>
          <h1>About</h1>
        </Row>
      </Container>
    </motion.div>
  );
};

export default About;
