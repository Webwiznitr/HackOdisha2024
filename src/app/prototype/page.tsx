import Sponsors from "@/components/Sponsors/Sponsors";
import AreUReady from "@/components/AreUReady/AreUReady";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex justify-center flex-col">
            Testing Home Page
            {/* Import and add your respective component here */}
            <AreUReady/>
            <Sponsors />
        </main>
    );
}
