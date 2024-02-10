"use client";
import logo from "../../images/bg.jpg";
import logoph from "../../images/TEL.png";
import { useEffect, useState } from "react";

export default function Fullbg({




  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
      const [backgroundImage, setBackgroundImage] = useState(logo);
    useEffect(() => {
      const handleResize = () => {
        const newBackgroundImage = window.innerWidth >= 768 ? logo : logoph;
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
      className="flex items-center justify-between flex-col w-full min-h-screen overflow-x-hidden text-white bg-cover bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
      }}
    >
      {children}
    </main>
  );
}
