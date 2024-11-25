import type { Metadata } from "next";
import {Inter as FontSans} from "next/font/google"
import "./globals.css";
import {cn} from "@/shared/ui/utils"


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(`min-h-screen bg-background font-sans antialiased bg-red-200`, fontSans.variable)}
      >
        {children}
      </body>
    </html>
  );
}
