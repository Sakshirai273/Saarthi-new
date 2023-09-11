import React from "react";
import { Link } from "react-scroll"
import logo from "./logo1.png"
import "./nav.css";
import Dropdown from "react-bootstrap/Dropdown"

// import Weather from "./WeatherCard";
// import {Link} from "react-router-dom"

const Navbar = () => {
	return (
		<nav class="navbar navbar-inverse navbar-top">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
				</div>
				<div class="single-page-nav sticky-wrapper" id="tmNavbar">
					<ul class="nav navbar-nav">
						<li ><img src={logo} alt="logo" className="navimage"></img></li>
						{/* <li><Link to="section1" spy={true} smooth={true} offset={-100} duration={800}>Homepage</Link></li> */}
						<li><Link to="section2" spy={true} smooth={true} offset={-100} duration={800}>About Us</Link></li>
						<li><Link to="section3" spy={true} smooth={true} offset={-100} duration={900}>Services</Link></li>
						<li><Link to="section4" spy={true} smooth={true} offset={-100} duration={900}>Contact</Link></li>
						{/* <li><Link to="section4" spy={true} smooth={true} offset={-100} duration={900}>Contact</Link></li>
						<li><Link to="section4" spy={true} smooth={true} offset={-100} duration={900}>Contact</Link></li> */}
						<li><a href="/weather">weather</a></li>
						<li><a href="/rating">Rating</a></li>
						<li><a href="/city">City</a></li>
						<li><a href="/rahiii">Rahiii</a></li>

						{/* <li><Dropdown>
							<Dropdown.Toggle className="navDrop">
								<div className="navDropBtn">Rahii</div>
							</Dropdown.Toggle>
							<Dropdown.Menu className="drop">
								<Dropdown.Item href="#/action-1">Delhi</Dropdown.Item><br></br>
								<Dropdown.Item href="#/action-2">Ladakh</Dropdown.Item><br></br>
								<Dropdown.Item href="#/action-3">Assam</Dropdown.Item><br></br>
								<Dropdown.Item href="#/action-3">Rampur</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						</li> */}
					</ul>
				</div>
			</div>
		</nav>
	)
}


export default Navbar;