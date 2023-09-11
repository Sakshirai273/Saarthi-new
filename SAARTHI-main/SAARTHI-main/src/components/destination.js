// import Button from 'react-bootstrap/Button';
import React from "react";
import Card from "react-bootstrap/Card";
import "./food.css";

function Destination() {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="card">
        <div className="foodCard">
          <Card.Img
            variant="top"
            src="https://tse2.mm.bing.net/th?id=OIP.BtBZhxBpId-ygYVrSOeoXQHaFj&pid=Api&P=0"
            className="cardIamge"
          />
          <Card.Body>
            <Card.Title>Mohan Sweets</Card.Title>
            <Card.Text className="text">
              Do try their Gulab jamun there are the best .
              <div className="reaction">75%</div>
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
      <Card style={{ width: "18rem" }} className="card">
        <div className="foodCard">
          <Card.Img
            variant="top"
            src="https://tse3.mm.bing.net/th?id=OIP.InlgltnGNwj7W93dJ_oQ_gHaEQ&pid=Api&P=0"
            className="cardIamge"
          />
          <Card.Body>
            <Card.Title>Gaurav's Restaurant </Card.Title>
            <Card.Text className="text">
              Do try the south indian dishes.
              <div className="reaction">90%</div>
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
      <Card style={{ width: "18rem" }} className="card">
        <div className="foodCard">
          <Card.Img
            variant="top"
            src="https://tse4.mm.bing.net/th?id=OIP.NynFCGvUMH_2eG5MBZkmQwHaEK&pid=Api&P=0"
            className="cardIamge"
          />
          <Card.Body>
            <Card.Title>Prem Restaurant </Card.Title>
            <Card.Text className="text">
              It is a very famous fifty year old Shop.
              <div className="reaction">80%</div>
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
}

export default Destination;
