import React from "react";

const Button = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full my-6">
        <button className="bg-black hover:bg-black/90 dark:bg-white dark:hover:bg-white/90 text-white dark:text-black px-3 py-1 rounded transition duration-300 text-sm">
          Button
        </button>
      </div>
    </>
  );
};

export default Button;
