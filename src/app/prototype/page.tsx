import Sponsors from "@/components/Sponsors/Sponsors";
import Timeline from "./Timeline/Timeline";
import Statistics from "@/components/Statistics/Statistics"

export default function Home() {
    return (
      <main className="flex justify-center flex-col">
        Testing Home Page
        {/* Import and add your respective component here */}
        <Statistics/>
        <Timeline />
        <Sponsors />
      </main>
    )
}
