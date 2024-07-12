import { sponsors, cardboardTexture } from "./data";
import Sponsor from "./Sponsor";
import "./sponsors.styles.css";
const Sponsors = () => {
    return (
        <section
            className="py-20 flex flex-col items-start justify-start px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[160px] bg-[#f5ecd7]"
            style={{
                backgroundImage: `url(${cardboardTexture})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                mixBlendMode: "multiply",
            }}
        >
            {sponsors.map((sponsor, index) => (
                <Sponsor
                    key={index}
                    type={sponsor.type}
                    sponsorsList={sponsor.sponsorsList}
                />
            ))}
        </section>
    );
};

export default Sponsors;
