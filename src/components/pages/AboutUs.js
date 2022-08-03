import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="wrapper">
      <Card
        img="./images/matt.jpg"
        title="Matthew Chan"
        role="Mentor"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Card
        img="./images/matt.jpg"
        title="Alex Shih"
        role="Mentor"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Card
        img="./images/gabbie.jpg"
        title="Gabbie Liu"
        role="Mentor"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Card
        img="./images/gabe.jpg"
        title="Gabe Gordon"
        role="Mentor"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Card
        img="./images/grace.jpg"
        title="Grace Chan"
        role="Mentor"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Card
        img="./images/frank.jpg"
        title="Frank Liu"
        role="Mentor"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__role">{props.role}</p>
        <p className="card__description">{props.description}</p>
        <button className="card__btn">Connect</button>
      </div>
    </div>
  );
}
