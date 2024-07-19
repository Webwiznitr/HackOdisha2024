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

export default function Home() {
    return (
        <main className="flex justify-center flex-col">
            {/* Import and add your respective component here */}
            <Navbar />
            <HeroSection />
            <AreUReady />
            <AboutUs />
            <Team />
            <Statistics />
            <Timeline />
            <Prizes />
            <Sponsors />
            <Faq />
            <Footer />
        </main>
    );
}
