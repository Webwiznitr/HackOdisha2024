import { sponsors, cardboardTexture } from "./constants";
import Sponsor from "./Sponsor";
import "./sponsors.styles.css";
const Sponsors = () => {
    return (
        <section
            id="sponsers"
            className=" bg-[#FFF6E0] z-40  mb-[-0.8rem] relative"
        >
            <div
                className="sponsorBG"
                style={{
                    background: `url(${cardboardTexture})`,
                }}
            ></div>
            <div className="py-20 flex flex-col items-start justify-start px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[160px]">
                {sponsors.map((sponsor, index) => (
                    <Sponsor
                        key={index}
                        type={sponsor.type}
                        sponsorsList={sponsor.sponsorsList}
                    />
                ))}
            </div>
        </section>
    );
};

export default Sponsors;
