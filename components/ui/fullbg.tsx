"use client";
import { ImageError } from "next/dist/server/image-optimizer";
import logo from "../../images/bg.jpg";
import logoph from "../../images/TEL4.png";
import { useEffect, useState } from "react";

export default function Fullbg({




  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
      const [backgroundImage, setBackgroundImage] = useState(logo);
    useEffect(() => {
      const handleResize = () => {
        const newBackgroundImage = window.innerWidth >= 500 ? logo : logoph;
        setBackgroundImage(newBackgroundImage);
      };

      // Initial setup
      handleResize();

      // Event listener for window resize
      window.addEventListener("resize", handleResize);

      // Cleanup on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

  return (
    <main
      className="flex items-center justify-between flex-col min-h-screen overflow-x-hidden bg-local w-screen text-white bg-cover  bg-center  bg-no-repeat "
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
      }}
    >
      {children}
    </main>
  );
}
