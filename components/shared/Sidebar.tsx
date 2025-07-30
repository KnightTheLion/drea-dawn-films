"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { VscMenu } from "react-icons/vsc";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "@/components/ui/button";
import ContactForm from "./ContactForm";

const Sidebar = () => {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <div className="z-10 min-w-full lg:hidden lg:grid-cols-3 grid-cols grid fixed -top-1 backdrop-blur-sm p-2 bg-deep-green">
      <div className="min-w-full z-[1000] text-deep-green">
        <Sheet open={open} onOpenChange={setOpen}>
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
            <VisuallyHidden asChild>
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
                <SheetDescription>
                  Navigate through the site using the links below.
                </SheetDescription>
              </SheetHeader>
            </VisuallyHidden>
            <div className="pb-10">
              <Image
                src={"/header-logo.svg"}
                width={70}
                height={70}
                alt="logo"
                className="bg-deep-green"
              />
            </div>
            <nav className="flex flex-col text-deep-green text-left text-2xl gap-4">
              <Link
                href={"/"}
                className="hover:border hover:border-deep-green py-2"
              >
                HOME
              </Link>
              <Link
                href={"/photos"}
                className="hover:border hover:border-deep-green py-2"
              >
                PHOTOS
              </Link>
              <Link
                href={"/videos"}
                className="hover:border hover:border-deep-green py-2"
              >
                VIDEOS
              </Link>
              <Link
                href={"/kindwords"}
                className="hover:border hover:border-deep-green py-2"
              >
                KIND WORDS
              </Link>
              <Link
                href={"/meet"}
                className="hover:border hover:border-deep-green py-2"
              >
                MEET THE ARTIST
              </Link>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="hover:border hover:border-deep-green bg-white text-deep-green text-left text-2xl font-normal flex items-center justify-start h-[48px] p-0 rounded-none">
                    CONTACT
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <VisuallyHidden asChild>
                    <DialogHeader>
                      <DialogTitle>Contact</DialogTitle>
                      <DialogDescription>
                        Fill out the form below to get in touch with Drea Dawn
                        Photo + Films.
                      </DialogDescription>
                    </DialogHeader>
                  </VisuallyHidden>
                  <ContactForm onSuccess={() => setOpen(false)} />
                </DialogContent>
              </Dialog>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Sidebar;
