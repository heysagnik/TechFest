// import Button from "../common/Button/Button";
import classes from "./About.module.css";
import about from "./about.svg";

const About = () => {
  return (
    <>
      <section id="about" className={classes.aboutSec}>
        <div className={classes.about}>
          <div className={classes.details}>
            <h3 className={classes.heading}>About</h3>
            <h2 className={classes.heading1}>VIT Bhopal Tech Fest 2025</h2>
            <p className={classes.para}>
              VIT Bhopal Tech Fest is a premier technical festival that brings
              together students, innovators, and tech enthusiasts from across
              the country. It serves as a platform to showcase cutting-edge
              technology, foster innovation, and inspire creativity. With a
              variety of events, workshops, and competitions, the fest aims to
              nurture talent, encourage collaboration, and provide exposure to
              the latest advancements in technology. Join us for an unforgettable
              experience filled with learning, networking, and excitement at
              VIT Bhopal Tech Fest 2025!
            </p>
          </div>

          <div className={classes.composition}>
            <img className={classes.images} src={about} alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
