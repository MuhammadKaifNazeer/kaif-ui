"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

interface NavItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

interface CircularNavigationProps {
  navItems: NavItem[];
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function CircularNavigation({
  navItems,
  isOpen,
  toggleMenu,
}: CircularNavigationProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <>
      {isOpen && (
        <div className=" fixed h-screen w-full flex items-center justify-center bg-background z-[9000]">
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[10000]"
            onClick={toggleMenu}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative aspect-square w-[420px] max-w-screen rounded-full flex items-center justify-center"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow:
                  "inset 2px 2px 2px rgba(255,255,255,0.5), inset -1px -1px 1px rgba(255,255,255,0.3)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={toggleMenu}
                className="absolute aspect-square flex items-center justify-center w-12 h-12 rounded-full bg-white text-black z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {navItems.map((item, index) => {
                const Icon = item.icon;
                const angle = (360 / navItems.length) * index;

                return (
                  <div
                    key={item.name}
                    className="absolute"
                    style={{
                      transform: `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`,
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`flex flex-col items-center justify-center w-20 h-20 aspect-square rounded-full transition-colors duration-200 ${
                        hoveredItem === item.name
                          ? "bg-white text-black"
                          : "text-white"
                      }`}
                      onMouseEnter={() => setHoveredItem(item.name)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <Icon className="w-6 h-6 mb-1" />
                      <span
                        className="text-xs font-medium"
                        style={{ textDecoration: "none" }}
                      >
                        {item.name}
                      </span>
                    </Link>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
}
