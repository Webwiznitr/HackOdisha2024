import Sponsors from "@/components/Sponsors/Sponsors";
import Timeline from "@/components/Timeline/Timeline"

export default function Home() {
    return (
      <main className="flex justify-center flex-col">
        Testing Home Page
        {/* Import and add your respective component here */}
        <Timeline/>
        <Sponsors />
      </main>
    )
}
