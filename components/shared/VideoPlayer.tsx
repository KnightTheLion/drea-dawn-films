"use client";
import React from "react";
// import ReactPlayer from 'react-player'
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import videos from "@/app/videos/videos";

const VideoPlayer = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-4">
      {videos.map((video, index) => (
        <div>
          <div className="text-deep-green">Hello</div>
          <div className="player-wrapper">
            <ReactPlayer
              key={index}
              url={video.url}
              title={video.title}
              className="react-player"
              playing
              width="100%"
              height="100%"
              controls
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoPlayer;
