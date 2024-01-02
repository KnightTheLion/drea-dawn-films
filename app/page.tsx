import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import HomeCarousel from "@/components/shared/HomeCarousel";
import {
  SlSocialInstagram,
  SlSocialPintarest,
  SlSocialFacebook,
} from "react-icons/sl";
import { SiMinutemailer } from "react-icons/si";

export default function Home() {
  const instagram = "https://www.instagram.com/drea.dawnphoto/?hl=en";
  const facebook = "https://www.facebook.com/dreadawnphotography/";
  const pintrest = "https://www.pinterest.com/pin/677369600188107054/";

  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* */}
      {/* HEADER START..... */}
      <header className="z-10 min-w-full lg:h-screen xl:h-screen h-max grid lg:grid-cols-3 grid-cols-2 relative bg-header-bg bg-header-img bg-no-repeat bg-left-bottom bg-35vh sm:bg-contain md:bg-contain lg:bg-75vh">
        {/* */}
        {/* NAVBAR..... */}
        <div className="order-2 lg:order-1 lg:absolute min-w-full z-[1000]">
          <Navbar />
        </div>
        {/*..... END OF NAVBAR */}
        {/* */}
        {/* */}
        {/* */}
        {/* PLACE HOLDER DIV */}
        <div className="hidden lg:block lg:order-1"></div>
        {/* .....END OF PLACE HOLDER DIV */}
        {/* */}
        {/* */}
        {/* */}
        {/* ARROW POINT DOWN.....*/}
        <div
          className=" relative lg:order-1 xl:order-2 flex items-end justify-start xl:justify-center md:justify-end lg:justify-center p-2 md:p-5
      
       border-yellow-500 sm:border-red-500 md:border-green-500 lg:border-pink-500 xl:border-orange-500"
        >
          {/* MOBILE SOCIAL LINKS */}
          <div className="absolute top-6 flex flex-col text-2xl drop-shadow-2xl lg:order-2 xl:order-3 lg:hidden">
            <a target="_blank" href={instagram}>
              <SlSocialInstagram className="mb-4" />
            </a>
            <a target="_blank" href={pintrest}>
              <SlSocialPintarest className="mb-4" />
            </a>
            <a target="_blank" href={facebook}>
              <SlSocialFacebook className="mb-4" />
            </a>
          </div>
          {/*..... END OF MOBILE SOCIAL LINKS */}
          <Image
            className="w-4 lg:w-6 opacity-60"
            src={"./arrow.svg"}
            width={25}
            height={107.54}
            alt="arrow-down"
          />
        </div>
        {/* .....END OF ARROW POINT DOWN*/}
        {/* */}
        {/* SOCIAL LINKS AND WORK DESCRIPTORS .....*/}
        <div className="z-50 hidden lg:grid grid-rows-4 items-center text-right justify-center relative lg:order-3 xl:order-3">
          {/* PLACE HOLDER DIV .....*/}
          <div className="lg:order-1 xl:order-1"></div>
          {/*..... END OF PLACE HOLDER DIV */}
          {/* */}
          {/* PLACE HOLDER DIV */}
          <div className="lg:order-4 xl:order-2"></div>
          {/* .....END OF PLACE HOLDER DIV */}
          {/* */}
          {/* SOCIAL LINKS .....*/}
          <div className="lg:flex justify-around text-2xl drop-shadow-2xl lg:order-2 xl:order-3">
            <a target="_blank" href={instagram}>
              <SlSocialInstagram />
            </a>
            <a target="_blank" href={pintrest}>
              <SlSocialPintarest />
            </a>
            <a target="_blank" href={facebook}>
              <SlSocialFacebook />
            </a>
          </div>
          {/* .....END OF SOCIAL LINKS */}
          {/* */}
          {/* WORK DESCRIPTORS .....*/}
          <div className="p-2 m-4 w-fit border-r-4 opacity-60 lg:order-3 xl:order-4">
            <p className="p-2">PHOTOGRAPER</p>
            <p className="p-2">FILMAKER</p>
          </div>
          {/* .....END OF WORK DESCRIPTORS */}
        </div>
        {/*..... END OF SOCIAL LINKS AND WORK DESCRIPTORS */}
      </header>
      {/* .....END OF HEADER */}
      {/* */}
      {/* */}
      {/* */}
      {/* BEGIN SHORT ABOUT ARTIST SECTION..... */}
      <section className="flex-1">
        <section className="container mt-6">
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
                alt="artist family"
                priority
                unoptimized={true}
              />
            </div>
            <div className="md:order-4 relative md:h-2/3">
              <div className="md:absolute -top-1/2 -left-10">
                <Image
                  src={"/drea-josh-lake.webp"}
                  width={2500}
                  height={2000}
                  alt="drea and josh at lake"
                  priority
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
        <section className="container mt-6">
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
        <section className="xl:p-24 md:p-16 pt-6 container">
          <div>
            <HomeCarousel />
          </div>
        </section>
        {/* .....END SECTION WITH IMAGE CAROUSEL */}
      </section>
      {/* */}
      {/* FOOTER START..... */}
      <footer className="w-full mt-auto lg:text-xl">
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
            <a href="mailto:dreadawnphotography@gmail.com"> Email</a> | North
            Carolina
          </p>
          <p>United States</p>
        </div>
      </footer>
      {/* .....END OF FOOTER */}
    </main>
  );
}
