import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "TJF Motion Pictures",
  description:
    "Elevating Short Filmmaking to Art: Our Dedicated Team of Writers, Actors, Technicians, and Storytellers Craft Compelling Narratives with Precision and Passion.",
  keywords:
    "short films, filmmaking, storytelling, cinematography, film production",
  author: "Mukesh Sharma",
  image: "./icon.png",
  url: "https://tjf-motion-pictures.vercel.app",
  type: "website",
  ogTitle: "TJF Motion Pictures",
  ogDescription:
    "Elevating Short Filmmaking to Art: Our Dedicated Team of Writers, Actors, Technicians, and Storytellers Craft Compelling Narratives with Precision and Passion.",
  ogImage: "./icon.png",
  twitterTitle: "TJF Motion Pictures",
  twitterDescription:
    "Elevating Short Filmmaking to Art: Our Dedicated Team of Writers, Actors, Technicians, and Storytellers Craft Compelling Narratives with Precision and Passion.",
  twitterImage: "./icon.png",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./icon.png" type="image/png" />
      </head>
      <body>
        <Providers>{children}</Providers>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
