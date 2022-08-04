import React from "react";
import matt from "./images/matt.jpg";
import alex from "./images/matt.jpg";
import gabbie from "./images/gabbie.jpg";
import gabe from "./images/gabe.jpg";
import grace from "./images/grace.jpg";
import frank from "./images/frank.jpg";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="wrapper">
      <Card
        img={matt}
        title="Matthew Chan"
        role="Mentor"
        description="[Description]"
      />
      <Card
        img={alex}
        title="Alex Shih"
        role="Mentor"
        description="[Description]"
      />
      <Card
        img={gabbie}
        title="Gabbie Liu"
        role="Member"
        description="[Description]"
      />
      <Card
        img={gabe}
        title="Gabe Gordon"
        role="Member"
        description="[Description]"
      />
      <Card
        img={grace}
        title="Grace Chan"
        role="Member"
        description="[Description]"
      />
      <Card
        img={frank}
        title="Frank Liu"
        role="Member"
        description="[Description]"
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
