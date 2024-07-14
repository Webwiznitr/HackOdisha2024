import Prizes from "@/components/Prizes/Prizes";
import Sponsors from "@/components/Sponsors/Sponsors";
import Timeline from "./Timeline/Timeline";

export default function Home() {
    return (
        <main className="flex justify-center flex-col">
            Testing Home Page
            {/* Import and add your respective component here */}
            <Timeline />
            <Prizes />
            <Sponsors />
            
        </main>
    );
}
