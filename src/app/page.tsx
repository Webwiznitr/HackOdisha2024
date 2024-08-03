"use client";
import AboutUs from "@/components/AboutUs/About";
import AreUReady from "@/components/AreUReady/AreUReady";
import Faq from "@/components/FAQ/Faq.js";
import Footer from "@/components/Footer/page";
import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import Prizes from "@/components/Prizes/Prizes";
import Sponsors from "@/components/Sponsors/Sponsors";
import Statistics from "@/components/Statistics/Statistics";
import Team from "@/components/Team/Team";
import Timeline from "@/components/Timeline/Timeline";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
    return (
        <main className="flex justify-center flex-col">
            <ParallaxProvider>
                <Navbar />
                <HeroSection />
                <AreUReady />
                <AboutUs />
                <Statistics />
                <Timeline />
                <Prizes />
                <Team />
                {/* <Sponsors /> */}
                <Faq />
                <Footer />
            </ParallaxProvider>
        </main>
    );
}
