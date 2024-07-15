import Prizes from "@/components/Prizes/Prizes";
import AboutUs from "@/components/AboutUs/About";
import Sponsors from "@/components/Sponsors/Sponsors";
import Image from "next/image";
import Timeline from "@/components/Timeline/Timeline";

export default function Home() {
    return (
        <main className="flex justify-center flex-col">
            Testing Home Page
            {/* Import and add your respective component here */}

            <AboutUs/>
            <Timeline />
            <Prizes />
            <Sponsors />
        </main>
    );
}
