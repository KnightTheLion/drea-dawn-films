import React from "react";

interface Video {
  name: string;
  player_embed_url: string;
  link: string;
  uri: string;
  resource_key: string;
  type: string;
  isPlaying?: boolean;
  // Add other properties as needed based on the Vimeo API response
}

export default async function VideoPlayer() {
  const data = await fetch(
    `https://api.vimeo.com/users/${process.env.VIMEO_USER_ID}/albums/${process.env.VIMEO_ALBUM_ID}/videos`,
    {
      headers: {
        Authorization: `Bearer ${process.env.VIMEO_ACCESS_TOKEN}`,
      },
    }
  );
  const videos = await data.json();
  const mainVideo = videos.data[0]; // Assuming the first video is the main one
  console.log("Main Video:", mainVideo);
  return (
    <div>
      <div className="container p-2">
        <div className="grid grid-flow-row drop-shadow-xl p-2 rounded-md bg-white">
          <div className="aspect-video">
            <iframe
              key={mainVideo.uri}
              src={mainVideo.player_embed_url}
              allow="autoplay; fullscreen; picture-in-picture"
              height="100%"
              width="100%"
              title={mainVideo.name}
              loading="lazy"
              className="rounded-lg"
            >
              Your browser does not support the video tag.
            </iframe>
          </div>
        </div>
      </div>
      <div className="w-full h-content grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 container p-2">
        {videos.data.map((video: Video, index: number) => {
          return (
            <div
              className="grid grid-flow-row drop-shadow-xl p-2 rounded-md bg-white"
              key={index}
            >
              <div className="text-deep-green py-2 font-bold text-center">
                {video.name}
              </div>
              <iframe
                src={video.player_embed_url}
                allow="autoplay; fullscreen; picture-in-picture"
                loading="lazy"
                title={video.name}
              >
                Your browser does not support the video tag.
              </iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
}
