import React from "react";
import coverImage from "../../assets/cover/teamwork-cover.png";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Discover Who We Are</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </section>
  );
}

export default About;
