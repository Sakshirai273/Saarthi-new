import React from "react";

const AboutCard = ({image, data, button, heading}) => {
    return (
        <div className="col-sm-4">
            <div className="feature-content">
                <img src={image} alt="pic"/>
                    <h2 className="feature-content-title green-text">{heading}</h2>
                    <p className="feature-content-description">{data}
                    </p>
                    <a href="http://localhost:3000/" class="feature-content-link green-btn">{button}</a>
            </div>
        </div>
    );
}

export default AboutCard;