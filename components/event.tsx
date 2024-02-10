import { getevents } from "@/data/events";
import Link from "next/link";
import React from "react";
import { Rubik } from "next/font/google";
import sold from "../images/soldout.png";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";

const font = Rubik({
  subsets: ["cyrillic"],
  weight: ["600"],
});

interface Eventaray {
  soon: boolean;
  soonplace: string;
  date: string;
  lien: string;
  SOLDOUT: boolean;
}
interface Event {
  event: Array<Eventaray>;
}
export const Eventlist: React.FC<Event> = ({ event }) => {
  // console.log(event);
  event;
  return (
    <div>
      <div>
        {event.map(({ soon, soonplace, date, lien, SOLDOUT }) => (
          <div
            key={soonplace}
            className=" flex items-center justify-start  flex-col gap-3 "
          >
            {soon ? (
              //------------------------------------SOON----------------------------------
              <h3 className="text-xl font-bold text-center py-3">
                {soonplace} Soon ...
              </h3>
            ) : (
              //------------------------------------event--------------------------------
              <div className="flex items-center justify-center w-full  flex-col">
                {/*--------------------------------DATE PLACE-------------------------- */}
                <div className="flex items-center justify-center  w-full gap-1 ">
                  <h3 className={cn(" text-center text-2xl font-bold my-2",  font.className)}>
                    {soonplace}
                  </h3>
                  <h2 className=" text-start flex items-center justify-center ">
                    {date}
                  </h2>
                </div>
                {/*------------------------SOLDOUT---------------------------------------*/}
                {SOLDOUT ? (
                  <Image
                    src={sold}
                    alt="Profile picture"
                    height={80}
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <Link
                    href={lien}
                    className="flex items-center justify-center bg-transparent text-white py-2 rounded-sm w-full hover:border "
                  >
                    Buy Now
                  </Link>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
