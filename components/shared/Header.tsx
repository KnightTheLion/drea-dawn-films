"use client";

import Image from "next/image";
import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import {
  SlSocialInstagram,
  SlSocialPintarest,
  SlSocialFacebook,
} from "react-icons/sl";
import headerImg from "@/public/drea-header.webp";
import { usePathname } from "next/navigation";

const socials = {
  instagram: "https://www.instagram.com/drea.dawnphoto/?hl=en",
  facebook: "https://www.facebook.com/dreadawnphotography/",
  pintrest: "https://www.pinterest.com/pin/677369600188107054/",
};

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "/home";

  return (
    <div>
      <Sidebar />

      <header
        className={
          isHomePage
            ? "z-10 min-w-full md:min-h-[1000px] lg:min-h-[1000px] xl:h-screen grid md:grid-cols-3 grid-cols-2 relative bg-header-bg"
            : "z-10 min-w-full lg:grid lg:grid-cols-3 grid-cols relative hidden"
        }
      >
        {/* */}
        {isHomePage && (
          <Image
            src={headerImg}
            fill
            className="object-contain object-left"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            priority
            quality={100}
            loading="eager"
            placeholder="blur"
            alt="Picture of the artist"
          />
        )}

        {/* NAVBAR..... */}
        <div
          className={
            isHomePage
              ? "order-2 md:order-1 md:absolute min-w-full z-[1000]"
              : "md:absolute min-w-full z-[1000] bg-header-bg"
          }
        >
          <Navbar />
        </div>
        {/*..... END OF NAVBAR */}
        {/* PLACE HOLDER DIV */}
        {isHomePage && <div className="hidden md:block md:order-1"></div>}
        {/* SOCIAL LINKS & ARROW SVG.....*/}
        {isHomePage && (
          <div
            className=" relative md:order-1 xl:order-2 flex items-end justify-start xl:justify-center md:justify-center lg:justify-center p-2 md:p-5
       border-yellow-500 sm:border-red-500 md:border-green-500 lg:border-pink-500 xl:border-orange-500"
          >
            <div className="absolute top-6 flex flex-col text-2xl drop-shadow-2xl md:order-2 xl:order-3 md:hidden">
              <a
                target="_blank"
                href={socials.instagram}
                aria-label="Instagram"
              >
                <SlSocialInstagram className="mb-4" />
              </a>
              <a target="_blank" href={socials.pintrest} aria-label="Pinterest">
                <SlSocialPintarest className="mb-4" />
              </a>
              <a target="_blank" href={socials.facebook} aria-label="Facebook">
                <SlSocialFacebook className="mb-4" />
              </a>
            </div>

            <Image
              className="w-4 md:w-6 opacity-60"
              src={"./arrow.svg"}
              width={0}
              height={142.84}
              alt="arrow-down"
            />
          </div>
        )}
        {/* SOCIAL LINKS AND WORK DESCRIPTORS .....*/}
        {isHomePage && (
          <div className="z-50 hidden md:grid grid-rows-4 items-center text-right justify-center relative md:order-3 xl:order-3">
            {/* PLACE HOLDER DIV .....*/}
            <div className="md:order-1 xl:order-1"></div>
            {/* PLACE HOLDER DIV */}
            <div className="md:order-4 xl:order-2"></div>
            {/* SOCIAL LINKS .....*/}
            <div className="md:flex justify-around text-2xl drop-shadow-2xl md:order-2 xl:order-3">
              <a
                target="_blank"
                href={socials.instagram}
                aria-label="Instagram"
              >
                <SlSocialInstagram />
              </a>
              <a target="_blank" href={socials.pintrest} aria-label="Pinterest">
                <SlSocialPintarest />
              </a>
              <a target="_blank" href={socials.facebook} aria-label="Facebook">
                <SlSocialFacebook />
              </a>
            </div>
            {/* WORK DESCRIPTORS .....*/}
            <div className="p-2 m-4 w-fit border-r-4 opacity-60 md:order-3 xl:order-4">
              <p className="p-2">PHOTOGRAPER</p>
              <p className="p-2">FILMAKER</p>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
