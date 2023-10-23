import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Nav from "./_components/header/Nav";

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "./fonts/GmarketSansTTFMedium.ttf",
  display: "swap",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Nav></Nav>
        {children}
      </body>
    </html>
  );
}
