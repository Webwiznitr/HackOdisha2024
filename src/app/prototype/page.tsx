
import Prizes from "@/components/Prizes/Prizes";
import AboutUs from "@/components/AboutUs/About";
import Sponsors from "@/components/Sponsors/Sponsors";
import Image from "next/image";
import Timeline from "@/components/Timeline/Timeline";
import Statistics from "@/components/Statistics/Statistics";
import AreUReady from "@/components/AreUReady/AreUReady";
import Footer from "@/components/Footer/page";
import Team from "@/components/Team/Team";
import Faq from "@/components/FAQ/Faq.js";

export default function Home() {
    return (
        <main className="flex justify-center flex-col">
            Testing Home Page
            {/* Import and add your respective component here */}
            <AreUReady />
            <AboutUs />
            {/* <Team/> */}
            {/* <Statistics /> */}
            <Timeline />
            <Prizes />
            <Sponsors />
            {/* <Faq/> */}
            <Footer />
        </main>
    );

}
