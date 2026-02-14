import type { Metadata, Viewport } from "next";

export const siteMetadata: Metadata = {
  title: "Jonathan Amorim - Portfólio",
  description: "Portfólio profissional de Jonathan Amorim — Full Stack Developer.",
  authors: [{ name: "Jonathan" }],
  robots: "index, follow",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/android-chrome-192x192.png', type: 'image/png', sizes: '192x192' },
    ],
      shortcut: ['/favicon.ico'],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
  manifest: '/site.webmanifest',
};

export const siteViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};