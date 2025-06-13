import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Thirumagal Ladies Hostel & PG",
    short_name: "Thirumagal Hostel",
    description: "Safe and affordable accommodation for women in Chennai",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#f472b6",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
