import React from "react";

const DotsBackgroundModified: React.FC = () => {
  return (
    <>
      <div className="h-screen w-full bg-white bg-[radial-gradient(currentColor_4px,_transparent_1px)] bg-[length:40px_40px] text-neutral-300 dark:bg-black dark:text-zinc-900">
        {/* Your content goes here */}

        {/* dummy content */}
        <div className="h-full w-full relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 hidden sm:flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <p className="text-4xl sm:text-5xl font-bold relative bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-300 from-neutral-600 to-neutral-800 py-8 z-[40] text-center">
            Dots Background Modified
          </p>
        </div>
      </div>
    </>
  );
};

export default DotsBackgroundModified;