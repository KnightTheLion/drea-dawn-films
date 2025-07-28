import React from "react";
import VideoPlayer from "@/components/shared/VideoPlayer";

export default async function Page() {
  return (
    <section className="my-10 container p-2 grow lg:pt-[210px]">
      <h1 className="text-center text-4xl text-deep-green pt-20  lg:hidden">
        Video Gallery
      </h1>
      <p className="text-deep-green text-center py-4 border-b border-deep-green lg:hidden">
        Browse through some of my video work!
      </p>
      <div>
        <VideoPlayer />
      </div>
    </section>
  );
}
