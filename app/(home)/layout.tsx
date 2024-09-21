import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar/Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}