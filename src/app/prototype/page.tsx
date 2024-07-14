
import Sponsors from "@/components/Sponsors/Sponsors";
import Timeline from "./Timeline/Timeline";
import Faq from "@/components/FAQ/Faq.js";
export default function Home() {
    return (
      <main className="flex justify-center flex-col">
        Testing Home Page
        {/* Import and add your respective component here */}
        <Timeline />
        <Sponsors />
        <Faq/>
      </main>
    )
  
  
}
