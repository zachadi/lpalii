import { ContactUs } from "@/components/contactus";
import { Eventlist } from "@/components/event";
import logo from "../../images/logo.png";
import Image from "next/image";
import { getevents } from "@/data/events";
import { useEffect, useState } from "react";
import Fullbg from "@/components/ui/fullbg";

interface Eventaray {
  soon: boolean;
  place: string;
  date: string;
  lien: string;
  SOLDOUT: boolean;
}

export default async function Home() {
  const event: Eventaray[] = await getevents();
  //console.log(event);
  return (
    <Fullbg>
      <Image
        className=" flex items-center justify-center w-4/5 md:w-1/4 h-[200px] mt-10 sm:mt-44 md:mt-3"
        src={logo}
        alt="Profile picture"
        style={{ objectFit: "cover" }}
      />

      <div className="flex items-center justify-center flex-col w-4/5 md:w-1/3 pt-48 grow sm:pt-6  ">
        
          {<Eventlist event={event} />
          }
          <ContactUs />
        
      </div>
    </Fullbg>
  );
}
