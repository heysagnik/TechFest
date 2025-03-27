import React from "react";
import classes from "./EventSection.module.css";
import Button from "../common/Button/Button";
import event from "./event.svg";

const EventSection = () => {
  return (
    <>
      <section id="about" className={classes.aboutSec}>
        <div className={classes.about}>
          <div className={classes.details}>
            <h2 className={classes.heading1}>TECH FEST VIT BHOPAL</h2>
            <p className={classes.para}>
              Tech Fest VIT Bhopal is a celebration of innovation, creativity, and technology. 
              It provides a platform for students to showcase their technical prowess, 
              collaborate on groundbreaking ideas, and compete in a variety of events. 
              From coding challenges to robotics competitions, the fest is designed to inspire 
              and empower participants to push the boundaries of what's possible. 
              Join us to experience the perfect blend of learning, fun, and innovation.
            </p>
            <div className={classes.btn}>
              <Button link="/events" label="Explore Events" />
            </div>
          </div>

          <div className={classes.composition}>
            <img className={classes.images} src={event} alt="Tech Fest VIT Bhopal" />
          </div>
        </div>
      </section>
    </>
  );
};

export default EventSection;
