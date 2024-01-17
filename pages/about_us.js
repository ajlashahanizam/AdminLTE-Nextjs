import React from "react";
import Image from 'next/image';
import AdminHOC from "@/components/layout/admin.hoc";
import aboutStyles from "@/styles/about.module.css";
import mainStyles from "@/styles/index.module.scss";

export default function AboutUs() {
  return (
    <AdminHOC contentTitle="About Us">
      <div className={aboutStyles.body}>
        <div className={aboutStyles.main}>
          <img className={aboutStyles.logo} src="/logo.png" alt="logo" />
          <h1 className={aboutStyles.heading}>
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
              src="/construction.jpg" 
              alt="metal structure"
            />
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
