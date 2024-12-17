import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
};

function FaqLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>{children}</div>
  )
}

export default FaqLayout;
