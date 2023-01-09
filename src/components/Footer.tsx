import React from "react";
import "../styles/Footer.css";
import { Github, Linkedin, EnvelopeAt } from "react-bootstrap-icons";

function Footer() {
  return (
    <div className="footer-body">
      <a
        className="footer-icon"
        href="https://github.com/youngwoo206"
        target="_blank"
      >
        <Github size={40} />
      </a>
      <a
        className="footer-icon"
        href="https://www.linkedin.com/in/youngwoo-lee-123b63198/"
        target="_blank"
      >
        <Linkedin size={40} />
      </a>
      <a
        className="footer-icon"
        href="mailto:youngwoo206@gmail.com"
        target="_blank"
        color="white"
      >
        <EnvelopeAt size={40} />
      </a>
    </div>
  );
}

export default Footer;
