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
  // Fetch the main video
  const mainVideoData = await fetch(
    `https://api.vimeo.com/users/${process.env.VIMEO_USER_ID}/albums/${process.env.VIMEO_MAIN_VIDEO}/videos`,
    {
      headers: {
        Authorization: `Bearer ${process.env.VIMEO_ACCESS_TOKEN}`,
      },
    }
  );
  const mainVideo = await mainVideoData.json();
  console.log(mainVideo);
  // Videos under the main video
  const secondaryVideos = await fetch(
    `https://api.vimeo.com/users/${process.env.VIMEO_USER_ID}/albums/${process.env.VIMEO_ALBUM_ID}/videos`,
    {
      headers: {
        Authorization: `Bearer ${process.env.VIMEO_ACCESS_TOKEN}`,
      },
    }
  );
  const videos = await secondaryVideos.json();

  return (
    <div>
      <div className="container p-2">
        <div className="grid grid-flow-row drop-shadow-xl p-2 rounded-md bg-white">
          <div className="aspect-video">
            {mainVideo.data.map((video: Video, index: number) => {
              return (
                <iframe
                  key={index}
                  src={video.player_embed_url}
                  allow="autoplay; fullscreen; picture-in-picture"
                  height="100%"
                  width="100%"
                  title={video.name}
                  loading="lazy"
                  className="rounded-lg"
                >
                  Your browser does not support the video tag.
                </iframe>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full h-content grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 container p-2 aspect-video">
        {videos.data.map((video: Video, index: number) => {
          return (
            <div
              className="grid grid-flow-row drop-shadow-xl p-2 rounded-md bg-white"
              key={index}
            >
              <iframe
                src={video.player_embed_url}
                allow="autoplay; fullscreen; picture-in-picture"
                loading="lazy"
                title={video.name}
                className="rounded-md w-full h-full aspect-video"
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
