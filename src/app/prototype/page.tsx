import AboutUs from "@/components/AboutUs/About";
import Sponsors from "@/components/Sponsors/Sponsors";
import Image from "next/image";
import Timeline from "./Timeline/Timeline";

export default function Home() {
    return (
        <main className="flex justify-center flex-col">
            Testing Home Page
            {/* Import and add your respective component here */}
            <AboutUs/>
            <Timeline/>
            <Sponsors />
        </main>
    );
}
