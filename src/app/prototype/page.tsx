import Sponsors from "@/components/Sponsors/Sponsors";
import Timeline from "./Timeline/Timeline";
import AreUReady from "@/components/AreUReady/AreUReady";

export default function Home() {
    return (
      <main className="flex justify-center flex-col">
        Testing Home Page
        {/* Import and add your respective component here */}
        <AreUReady/>
        <Timeline />
        <Sponsors />
      </main>
    )
}
