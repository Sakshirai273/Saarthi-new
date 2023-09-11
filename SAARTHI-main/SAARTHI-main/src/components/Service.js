import React from "react";
import { Parallax } from "react-parallax";
import bg from "./img/sky_about_3.jpg";

const Service = () => {
      
  return (
    <div id="section2">
      <Parallax bgImage={bg} strength={-800} blur={2}>
        <section id="services-area" class="services-section">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 text-center inner our-service">
                <div class="service">
                  <h1 style={{color:"rgb(102, 30, 30)"}}>About Us </h1>
                  <p style={{color:"rgb(102, 30, 30)"}}>
                  South mein north ka khana ",doesn't it seems quite strange .We rahiii are here to make you feel like your hometown even  <br />if you are far away from it. We not only provide you with weather report facilitiy, real experience of different places,but also we are here with our most special feature your Rahiii's to co-host you throughout your jorney
                    <div style={{height:"50px"}}></div><div></div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Parallax>
    </div>
  );
};

export default Service;
