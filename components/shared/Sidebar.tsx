"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { VscMenu } from "react-icons/vsc";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="z-10 min-w-full lg:hidden lg:grid-cols-3 grid-cols grid fixed -top-1 backdrop-blur-sm p-2 bg-deep-green">
      <div className="min-w-full z-[1000] text-deep-green">
        <Sheet>
          <div className="grid grid-cols-3 items-center justify-center">
            <SheetTrigger className="w-fit">
              <div className="flex flex-col justify-center items-center w-fit">
                <div>
                  <VscMenu size={35} className="text-white" />
                </div>
                <span className="text-white text-sm font-light">Menu</span>
              </div>
            </SheetTrigger>
            <div className="w-fit justify-self-center">
              <Link href={"/"}>
                <Image
                  src={"/header-logo.svg"}
                  width={65}
                  height={65}
                  alt="logo"
                  unoptimized={true}
                />
              </Link>
            </div>
            <div></div>
          </div>
          <SheetContent>
            <div className="pb-12 p-2">
              <Image
                src={"/header-logo.svg"}
                width={100}
                height={100}
                alt="logo"
                className="bg-deep-green"
              />
            </div>
            <nav className="flex flex-col text-deep-green text-left text-2xl gap-6">
              <Link
                href={"/"}
                className="hover:border hover:border-deep-green p-2"
              >
                HOME
              </Link>
              <Link
                href={"/photos"}
                className="hover:border hover:border-deep-green p-2"
              >
                PHOTOS
              </Link>
              <Link
                href={"/videos"}
                className="hover:border hover:border-deep-green p-2"
              >
                VIDEOS
              </Link>
              <Link
                href={"/kindwords"}
                className="hover:border hover:border-deep-green p-2"
              >
                KIND WORDS
              </Link>
              <Link
                href={"/meet"}
                className="hover:border hover:border-deep-green p-2"
              >
                MEET THE ARTIST
              </Link>
              <Link
                href={"/contact"}
                className="hover:border hover:border-deep-green p-2"
              >
                CONTACT
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Sidebar;
