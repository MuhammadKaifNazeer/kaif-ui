import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { docsOptions } from "../layout.config";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background pt-[5rem]">
      <div className="container flex-1 items-start lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <Sidebar />
        <div>
          {" "}
          <DocsLayout {...docsOptions}>{children}</DocsLayout>
        </div>
      </div>
    </div>
  );
}
