import React from "react";
// import Navbar from "./components/Navbar";
import Start from "./components/Start";
// import About from "./components/About";
import ColumnArea from "./components/ColumnArea";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";
import ContactForm from "./components/ContactForm";
// import Login from "./components/Login";
// import Rating from "./components/Rating"
// import Blog from "./components/Delhi"
import City from "./components/City";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Start />
      {/* <About /> */}
      <br></br>
      <br></br>
      <br></br>
      <Service />
      <div id="section3">
        <ColumnArea />
        <Testimonial />
      </div>
      <ContactForm />
      {/* <Rating/> */}
      {/* <Blog/> */}
    </div>
  );
};

export default Home;
