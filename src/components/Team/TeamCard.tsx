import Image from "next/image";
interface TeamCardProps {
  imgSrc: string;
  title: string;
  position: string;
}
const TeamCard = ({ imgSrc, title, position }: TeamCardProps) => {
  return (
    <div className="h-full flex flex-col items-centre">
      <Image
        className="lg:pt-0 lg:-mt-0 md:pt-3 -mt-8"
        width={500}
        height={500}
        src={imgSrc}
        alt={title}
      />
      <h1
        className=" mt-5 font-dela-gothic lg:text-3xl md:text-2xl text-white text-center text-stroke-outline "
        style={{
          textShadow: "1px 2px 0px #000",
        }}
      >
        {title}{" "}
      </h1>
      <h3 className=" font-oxanium text-white lg:text-xl lg:mt-3 text-center">{position}</h3>
    </div>
  );
};

export default TeamCard;
