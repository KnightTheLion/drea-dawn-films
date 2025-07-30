"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import ContactForm from "./ContactForm";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const logoStyle = {
    opacity: "75%",
    height: "120px",
    width: "auto",
  };

  const linkHoverStyle =
    "hover:text-[17px] transition-all duration-500 ease-in-out";

  const pathname = usePathname();

  return (
    <div className="drop-shadow-2xl py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full items-center px-2 md:px-6 justify-center">
        {/* LEFT SIDE / 2nd ON MOBILE */}
        <nav
          className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full items-center justify-end order-2 md:order-1 text-right md:text-center content"
          aria-label="Primary navigation"
        >
          <div>
            <Link
              className={linkHoverStyle}
              href={`${pathname !== "/photos" ? "/photos" : "/"}`}
            >{`
              ${pathname !== "/photos" ? "PHOTOS" : "HOME"}`}</Link>
          </div>
          <div>
            <Link
              className={linkHoverStyle}
              href={`${pathname !== "/videos" ? "/videos" : "/"}`}
            >{`
              ${pathname !== "/videos" ? "VIDEOS" : "HOME"}`}</Link>
          </div>
          <div>
            <Link
              className={linkHoverStyle}
              href={`${pathname !== "/kindwords" ? "/kindwords" : "/"}`}
            >{`${pathname !== "/kindwords" ? "KIND WORDS" : "HOME"}`}</Link>
          </div>
        </nav>

        {/* MIDDLE / TOP ON MOBILE */}
        <div className="flex justify-end md:justify-self-center order-1 md:order-2 md:w-fit">
          <Link href={"/"}>
            <Image
              src="/header-logo.svg"
              alt="Drea Dawn Logo"
              width={120.82}
              height={144.79}
              style={logoStyle}
              loading="eager"
            />
          </Link>
        </div>

        {/* RIGHT SIDE / BOTTOM ON MOBILE */}
        <nav
          className="grid grid-cols-1 md:grid-cols-2 md:justify-evenly gap-4 w-full items-center order-3 text-right md:text-center"
          aria-label="Secondary navigation"
        >
          <div>
            <Link
              className={linkHoverStyle}
              href={`${pathname !== "/meet" ? "/meet" : "/"}`}
            >{`
              ${pathname !== "/meet" ? "MEET THE ARTIST" : "HOME"}`}</Link>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                aria-haspopup="dialog"
                aria-controls="contact-dialog"
                aria-label="Open contact form"
                className="text-[16px] bg-transparent font-normal p-0 m-0 rounded-none h-fit w-fit place-self-end md:place-self-center hover:bg-transparent hover:text-[17px] transition-all duration-300 ease-in-out"
              >
                CONTACT
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="sr-only">Contact</DialogTitle>
                <DialogDescription className="sr-only">
                  Fill out the form below to get in touch with Drea Dawn Photo +
                  Films.
                </DialogDescription>
              </DialogHeader>
              <ContactForm onSuccess={() => setOpen(false)} />
            </DialogContent>
          </Dialog>
        </nav>
      </div>
    </div>
  );
}
