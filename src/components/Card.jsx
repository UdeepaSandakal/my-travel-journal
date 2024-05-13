import React from "react";
import Pin from "../assets/pin.png";

function Card(props) {
  return (
    <>
      <div className="card">
        <div>
          <img src={props.imageUrl} className="card--img" />
        </div>
        <div className="card--details">
          <div className="card--location">
            <img src={Pin} className="card--pin" />
            <p className="card--country">{props.location.toUpperCase()}</p>
            <p className="card--map">
              <a href={props.googleMapsUrl} target="_blank ">
                View on Google Maps
              </a>
            </p>
          </div>
          <h2 className="card--title">{props.title}</h2>
          <p className="card--date">
            {props.startDate} - {props.endDate}
          </p>
          <p className="card--des">{props.description}</p>
        </div>
      </div>
      <hr className="card--line"></hr>
    </>
  );
}

export default Card;
