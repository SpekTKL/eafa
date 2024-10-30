import type { Metadata } from "next";
import "./globals.css";
import {Open_Sans} from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap"
})

export const metadata: Metadata = {
  title: "Emirates American Football Alliance",
  description: "EAFA. The home of American Football in the UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
