import Sponsors from "@/components/Sponsors/Sponsors";
import Timeline from "./Timeline/Timeline";
import Footer from "@/components/Footer/page";

export default function Home() {
    return (
      <main className="flex justify-center flex-col">
        Testing Home Page
        {/* Import and add your respective component here */}
        <Timeline />
        <Sponsors />
        <Footer/>
      </main>
    )
}
