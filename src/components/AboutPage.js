import React from "react";
import { Link } from "react-router-dom";
import '../styles/components/AboutPage.css';

const AboutPage = () => (
    <div>
      <h2 className="title">About</h2>
      <div className="credits">
        <p>
            Game developed by <a href="https://github.com/jorger" target="_blank" rel="noopener noreferrer">Jorge Rubiano</a>, the objective of the game is the consolidation of ReactJS knowledge
        </p>
        <p>
            This game has been inspired by the game known as <a href="https://play.google.com/store/apps/details?id=com.petraapps.binarygame" target="_blank" rel="noopener noreferrer">binary fun</a>
        </p>
      </div>
      <Link to="/" className="button">Home</Link>
    </div>
);

export default AboutPage;