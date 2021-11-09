import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import "./Vehicle.css";

const Vehicle = (props) => {
  const { name, img } = props.vehicle;
  const navigate = useNavigate();

  const design = {
    height: "150px",
    width: "280px",
    padding: "20px",
  };

  const handleOnClick = () => {
    const url = `/destination/${name}`;
    navigate(url);
    console.log(name);
  };
  return (
    <div className="flex" onClick={handleOnClick}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} style={design} />
        <Card.Body>
          <Card.Title style={{ textAlign: "center", fontSize: "30px" }}>
            {name}{" "}
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Vehicle;
