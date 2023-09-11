import React from "react";
import Rating from "./Rating";
// import Navbar from "./Navbar";
// import weatherNavbar from "./weatherNavbar"
import weatherNavbar from "./weatherNavbar";
import Weather from "./WeatherCard";

import BasicExample from "./foodCard";
import "./Delhiblog.css";

const Blog = () => {
    return(
        <div>
        <weather/>
        <div className="Delhiblog">
        {/* <weatherNavbar/> */}
        <BasicExample/>
        </div>
        
        </div>
    )
} 

export default Blog;