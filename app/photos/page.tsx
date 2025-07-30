"use client";
import React from "react";
import Image from "next/image";
import photosPageImages from "./images";
import { ImageList, ImageListItem, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Cta from "@/components/shared/Cta";

export default function Photos() {
  const theme = useTheme();
  const screen = {
    sm: useMediaQuery(theme.breakpoints.up("sm")),
    md: useMediaQuery(theme.breakpoints.up("md")),
    lg: useMediaQuery(theme.breakpoints.up("lg")),
    xl: useMediaQuery(theme.breakpoints.up("xl")),
  };
  let numOfCols = screen.xl
    ? 5
    : screen.lg
      ? 3
      : screen.md
        ? 2
        : screen.sm
          ? 1
          : 1;
  let numForGap = 8;

  return (
    <section className="my-10 container p-3 min-h-screen">
      <h1 className="text-center text-4xl text-deep-green pt-20 lg:pt-[140px]">
        Photo Gallery
      </h1>
      <p className="text-deep-green text-center py-4 border-b border-deep-green">
        Scroll through some of my favorite photos!
      </p>
      <div className="px-2 pt-8">
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
      <div className="flex flex-col items-center justify-center my-8 p-2">
        <Cta />
      </div>
    </section>
  );
}
