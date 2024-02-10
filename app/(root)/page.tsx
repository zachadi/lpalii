
import { ContactUs } from "@/components/contactus";
import { Eventlist } from "@/components/event";
import bg from "../../images/bg.jpg";
import logo from "../../images/logo.png";
import Image from "next/image";
import { getevents } from "@/data/events";
import { useEffect, useState } from "react";
import Fullbg from "@/components/ui/fullbg";

interface Eventaray {
  soon: boolean;
  soonplace: string;
  date: string;
  lien: string;
  SOLDOUT: boolean;
}

export default async function Home() {
  
  const event: Eventaray[] = await getevents();
  return (
    <Fullbg>
      <Image
        className=" flex items-center justify-center w-3/4 md:w-1/4 h-[185px] mt-5"
        src={logo}
        alt="Profile picture"
        style={{ objectFit: "cover" }}
      />

      <div className="flex items-center justify-center flex-col w-4/5 md:w-1/3 pt-52 md:pt-7  ">
        <Eventlist event={event} />
        <ContactUs />
      </div>
    </Fullbg>
  );
}
