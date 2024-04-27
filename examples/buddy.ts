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
      "https://p3.9xbud.com/hls/YTozOntzOjY6ImhlYWRlciI7YToxOntpOjA7czo1NToiUmVmZXJlcjpodHRwczovL3d3dy5kYWlseW1vdGlvbi5jb20vZW1iZWQvdmlkZW8veDh3bDJ6MiI7fXM6ODoiaXNfcHJveHkiO3M6NDM6ImhlbGxvLXdvcmxkLXNtYWxsLXdhdGVyZmFsbC0zZWM3LmJpdGlsb3I3MDQiO3M6MzoidXJsIjtzOjIzNDoiaHR0cHM6Ly92b2QuY2YuZG1jZG4ubmV0L3NlYzIoa2xCNUlfTlB1eDJSU09Bd2Q2bjdQTEtWYU1td3RFbGgxVzNpOWxMeVhZNEI4RTBBU3pJbmlqM2FyQi1NaUlpaWFoXzVSSzdPQzFWTHNnWWFTdlRrZGp6dUEzVHNXWlJibzNFQTJ6MHpPU200U3p2VDAzT2ZXajBLZjR5clIyMmxScHNiRDRLNEg0VEpDRENPT2ljZFBnKS92aWRlby8wNTcvMDY0LzUzODQ2MDc1MF9tcDRfaDI2NF9hYWNfMTIubTN1OCNjZWxsPWNmIjt9/c1f14877fb44ee3594cad37ae90da67c-1714221112?ext=mpeg&customName=Real+vs_+City%3A+%22Ein+Spiel_+nah+an+der+Perfektion%22_288",
      "/Users/123sudo/Downloads/video2.mp4",
      {
        connections: 0,
        httpOptions: {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
          },
        },
        maxRetry: 3,
        methodFallback: true,
      }
    );

    const metadata = await dl.metadata();
    console.log("got metadata", metadata);
  } catch (err) {
    console.log("[error]", err);
  }
})();
