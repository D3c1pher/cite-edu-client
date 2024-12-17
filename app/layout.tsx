import type { Metadata } from "next";
import {Footer, Navbar} from "@/components";
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
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout;
