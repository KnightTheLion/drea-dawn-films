"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import Image from "next/image";

const images = [
  {
    src: "/homepage-carousel/wedding-home-page.webp",
    title: "Let's capture your memories together.",
    description:
      "Memories that you can cherish forever and share with family and friends...",
    number: 1,
  },
  {
    src: "/homepage-carousel/family-home-page.webp",
    title: "Remembering that Family is everything.",
    description: "Styled shoots are some of my favorite photoshoots.",
    number: 2,
  },
  {
    src: "/homepage-carousel/engagement-home-page.webp",
    title: "Scenic shots make amazing momentos.",
    description:
      "Posing with loved ones in front of beautiful scenery leaves lasting impressions.",
    number: 3,
  },
];

const HomeCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="flex flex-col xl:flex-row justify-center items-center">
      <div className="xl:w-[75%]">
        <div className="bg-creamy aspect-video grid grid-rows-2 p-4 gap-3 justify-self-center">
          <div className="text-2xl md:text-3xl lg:text-4xl text-center text-white pt-8 flex justify-center items-center">
            {images[current].title}
          </div>
          <div className="text-md md:text-xl lg:text-2xl text-center text-white md:px-24">
            {images[current].description}
          </div>
        </div>
      </div>
      {/*...........*/}
      {/*...........*/}
      {/*...BREAK...*/}
      {/*...........*/}
      {/*...........*/}
      <div className="xl:w-[75%]">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="text-xl md:text-2xl text-deep-green">
              {current + 1} | {count}
            </div>
          </div>
          <Carousel
            opts={{
              loop: true,
            }}
            setApi={setApi}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="flex justify-center items-center"
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    width={1000}
                    height={500}
                    unoptimized={true}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
