import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "CITE Technical Institute Inc.",
  description: "Providing opportunities to the less privileged youth.",
};

function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden overflow-y-scroll">
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  )
}

export default RootLayout;
