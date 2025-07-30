"use client";
import Image from "next/image";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { ImageList, ImageListItem, useMediaQuery } from "@mui/material";
import familyImages from "./family";
import Cta from "@/components/shared/Cta";

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
    <div className="container mx-auto">
      <section className="my-10 md:p-6 min-h-screen">
        <h1 className="text-center text-4xl text-deep-green pt-20 lg:pt-[140px]">
          Meet the Artist
        </h1>
        <h2 className="text-deep-green text-center py-4 border-b border-deep-green">
          Get to know Drea Dawn Photography & Films
        </h2>
        <div className="pt-4 py-6 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-4 text-deep-green text-left md:max-w-[50%]">
            <div className="w-full bg-header-bg">
              <Image
                src={"/drea-artist-page.webp"}
                width={1238}
                height={1501}
                alt="Drea Dawn, North Carolina wedding and elopement photographer and videographer"
                priority={true}
                unoptimized={true}
              />
            </div>
            <h3 className="font-semibold text-center">
              Meet Drea – North Carolina Wedding & Elopement Photographer and
              Videographer
            </h3>

            <p>
              Hi, I’m Andrea—though most people know me as Drea (pronounced
              Dree-Uh)! I’m a 29-year-old wife, mama, business owner, and
              follower of Jesus, based right here in North Carolina. I'm
              passionate about capturing life’s most meaningful moments through
              photography and film.
            </p>

            <p>
              As a proud law enforcement wife and mama to two beautiful girls,
              Mae Valentine and Knightly Dawn, I understand how fast life moves
              and how important it is to preserve the real, raw, and joyful
              moments that tell your story. At home, we’re also raising a police
              K9, Henry, and two energetic German Shepherds, Zeke and Nala.
            </p>

            <p>
              I specialize in wedding photography and videography—whether you’re
              planning a big celebration or an intimate mountain elopement.
              There’s nothing more romantic than saying your vows surrounded by
              nature’s beauty, and I absolutely love capturing that magic. I
              believe your wedding day should be about connection, not
              stress—and I’m here to make sure your memories are documented
              beautifully.
            </p>

            <p>
              Photography runs deep in my story. Growing up in a family of
              entrepreneurs—my dad owns Champion Tile and was trained by his
              Amish grandfather—I’ve always been surrounded by creativity,
              craftsmanship, and heart. From a young age, I was drawn to art and
              loved sharing it with others. Now, I get to call it my full-time
              career.
            </p>

            <p>
              When we work together, you’re not just a client—you’re a new
              friend. I’ll be by your side to capture the real laughs, the happy
              tears, and the in-between moments you’ll want to relive for a
              lifetime.
            </p>
            <p>
              Based in the Triad area of North Carolina, I proudly serve couples
              across Greensboro, Winston-Salem, High Point, and beyond.
            </p>

            <p>
              If you’re looking for a North Carolina wedding photographer and
              videographer who will treat your story like her own, let’s
              connect. Check out my{" "}
              <a href="/photos" className="font-bold">
                photo gallery
              </a>
              ,{" "}
              <a href="/videos" className="font-bold">
                video gallery
              </a>
              , or come say hi over on{" "}
              <a
                href="https://www.instagram.com/dreadawnphoto"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold"
              >
                Instagram 📸
              </a>
              —it’s where I love to hang out!
            </p>

            <p></p>
          </div>
        </div>
      </section>
      {/*.......END MEET THE ARTIST */}
      {/* */}
      {/* ARTIST FAMILY START..... */}
      <section className="my-16 md:p-6">
        <p className="text-deep-green text-center">
          Scroll down to see my little family!
        </p>
        <div className="pt-8">
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
      <div className="flex flex-col items-center justify-center my-8 p-2">
        <Cta />
      </div>
    </div>
  );
};

export default Meet;
