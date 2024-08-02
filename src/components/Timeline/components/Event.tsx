import React from "react";
import dash2 from "../assets/dash2.svg";
import Image from "next/image";
const Event = ({
    time = "7:30",
    event = "check in starts",
    isLast = false,
    isFirst = false,
}: {
    time: string;
    event: string;
    isLast?: boolean;
    isFirst?: boolean;
}) => {
    const eventName = event.toUpperCase();
    return (
        <main className="flex items-start gap-2 px-4 tracking-wide">
            <div className={`flex flex-col items-center mt-1`}>
                <div
                    id="circle-point"
                    className="border-2 border-orange-500 p-2 rounded-full w-fit"
                >
                    <div
                        id="circle-filled"
                        className="bg-orange-500 rounded-full h-4 w-4"
                    ></div>
                </div>
                {!isLast && (
                    <div className="flex items-center h-full justify-center">
                        <Image src={dash2} alt="" />
                    </div>
                )}
            </div>

            <div
                id="event-details"
                className="flex gap-4 border-[3px] border-orange-500 rounded-xl w-full h-full py-2 px-4 md:px-8 items-center"
            >
                <div
                    id="event-time"
                    className="font-archivo font-bold sm:text-xl text-sm sm:min-w-24 min-w-fit text-end"
                >
                    {time}
                </div>

                <div
                    id="event-name"
                    className="font-archivo font-bold sm:text-xl text-sm"
                >
                    {eventName}
                </div>
            </div>
        </main>
    );
};

export default Event;
