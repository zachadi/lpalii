
import { ContactUs } from "@/components/contactus";
import { Eventlist } from "@/components/event";
import bg from "../../images/bg.jpg";
import logo from "../../images/logo.png";
import Image from "next/image";
import { getevents } from "@/data/events";

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
    <main
      className=" flex items-center justify-between  flex-col w-full min-h-screen overflow-x-hidden text-white  bg-cover bg-no-repeat bg-fixed  "
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <Image
        className=" flex items-center justify-center w-1/4 h-[185px] mt-7"
        src={logo}
        alt="Profile picture"
        style={{ objectFit: "cover" }}
      />

      <div className="flex items-center justify-center flex-col w-3/4 md:w-1/3 pt-7  ">
        <Eventlist event={event} />
        <ContactUs />
      </div>
    </main>
  );
}
