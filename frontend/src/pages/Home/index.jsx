import * as React from "react";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { SearchSection } from "../components/SearchSection";
import { PropertyCards } from "../components/PropertyCards";
import { FeaturesSection } from "../components/FeaturesSection";
import { AboutSection } from "../components/AboutSection";
import { TeamSection } from "../components/TeamSection";
import { ShowcaseCards } from "../components/ShowcaseCards";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import "../../index.css";

function Home() {
    document.title="Caria Group";
    return (
        <main className="relative w-full bg-zinc-100">
        <HeroSection />
        <Navbar />
        <SearchSection />
        <PropertyCards />
        <FeaturesSection />
        <AboutSection />
        <TeamSection />
        <ShowcaseCards />
        <ContactSection />
        <Footer variant="home" />
      </main>
      
    );
}

export default Home;
