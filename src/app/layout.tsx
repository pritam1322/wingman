import Header from "@/components/sections/Header";
import SideBar from "@/components/sections/SideBar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wingman App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <div className="grid grid-cols-[60px_1fr] grid-rows-[auto_1fr] min-h-screen">
        <SideBar />
        <div>
          <Header />
          {children}
        </div>
      </div>
      </body>
    </html>
  );
}
