import Link from "next/link";
import React from "react";
import { Roboto, Besley } from "next/font/google";
import sold from "../images/soldout.png";
import Image from "next/image";
import { Separator } from "./ui/separator";



const roboto = Besley({
  subsets: ["latin"],
  weight: ["600"],
});
interface Eventaray {
  soon: boolean;
  place: string;
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
        {event.map(({ soon, place, date, lien, SOLDOUT }) => (
          <div
            key={place}
            className=" flex items-center justify-start  flex-col gap-3 "
          >
            {soon ? (
              //------------------------------------SOON----------------------------------
              <div className=" flex items-end justify-center py-3 gap-1">
                <span className={`${roboto.className} uppercase text-xl `}>
                  {place}
                </span>
                <h3 className="font-bold text-center ">Soon ...</h3>
              </div>
            ) : (
              //------------------------------------event--------------------------------
              <div className="flex items-center justify-center w-full  flex-col py-3">
                {/*--------------------------------DATE PLACE-------------------------- */}
                <div className="flex items-end justify-center  w-full gap-1 ">
                  <h3 className={`${roboto.className} uppercase text-xl `}>
                    {place}
                  </h3>
                  <h2 className=" text-start">{date}</h2>
                </div>
                {/*------------------------SOLDOUT---------------------------------------*/}
                {SOLDOUT ? (
                  <Image
                    src={sold}
                    alt="SOULDOUT"
                    height={50}
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
