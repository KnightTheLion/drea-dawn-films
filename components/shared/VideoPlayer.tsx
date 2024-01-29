"use client";
import React from "react";
// import ReactPlayer from 'react-player'
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import videos from "@/app/videos/videos";

const VideoPlayer = () => {
  return (
    <div>
      <div className="container p-2">
      <div className="grid grid-flow-row drop-shadow-xl p-2 rounded-md bg-white">
          <div className="player-wrapper">
            <ReactPlayer
              url="https://player.vimeo.com/video/386172017"
              title="Gatsby Wedding"
              className="react-player"
              playing
              width="100%"
              height="100%"
              controls
            />
          </div>
        </div>
      </div>
    <div className="w-full h-content grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 container p-2">
      {videos.map((video, index) => (
        <div className="grid grid-flow-row drop-shadow-xl p-2 rounded-md bg-white">
          <div className="text-deep-green py-2 font-bold text-center">{video.title}</div>
          <div className="player-wrapper">
            <ReactPlayer
              key={index}
              url={video.url}
              title={video.title}
              className="react-player"
              playing={video.isPlaying}
              width="100%"
              height="100%"
              controls
            />
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default VideoPlayer;
