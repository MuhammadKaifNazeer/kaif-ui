import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar/Navbar";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
