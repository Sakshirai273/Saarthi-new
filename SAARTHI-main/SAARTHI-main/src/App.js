import React from "react";
import Weather from "./components/WeatherCard";
// import Login from "./components/Login";
import Home from "./Home";
import {Route, Routes} from "react-router-dom"
import LoginPage from "./LoginPage/LoginPage";
import Blog from "./components/Delhi";
import Rating from "./components/Rating";
import Destination from "./components/destination";
import City from "./components/City";
const App = () => {
  return(
    <div>
      {/* <Navbar/>
      <Start/>
      <About/>
      <ColumnArea/>
      <div id="section3">
      <Service/>
      <Testimonial/>
      </div>
      <ContactForm/>  */}
      {/* ************************************************* */}
      <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/weather" element={<Weather/>}/>
      <Route path="/rating" element={<Rating/>}/>
      <Route path="/rahiii" element={<Blog/>}/>
      <Route path="/city" element={<City/>}/>
      <Route path="/destination" element={<Destination/>}/>
      {/* <Weather/> */}
      </Routes>
      {/* ******************************************************* */}

    </div>
  )
}

export default App;