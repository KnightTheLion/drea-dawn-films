import Link from "next/link";
import { SiMinutemailer } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-full mt-auto lg:text-xl ">
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
        <p>&copy; 2025 by Drea Dawn Photo & Films</p>
        <p className="flex gap-2 items-center justify-center">
          {" "}
          <SiMinutemailer />
          <a href="mailto:dreadawnphotography@gmail.com"> Email</a> | North
          Carolina
        </p>
        <p>United States</p>
      </div>
    </footer>
  );
}
