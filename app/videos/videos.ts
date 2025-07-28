// // let Vimeo = require("vimeo").Vimeo;
// // let client = new Vimeo(
// //   process.env.VIMEO_CLIENT_ID,
// //   process.env.VIMEO_CLIENT_SECRET,
// //   process.env.VIMEO_ACCESS_TOKEN
// // );

// // interface VimeoRequestOptions {
// //   method: string;
// //   path: string;
// // }

// // interface VimeoError {
// //   error: string;
// //   developer_message?: string;
// //   error_code?: number;
// // }

// // type VimeoCallback = (
// //   error: VimeoError | null,
// //   body: any,
// //   status_code: number,
// //   headers: Record<string, string>
// // ) => void;

// // client.request(
// //   {
// //     method: "GET",
// //     path: "/tutorial",
// //   } as VimeoRequestOptions,
// //   function (
// //     error: VimeoError | null,
// //     body: any,
// //     status_code: number,
// //     headers: Record<string, string>
// //   ): void {
// //     if (error) {
// //       console.log(error);
// //     }
// //     console.log(body);
// //   }
// // );
// import { NextResponse } from "next/server";

// const Vimeo = require("vimeo").Vimeo;

// const client = new Vimeo(
//   process.env.VIMEO_CLIENT_ID,
//   process.env.VIMEO_CLIENT_SECRET,
//   process.env.VIMEO_ACCESS_TOKEN
// );

// export async function GET() {
//   const data = await new Promise((resolve, reject) => {
//     interface VimeoRequestOptions {
//       method: string;
//       path: string;
//     }

//     interface VimeoError {
//       error: string;
//       developer_message?: string;
//       error_code?: number;
//     }

//     interface VimeoVideo {
//       uri: string;
//       name: string;
//       description?: string;
//       link: string;
//       [key: string]: any;
//     }

//     interface VimeoVideosResponse {
//       total: number;
//       page: number;
//       per_page: number;
//       paging: Record<string, string>;
//       data: VimeoVideo[];
//     }

//     client.request(
//       {
//         method: "GET",
//         path: "/tutorial",
//       } as VimeoRequestOptions,
//       (error: VimeoError | null, body: VimeoVideosResponse) => {
//         if (error) console.log(error);
//         else console.log(body);
//       }
//     );
//   });

//   return NextResponse.json(data);
// }

// const videos = [
//   {
//     url: "https://player.vimeo.com/video/282712715",
//     title: "Marjorie + Nick // Roan Mountain",
//     isPlaying: false,
//   },
//   {
//     url: "https://player.vimeo.com/video/251403696",
//     title: "Caleb + Kristy // Boone Mountain Elopement",
//     isPlaying: false,
//   },
//   {
//     url: "https://player.vimeo.com/video/236013134",
//     title: "Dre + Ray // Roan Mountain, TN Elopement",
//     isPlaying: false,
//   },
//   {
//     url: "https://player.vimeo.com/video/638151690",
//     title: "The Olson Family",
//     isPlaying: false,
//   },
//   {
//     url: "https://player.vimeo.com/video/679065617",
//     title: "Mandy + Arlin",
//     isPlaying: false,
//   },
// ];

// export default videos;
