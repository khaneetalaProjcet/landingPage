import localFont from "next/font/local";
import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const modam = localFont({
  src: [
    {
      path: "../assets/fonts/ModamFaNumWeb-ExtraLight.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/ModamWeb-ExtraLight.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/ModamFaNumWeb-Light.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/ModamWeb-Light.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/ModamFaNumWeb-Regular.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/ModamWeb-Regular.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/ModamFaNumWeb-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/ModamWeb-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/ModamFaNumWeb-Black.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/ModamWeb-Black.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/ModamFaNumWeb-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/ModamWeb-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/ModamFaNumWeb-SemiBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/ModamWeb-SemiBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-modam",
});
