import React from "react";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import LegalAreas from "@/components/Home/LegalAreas";
import Advantages from "@/components/Home/Advantages";
import AboutMe from "@/components/Home/AboutMe";
// import VideoTour from "@/components/Home/VideoTour";
import Contact from "@/components/Home/Contact";
import { unstable_setRequestLocale } from "next-intl/server";

const Home = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="legal-areas">
        <LegalAreas />
      </section>
      <section id="advantages">
        <Advantages />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      {/* <section id="video-tour">
        <VideoTour />
      </section> */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
