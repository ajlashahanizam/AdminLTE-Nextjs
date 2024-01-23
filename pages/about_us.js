/* This code defines a React functional component named AboutUs
which represents a page about a creative design agency */

// React is imported as the core React library.
import React from "react";

// Image is imported from Next.js, which is a component for optimizing and rendering images.
import Image from 'next/image';

// AdminHOC is a Higher Order Component (HOC) for the admin layout
import AdminHOC from "@/components/layout/admin.hoc";

// Stylesheets are imported using CSS modules (about.module.css and index.module.scss)
import aboutStyles from "@/styles/about.module.css";
import mainStyles from "@/styles/index.module.scss";

// The AboutUs component is a functional component that represents the about page for the creative design agency
export default function AboutUs() {
  return (

/* The AdminHOC component is used as a wrapper, providing an admin layout. 
It includes a contentTitle prop set to "About Us." */

    <AdminHOC contentTitle="About Us">

{/* The main content of the about page is wrapped in a <div> with the class aboutStyles.body. */}
      <div className={aboutStyles.body}>

  {/* Inside the body, there is a main section containing a logo, heading, and two card sections. */}
        <div className={aboutStyles.main}>
          <img className={aboutStyles.logo} src="/logo.png" alt="logo" />
          <h1 className={aboutStyles.heading}>
      {/* The heading includes a span with the class aboutStyles.creative for styling. */}
            We are a <span className={aboutStyles.creative}>Creative</span> <br />
            Design Agency
          </h1>
          <div className={`${aboutStyles.left} ${aboutStyles.card}`}>
            <img
              className={aboutStyles["tile-image"]}
              src="/beautiful.jpg" alt="Flower" />
            <h2 className={aboutStyles["card-title"]}>Beauty</h2>
            <p className={aboutStyles["card-text"]}>
              We strive to create the most beautiful websites for all your
              needs. Working closely with you to design and develop an amazing
              website for your business.
            </p>
          </div>
          
          <div className={`${aboutStyles.right} ${aboutStyles.card}`}>
            <img
              className={aboutStyles["tile-image"]}
              src="/construction.jpg" alt="metal structure" />
            <h2 className={aboutStyles["card-title"]}>Construction</h2>
            <p className={aboutStyles["card-text"]}>
              Built by our team of professional developers, we ensure the most
              rigorous and modern websites. Built from scratch using HTML and
              CSS. Only the best for you.
            </p>
          </div>
        </div>
        <footer className={aboutStyles.footer}>
          <p>Create. Develop. Design.</p>
        </footer>
      </div>
    </AdminHOC>
  );
}
