"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';


export default function Navbar() {
  const logoStyle = {
    opacity: "75%",
    height: 'auto',
    width: 'auto',
  };

  const pathname = usePathname()
  
  return (
    <div className="drop-shadow-2xl">
      {/* LEFT SIDE / 2nd ON MOBILE */}
      <div className="py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full items-center px-2 lg:px-6 justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full items-center justify-end order-2 lg:order-1 text-right lg:text-center content">
            <div><Link href={`${pathname !== '/photos' ? '/photos' : '/'}`}>{`${pathname !== '/photos' ? 'PHOTOS' : 'HOME'}`}</Link></div>
            <div><Link href={`${pathname !== '/videos' ? '/videos' : '/'}`}>{`${pathname !== '/videos' ? 'VIDEOS' : 'HOME'}`}</Link></div>
            <div><Link href={`${pathname !== '/kindwords' ? '/kindwords' : '/'}`}>{`${pathname !== '/kindwords' ? 'KIND WORDS' : 'HOME'}`}</Link></div>
          </div>
          {/* MIDDLE / TOP ON MOBILE */}
          <div className="flex justify-end lg:justify-self-center order-1 lg:order-2 lg:w-fit">
          <Link href={'/'}>
            <Image
              src="/header-logo.svg"
              alt="Drea Dawn Logo"
              width={130}
              height={172}
              unoptimized={true}
              style={logoStyle}
              priority
            />
            </Link>
          </div>
          {/* RIGHT SIDE / BOTTOM ON MOBILE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-evenly gap-4 w-full items-center order-3 text-right lg:text-center">
            <div><Link href={`${pathname !== '/meet' ? '/meet' : '/'}`}>{`${pathname !== '/meet' ? 'MEET THE ARTIST' : 'HOME'}`}</Link></div>
            <div><Link href={`${pathname !== '/contact' ? '/contact' : '/'}`}>{`${pathname !== '/contact' ? 'CONTACT' : 'HOME'}`}</Link></div>
          </div>
        </div>
      </div>
    </div>
  );
}
