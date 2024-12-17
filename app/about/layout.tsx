import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>{children}</div>
  )
}

export default AboutLayout;
