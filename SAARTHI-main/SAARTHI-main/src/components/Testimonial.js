import React, {useState, useEffect} from "react";
import TestimonialCards from "./TestimonialCards";
import BigColumn from "./BigColumn";
import Axios from "axios";

const Testimonial = () => {
    const[details, setDetails] = useState([]);
    const apiCall = async () => {
        console.log("hello");
        const {data} = await Axios.get("http://localhost:8001/api");
        // const list = data.map((d) => console.log(d));
        setDetails(data);
    }
    useEffect(() => {
        apiCall();
    }, []);
    return(
        <section id="testimornial-area">
			<div class="container">
				<div class="row text-center">
                {
                    details.map((currcard) => {
                        return(
                        <TestimonialCards image = {currcard.image} heading = {currcard.heading} data = {currcard.data}/>
                        )
                    })
                }
                    {/* <TestimonialCards 
                    image="https://media.architecturaldigest.in/wp-content/uploads/2017/08/Pangong-Ladakh-landscape-wiki-images.jpg"
                    heading="Ladakh"
                    data = "Ladakh is a place like no other. The beauty of the place cannot be expressed in words. Visiting Leh Ladakh can be a great experience as these places have a bounty of natural beauty."/>

                    <TestimonialCards 
                    image="https://tse2.mm.bing.net/th?id=OIP._p7ANT_7qsxBzkhrkiVtiwHaEo&pid=Api&P=0"
                    heading="Ooty"
                    data = "The quaint and quiet hill station of Ooty in Tamil Nadu is one of the most popular mountain destinations in South India. Traditionally called Udhagamandalam or Ootacamund, abbreviated as Udhagai."/>

                    <TestimonialCards 
                    image="https://tse4.mm.bing.net/th?id=OIP._kUb0y5mt1pcFM7pLD5qhwHaE8&pid=Api&P=0"
                    heading="Mcleod Ganj"
                    data = "Mcleod Ganj being a year-round destination can be visited any time of the year but the best time to visit Mcleodganj are the summer months of March to June and the pre-winter months between September to November."/>

                    <TestimonialCards 
                    image="https://lonelyplanetimages.imgix.net/mastheads/GettyImages-483072199_full.jpg?sharp=10&vib=20&w=1200"
                    heading="Guwahati"
                    data = "The Gateway to North East India, Guwahati is a mesmerising city replete with ancient temples, exotic flora and fauna, a rich cultural heritage. Situated on the banks of the river Brahmaputra and bound by hills on three sides"/> */}

                    <BigColumn/>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;