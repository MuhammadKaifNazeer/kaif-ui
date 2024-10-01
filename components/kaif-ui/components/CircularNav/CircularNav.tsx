"use client";

import { useState } from "react";
import CircularNavigation from "@/components/kaif-ui/ui/CircularNavigation";
import {
  Home,
  Film,
  Music,
  Trophy,
  FileText,
  Settings,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", icon: Home, href: "#" },
  { name: "Movies", icon: Film, href: "#" },
  { name: "Music", icon: Music, href: "#" },
  { name: "Sports", icon: Trophy, href: "#" },
  { name: "News", icon: FileText, href: "#" },
  { name: "Settings", icon: Settings, href: "#" },
  { name: "Search", icon: Search, href: "#" },
];

export default function CircularNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("clicked", isOpen);
  };

  return (
    <>
      <div className="h-[50vh] w-full flex items-center justify-center">
        <Button onClick={toggleMenu}>Open Navigation</Button>
      </div>
      <CircularNavigation
        navItems={navItems}
        isOpen={isOpen}
        toggleMenu={toggleMenu}
      />
    </>
  );
}
