import React from "react";


const TestimonialCards = ({image, heading, data}) => {
    return (
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-xxs-12">
            <div class="testimonial-content">
                <img src={image} alt="Img" className="important" />
                <h2>{heading}</h2>
                <p>{data}</p>
                <br />
            </div>
        </div>
    );
}

export default TestimonialCards;