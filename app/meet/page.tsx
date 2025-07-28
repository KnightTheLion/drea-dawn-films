"use client";
import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SiMinutemailer } from "react-icons/si";
import { useTheme } from "@mui/material/styles";
import { ImageList, ImageListItem, useMediaQuery } from "@mui/material";
import familyImages from "./family";

const Meet = () => {
  const theme = useTheme();
  const isSmallSreen = useMediaQuery(theme.breakpoints.up("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isLargeSreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isExtraLargeSreen = useMediaQuery(theme.breakpoints.up("xl"));

  let numOfCols = isExtraLargeSreen
    ? 4
    : isLargeSreen
      ? 3
      : isMediumScreen
        ? 3
        : isSmallSreen
          ? 2
          : 2;
  let numForGap = 8;

  return (
    <div>
      <section className="my-10 container p-3 md:p-6 min-h-screen">
        <h1 className="text-center text-4xl text-deep-green pt-20 lg:pt-[220px]">
          Meet the Artist
        </h1>
        <p className="text-deep-green text-center py-4 border-b border-deep-green">
          Get to know Drea Dawn Photography & Films
        </p>
        <div className="pt-4 py-6 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-4 text-deep-green text-left p-2 md:max-w-[50%]">
            <div className="w-full bg-header-bg">
              <Image
                src={"/drea-artist-page.webp"}
                width={1238}
                height={1501}
                alt="artist"
                priority={true}
                unoptimized={true}
              />
            </div>
            <p>
              Hi! I'm Andrea, mainly known by "Drea" (Dree-Uh). I am a 28 year
              old wife, mother, entrepreneur, and follower of Jesus.
            </p>
            <p>
              I am a LEO wife, married to a wonderful man. We got married July
              14, 2016 and let me tell you- Marriage is an adventure! But I
              wouldn't trade it for anything. We are parents to our two
              beautiful daughters Mae Valentine and Knightly Dawn, and dog
              parents to two German shepherds, Zeke & Nala.
            </p>
            <p>
              Why did I choose to become a photographer? That's an easy
              question. I come from a family line based off of entrepreneurs. My
              dad, a successful business owner of Champion Tile, was raised
              under being a third generation tradesmen, he was trained under the
              eye of his Amish grandpa.
            </p>
            <p>
              As a little girl I always had a love for art, and giving that art
              to people. I never knew I could do it as a full time job!? I’m
              also a people lover, so once we connect, you will become my
              instant friend! This line of work is especially great for me,
              since I am able to work from home and raise my little Mae.
            </p>
            <p>
              I specialize in wedding photography/ videography but, If you are
              planning to elope, then by all means ELOPE!! There is nothing more
              romantic and intimate than saying your forever vows to your
              significant other on top of a sunset mountain. AH! Spend all that
              wedding money on your honeymoon and the right people to document
              your day! That's where I'd come in &#x1F609;
            </p>
            <p></p>
          </div>
        </div>
      </section>
      {/*.......END MEET THE ARTIST */}
      {/* */}
      {/* ARTIST FAMILY START..... */}
      <section className="my-10 container p-3 md:p-6">
        <p className="text-deep-green text-center">
          Scroll down to see my little family!
        </p>
        <div className="px-2 pt-8">
          <ImageList variant="masonry" cols={numOfCols} gap={numForGap}>
            {familyImages.map((photo, index) => (
              <ImageListItem key={index}>
                <Image
                  width={640}
                  height={1000}
                  alt="pictures of family"
                  src={photo}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </section>
      {/*.......END ARTIST FAMILY */}
    </div>
  );
};

export default Meet;
