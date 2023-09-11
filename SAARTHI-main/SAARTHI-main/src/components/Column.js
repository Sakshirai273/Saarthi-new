import React from "react";


import './photo.css'
const Column = ({ image, heading, data }) => {
    return (
        <div class="col-sm-6">
            <div class="blog-content">
                <img src={image} alt="pic" className="photo"/>
                <h2>{heading}</h2>
                <p>{data}</p>
                <br/>
            </div>
        </div>
    );
}

export default Column;