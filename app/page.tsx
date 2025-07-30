import Image from "next/image";
import Link from "next/link";
import HomeCarousel from "@/components/shared/HomeCarousel";
import Cta from "@/components/shared/Cta";

export default function Home() {
  return (
    <section className="container p-2 min-h-screen">
      <section className="mt-6 md:p-12">
        <div className="mb-6 lg:grid lg:grid-flow-col lg:items-center lg:relative ">
          {/* DECORATIVE LINE FOR ABOUT SECTION */}
          <div className="hidden lg:flex h-full justify-end">
            <div className="border-r border-deep-green rotate-45"></div>
          </div>
          {/* .....END DECORATIVE LINE FOR ABOUT SECTION */}
          <h2 className="font-semibold text-deep-green p-2 lg:p-8 text-center lg:w-fit w-full lg:text-xl">
            HEY, I AM DREA
          </h2>
          <div className="lg:border-l lg:border-deep-green border-0 lg:flex">
            <p className="text-deep-green p-4 text-center lg:text-lg lg:pr-24">
              I am very passionate about <br />
              photography & videography. <br />
              I love creating beautiful
              <br />
              memories in beautiful settings.
            </p>
          </div>
        </div>
        {/* STYLE ABOUT PHOTOS */}
        <div className="grid grid-flow-row md:grid-cols-2 md:grid-rows-2 md:pt-12 gap-1">
          <div>
            <Image
              src={"/family.webp"}
              width={640}
              height={480}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
              alt="artist family"
              quality={100}
            />
          </div>
          <div className="md:order-4 relative md:h-2/3">
            <div className="md:absolute -top-1/2 -left-10">
              <Image
                src={"/drea-josh-lake.webp"}
                width={614}
                height={492}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                alt="drea and josh at lake"
                quality={100}
              />
            </div>
          </div>
          <div className="h-0"></div>
          <div className="flex flex-col items-center w-full gap-4 py-4 h-1/2">
            <Link href={"/meet"}>
              <p className="text-deep-green text-center px-4 py-2 w-fit hover:bg-deep-green hover:text-white border-2 border-deep-green">
                MEET THE ARTIST
              </p>
            </Link>
            <div className="border border-deep-green w-full md:w-2/3"></div>
          </div>
        </div>

        {/* .....END STYLE ABOUT PHOTOS */}
      </section>
      {/* .....END SHORT ABOUT ARTIST SECTION */}
      {/* */}
      {/* */}
      {/* BEGIN LINK TO CONTACT SECTION */}
      <section className="container mt-6 px-3 md:px-12">
        <div>
          <h2 className="font-semibold text-deep-green p-2 text-center xl:text-2xl">
            MEMORIES OF LOVE
          </h2>
        </div>
        <div className="pb-4 xl:text-xl">
          <p className="text-deep-green p-4 text-center">
            Drea Dawn Photo + Films <br />
            Photgrapher & Videographer <br />
            North Carolina <br />
          </p>
          <p className="text-deep-green p-4 text-center">
            Wedding Photo & Film <br />
            Emotion Couple Sessions <br />
          </p>
        </div>
        <div className="flex justify-center items-center xl:text-xl">
          <Link href={"/contact"}>
            <p className="text-deep-green text-center px-4 py-2 w-fit hover:bg-deep-green hover:text-white border-2 border-deep-green">
              CONTACT ME
            </p>
          </Link>
        </div>
      </section>
      {/*.....END LINK TO CONTACT SECTION */}
      {/* */}
      {/* BEGIN SECTION WITH IMAGE CAROUSEL..... */}
      <section className="px-3 md:px-12 pt-6 container">
        <div>
          <HomeCarousel />
        </div>
      </section>
      {/* .....END SECTION WITH IMAGE CAROUSEL */}
      <div className="flex flex-col items-center justify-center my-8 p-2">
        <Cta />
      </div>
    </section>
  );
}
