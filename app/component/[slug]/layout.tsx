import type { ReactNode } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="bg-background pt-[5rem]">
        <div className="container flex-1 items-start lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <Sidebar />
          <div className="container">
            <div className="py-9">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
