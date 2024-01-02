// "use-client";
import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import Link from "next/link";
import React from "react";
import { SiMinutemailer } from "react-icons/si";
import kindWords from "./kindwords";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const KindWords = () => {
  return (
    <main className=" bg-white">
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
      {/* VIDEOS START..... */}

      <section className="my-10 container p-3 md:p-6">
        <h1 className="text-center text-4xl text-deep-green pt-20 lg:pt-[220px]">
          Kind Words
        </h1>
        <p className="text-deep-green text-center py-4 border-b border-deep-green">Thank you to all of these sweet people!</p>
        <div className="pt-4 grid grid-flow-row gap-4 py-6 md:grid md:grid-cols-2 md:justify-center md:items-center">
          {kindWords.map((kindWord) => (
            <div className="">
              <div>
              <h2 className="text-deep-green text-center text-2xl font-semibold">
                {kindWord.name}
              </h2>
              <p className="text-deep-green text-center text-md font-semibold pb-2">
                {kindWord.date}
              </p>
              <Image
                src={kindWord.image}
                width={640}
                height={427}
                alt={kindWord.name}
                priority={true}
              />
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-deep-green">
                    <div>Message<span className="italic text-sm"> ( click or tap to read )</span></div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-deep-green text-xl p-3">
                      {kindWord.message}
                    </p>
                    <p className="text-deep-green text-lg text-center p-2 italic">
                      {kindWord.signed}
                    </p>
                    <AccordionTrigger className="text-deep-green">
                      Close
                    </AccordionTrigger>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* .....END OF VIDEOS */}
      {/* */}
      {/* FOOTER START..... */}
      <footer className="w-full mt-auto">
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
            href={"/kindwords"}
            className="text-deep-green text-center p-2 hover:bg-deep-green hover:text-white"
          >
            KIND WORDS
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
            <a href="mailto:dreadawnphotography@gmail.com"> Email</a> | North
            Carolina
          </p>
          <p>United States</p>
        </div>
      </footer>
      {/* .....END OF FOOTER */}
    </main>
  );
};

export default KindWords;
