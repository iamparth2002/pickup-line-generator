import type { Metadata } from "next";
import { Inter,Grand_Hotel } from "next/font/google";
import "./globals.css";
import { PickupLineContext } from "@/context/PickupLinesContext";

const inter = Grand_Hotel({weight: '400', subsets: ["latin","latin-ext"] });

export const metadata: Metadata = {
  title: "Pickup line generator",
  description: "Made by Parth",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
