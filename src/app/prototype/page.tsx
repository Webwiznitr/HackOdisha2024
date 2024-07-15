import Sponsors from "@/components/Sponsors/Sponsors";
import Image from "next/image";
import AboutUs from "@/components/AboutUs/About";

export default function Home() {
    return (
        <main className="flex justify-center flex-col">
            
            <AboutUs/>
            <Sponsors />
        </main>
    );
}
