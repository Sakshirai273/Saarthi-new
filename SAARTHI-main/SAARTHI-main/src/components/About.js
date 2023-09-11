import React, {useState, useEffect} from "react";
import Axios from "axios";
import AboutCard from "./AboutCard.js";
import Img1 from "./img/1-1.jpg";

const About = () => {
    const[details, setDetails] = useState([]);
    const apiCall = async () => {
        console.log("hello");
        const {data} = await Axios.get("http://localhost:5050/api");
        // const list = data.map((d) => console.log(d));
        setDetails(data);
    }
    useEffect(() => {
        apiCall();
    }, []);
    return (
        <div id="section2">
            <section id="feature-area" class="about-section">
                <div class="container">
                    <div class="row text-center inner">
                        {
                            details.map((currCard)=>{
                                return(
                                    <AboutCard image = {Img1} data = {currCard.description} button = {currCard.name} heading = {currCard.id}/>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;