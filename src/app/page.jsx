import Image from "next/image";
import Accueil from "./home/Accueil";
import SlideLangage from "@/components/SlideLangage";
import Project from "./project/Project";
import Skills from "./competences/Skills";
import About from "./about/About";
import Contact from "./contact/Contact";
import Testimonials from "./testimonials/Testimonials";

export default function Home() {
  return (
    <div className="bg-slate-900 text-white">
     <Accueil/>
     <SlideLangage/>
     <Project/>
     <Skills/>
     <About/>
     <Testimonials/>
     <Contact/>
    </div>
  );
}
