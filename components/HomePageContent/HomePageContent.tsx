import React from "react";
import { CTA } from "../CTA/CTA";
import TechStack from "./components/techstack";
import ContributorsComponent from "./components/contributors";
import Features from "./components/features";
import Creators from "./components/creators";
import End from "./components/end";

export default function HomePageContent() {
  return (
    <>
      <main>
        <div className="container">
          <div className="border sm:w-[80%] m-auto z-10 mt-5">
            <Features />
            <ShapratorHorizontal />
            <TechStack />
            <ShapratorHorizontal />
            <ContributorsComponent />
            <ShapratorHorizontal />
            <Creators />
            <ShapratorHorizontal />
            <div className="overflow-hidden">
              <CTA />
            </div>
            <ShapratorHorizontal />
            <End />
          </div>
          <div className="h-10" />
        </div>
      </main>
    </>
  );
}

const ShapratorHorizontal = () => {
  return <div className="border-t w-full" />;
};
