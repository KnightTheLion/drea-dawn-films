// "use-client";
import React from "react";
import kindWords from "./kindwords";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Cta from "@/components/shared/Cta";

const KindWords = () => {
  return (
    <section className="my-10 container p-3 md:p-6 min-h-screen">
      <h1 className="text-center text-4xl text-deep-green pt-20 lg:pt-[220px]">
        Kind Words
      </h1>
      <h2 className="text-center text-2xl py-2 text-deep-green">
        What Clients Are Saying
      </h2>
      <p className="text-deep-green text-center border-b border-deep-green">
        Thank you to all of these sweet people!
      </p>
      <div className="pt-4 grid grid-flow-row gap-4 py-6 md:grid md:grid-cols-2 md:justify-center md:items-center">
        {kindWords.map((kindWord) => (
          <div key={kindWord.name}>
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
                    <div>
                      Message
                      <span className="italic text-sm">
                        {" "}
                        ( click or tap to read )
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-deep-green text-lg p-3">
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
      <div className="flex flex-col items-center justify-center my-8 p-2">
        <Cta />
      </div>
    </section>
  );
};

export default KindWords;
