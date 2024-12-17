import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses",
};

function CoursesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>{children}</div>
  )
}

export default CoursesLayout;
