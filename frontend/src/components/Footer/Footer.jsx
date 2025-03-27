import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer_outer}>
      <div className={classes.footer}>
        <div className={classes.footer_first}>
          <h1 className={classes.footer_title}>Tech Fest 2025</h1>
          <p className={classes.footer_description}>
            Tech Fest 2025 is one of the largest technical festivals at VIT Bhopal. Join us to explore innovation and technology.
          </p>
        </div>

        <div className={classes.footer_third}>
          <h2 className={classes.footer_menu_heading}>Contact Us</h2>
          <div className={classes.footer_contact}>
            <p>Location: VIT Bhopal University, Madhya Pradesh</p>
          </div>
          <div className={classes.footer_contact}>
            <p>Phone: +91 1234567890</p>
          </div>
          <div className={classes.footer_contact}>
            <p>Email: techfestvitbhopal@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={classes.footer_creator_div}>
        <h4 className={classes.footer_creator}>
          Website designed and created by BlockChain Club VIT B
        </h4>
      </div>
    </div>
  );
};

export default Footer;
