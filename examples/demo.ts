/*
 *  You can import this module by using:
 *     import EasyDl from "easydl";
 *                 or
 *    const EasyDl = require('easydl');
 */
import EasyDl from "../dist";

(async () => {
  try {
    const dl = new EasyDl(
      "https://www.w3schools.com/html/mov_bbb.mp4",
      "/Users/123sudo/Downloads/video2.mp4",
      {
        connections: 10,
        httpOptions: {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
          },
        },
        maxRetry: 3,
      }
    )
      .on("metadata", (metadata) => {
        console.log(metadata);
      })
      .on("progress", (progress) => {
        console.log(progress);
      })
      .on("end", () => {
        console.log("Download completed");
      })
      .start();

    // setTimeout(() => {
    //   console.log("pausing");
    //   dl.destroy();
    // }, 15000);

    // console.lo
  } catch (err) {
    console.log("[error]", err);
  }
})();
