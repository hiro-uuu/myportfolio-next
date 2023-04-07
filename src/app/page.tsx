"use client";

import Profile from "@/components/Profile";
import Gallary from "@/components/Gallary";
import MapContent from "@/components/MapContent";
import Skill from "@/components/Skill";
import Header from "@/components/Header";
import { Element } from "react-scroll";
import ContactForm from "@/components/Contact/ContactForm";

export default function Home() {
  return (
    <main>
      <Header />
      <Element name="profile" className="element">
        <div id="profile">
          <Profile />
        </div>
      </Element>
      <Element name="skill" className="element">
        <div id="skill">
          <Skill />
        </div>
      </Element>
      <Element name="mapcontent" className="element">
        <div id="mapcontent">
          <MapContent />
        </div>
      </Element>
      <Element name="gallary" className="element">
        <div id="gallary">
          <Gallary />
        </div>
      </Element>
      <Element name="contact" className="element">
        <div id="contact">
          <ContactForm />
        </div>
      </Element>
    </main>
  );
}
