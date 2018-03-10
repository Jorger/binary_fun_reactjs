import React from "react";
import { Link } from "react-router-dom";
import '../styles/components/HomePage.css';

const HomePage = () => (
	<div>
		<h2 className="title">Binary Fun - ReactJS</h2>
		<Link to="/game/4" className="button">Easy (4x4)</Link>
		<Link to="/game/6" className="button">Medium (6x6)</Link>
		<Link to="/game/8" className="button">Hard (8x8)</Link>
		<Link to="/about" className="button">About</Link>
	</div>
);

export default HomePage;