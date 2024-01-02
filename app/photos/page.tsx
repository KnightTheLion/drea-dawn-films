"use client";
import React from "react";
import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import Image from "next/image";
import photosPageImages from "./images";
import { ImageList, ImageListItem, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// import SideBar from "../components/SideBar";
import Link from "next/link";
import { SiMinutemailer } from "react-icons/si";

export default function Photos() {
  const theme = useTheme();
  const isSmallSreen = useMediaQuery(theme.breakpoints.up("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isLargeSreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isExtraLargeSreen = useMediaQuery(theme.breakpoints.up("xl"));

  let numOfCols = isExtraLargeSreen
    ? 5
    : isLargeSreen
    ? 3
    : isMediumScreen
    ? 2
    : isSmallSreen
    ? 1
    : 1;
  let numForGap = 8;

  if (!photosPageImages) {
    return <h1>Loading...</h1>;
  }

  return (
    <main className="bg-white min-h-screen flex flex-col">
      {/* */}
      {/* HEADER START..... */}
      <header className="z-10 min-w-full lg:grid lg:grid-cols-3 grid-cols relative hidden">
        <div className="md:absolute min-w-full z-[1000] bg-header-bg">
          <Navbar />
        </div>
      </header>
      {/* .....END OF HEADER */}
      {/* */}
      {/* SIDEBAR START..... */}
      <div>
        <Sidebar />
      </div>
      {/* .....END OF SIDEBAR */}
      {/* */}
      {/* IMAGE LIST START..... */}
      <div className="px-2 lg:px-12 mt-[100px] lg:mt-72">
        <ImageList variant="masonry" cols={numOfCols} gap={numForGap}>
          {photosPageImages.map((photo, index) => (
            <ImageListItem key={index}>
              <Image
                width={1000}
                height={1000}
                alt="photo gallery"
                src={photo}
                priority
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      {/* .....END OF SIDEBAR */}
      {/* */}
      {/* FOOTER START..... */}
      <footer className="w-full">
        <div className="grid grid-flow-row gap-2 p-4 h-fit relative w-fit items-center mx-auto">
          <Link
            href={"/"}
            className="text-deep-green text-center p-2 hover:bg-deep-green hover:text-white"
          >
            HOME
          </Link>
          <Link
            href={"/photos"}
            className="text-deep-green text-center p-2 hover:bg-deep-green hover:text-white"
          >
            PHOTOS
          </Link>
          <Link
            href={"/videos"}
            className="text-deep-green text-center p-2 hover:bg-deep-green hover:text-white"
          >
            VIDEOS
          </Link>
          <Link
            href={"/meet"}
            className="text-deep-green text-center p-2 hover:bg-deep-green hover:text-white"
          >
            MEET THE ARTIST
          </Link>
          <Link
            href={"/contact"}
            className="text-deep-green text-center p-2 hover:bg-deep-green hover:text-white"
          >
            CONTACT
          </Link>
        </div>
        <div className="bg-deep-green grid grid-flow-row text-center gap-2 text-xs p-4">
          <p>&copy; 2023 by Drea Dawn Photo & Films</p>
          <p className="flex gap-2 items-center justify-center">
            {" "}
            <SiMinutemailer />
            <a href="mailto:dreadawnphotography@gmail.com"> Email</a> |
            North Carolina
          </p>
          <p>United States</p>
        </div>
      </footer>
      {/* .....END OF FOOTER */}
    </main>
  );
}
