import React from "react";
import AdminHOC from "@/components/layout/admin.hoc";
import ajlaStyles from "@/styles/ajla.module.css";

export default function Ajla() {
  return (
    <AdminHOC contentTitle="Ajla">

<div>
  <div className="{ajlaStyles.top-container}">
    <img className="{ajlaStyles.top-cloud}" src="images/cloud.png" alt="cloud" />
    <div className="title-text">
      <h1>I'm Angela.</h1>
      <h2>a <span className="pro">pro</span>grammer.</h2>
    </div>
    <img className="{ajlaStyles.bottom-cloud}" src="Ajla/images/cloud.png" alt="cloud" />
    <img className="mountain" src="images/mountain.png" alt="mountain-img" />
  </div>
  <div className="middle-container">
    <div className="profile">
      <img src="images/angela.png" alt="angela-profile-img" />
      <h2>Hello.</h2>
      <p className="intro">I am an iOS and Web Developer. I'm the founder and CTO of The App Brewery. I ❤️ coffee and brew my own beers.</p>
    </div>
    <hr />
    <div className="skills">
      <h2>My Skills.</h2>
      <div className="skill-row">
        <img className="code-img" src="https://media.giphy.com/media/3p50WGyUqeU5W/giphy.gif" alt="code-img" />
        <h3>Design &amp; Development</h3>
        <p>I started learning to code when I was 12 years old because I wanted to make my own video games. Over time, I have gained a wealth of experience designing and developing mobile and web applications.</p>
      </div>
      <div className="skill-row">
        <img className="chilli-img" src="images/chillies.png" alt="chillies-img" />
        <h3>Hot Wings Challenge</h3>
        <p>But my best skill is actually in eating hot wings. I am the undisputed queen of hot wing challenges. Ghost Peppers and Carolina Reapers are my favourite snacks.</p>
      </div>
    </div>
    <hr />
    <div className="contact-me">
      <h2>Get In Touch</h2>
      <h3>If you love hot wings as much as I do.</h3>
      <p className="contact-message">Love hot wings as much as I do? Let's talk about how awesome they are! We can code while we eat hot wings!</p>
      <a className="btn" href="mailto:ilove@hotwings.com">CONTACT ME</a>
    </div>
  </div>
  <div className="bottom-container">
    <a className="footer-link" href="https://www.linkedin.com/in/angela-yu-963a584b/">LinkedIn</a>
    <a className="footer-link" href="https://twitter.com/yu_angela">Twitter</a>
    <a className="footer-link" href="https://www.appbrewery.co/">Website</a>
    <p className="copyright">© 2018 Angela Yu @ The App Brewery.</p>
  </div>
</div>



    </AdminHOC>
  );
}
