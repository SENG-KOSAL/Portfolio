import React from "react";
import Home1 from "./Home1";
import About from "../About/About";
import Services from "../Services/Services";
import ContactForm from "../Contact/Contact";
const Home = () => {
  return (
    <>
      <section id="home">
        <Home1 />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
    </>
  );
};

export default Home;
