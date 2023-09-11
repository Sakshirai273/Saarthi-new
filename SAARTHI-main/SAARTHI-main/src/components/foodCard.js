// import Button from 'react-bootstrap/Button';
import React from "react";
import Card from 'react-bootstrap/Card';
import "./food.css"
import img1 from "./guide/yash_varshney.png"
import img2 from "./guide/Ujjwal.jpeg"
import img3 from "./guide/harshit.jpeg"


function BasicExample() {
    return (
        <div>
        <Card style={{ width: '18rem' }} className="card">
            <div className="foodCard">
                <Card.Img variant="top" src={img1}  className = "cardIamge"/>
                <Card.Body>
                    <Card.Title>Pleasure to help you!</Card.Title>
                    <Card.Text className="text">Meet Harshit, one of the most experience guide for the place.He has helped 150+ travellers to make their trip memorable.150 Rupees per hour
                        <div className="reaction">Book Now</div>
                    </Card.Text>
                </Card.Body>
            </div>
        </Card>
        <Card style={{ width: '18rem' }} className="card">
            <div className="foodCard">
                <Card.Img variant="top" src={img2}  className = "cardIamge"/>
                <Card.Body>
                    <Card.Title>Pleasure to help you!</Card.Title>
                    <Card.Text className="text">Meet Ujjwal, one of the most experience guide for the place.He has helped 150+ travellers to make their trip memorable.100 Rupees per hour
                        <div className="reaction">Book Now</div>
                    </Card.Text>
                </Card.Body>
            </div>
        </Card>
        <Card style={{ width: '18rem' }} className="card">
            <div className="foodCard">
                <Card.Img variant="top" src={img3}  className = "cardIamge"/>
                <Card.Body>
                    <Card.Title>Pleasure to help you!</Card.Title>
                    <Card.Text className="text">Meet Yash, one of the most experience guide for the place.He has helped 150+ travellers to make their trip memorable.100 Rupees per hour
                        <div className="reaction">Book Now</div>
                    </Card.Text>
                </Card.Body>
            </div>
        </Card>

        </div>
    );
}

export default BasicExample;