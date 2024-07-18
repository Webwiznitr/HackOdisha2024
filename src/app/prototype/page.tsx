
import AboutUs from "@/components/AboutUs/About";
import AreUReady from "@/components/AreUReady/AreUReady";
import Prizes from "@/components/Prizes/Prizes";
import Sponsors from "@/components/Sponsors/Sponsors";
import Statistics from "@/components/Statistics/Statistics";
import Timeline from "@/components/Timeline/Timeline";

export default function Home() {
    return (

        <main className="flex justify-center flex-col">
            Testing Home Page
            {/* Import and add your respective component here */}
            
             <AreUReady/>
            <AboutUs/>
            {/* <Team/> */}
            <Statistics/>
            <Timeline />
            <Prizes />
            <Sponsors />
        </main>
    );
}
