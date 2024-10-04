"use client";

import React from "react";
import ScrollVelocity from "@/components/kaif-ui/ui/scroll-velocity";

export function ScrollVelocityText() {
  return (
    <div className="w-full">
      <div className="flex flex-col space-y-5 py-10">
        <ScrollVelocity velocity={5}>
          Scroll Velocity Text - Scroll Velocity Text
        </ScrollVelocity>
      </div>
    </div>
  );
}
