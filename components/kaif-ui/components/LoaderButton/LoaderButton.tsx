"use client";

import * as React from "react";
import LoaderButton from "@/components/kaif-ui/ui/loaderButton";

export default function LoaderButtonDemo() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <>
      <div className="h-[50vh] w-full flex items-center justify-center">
        <LoaderButton
          buttonVariant={"default"}
          onClick={onSubmit}
          isLoading={isLoading}
          className="my-class"
        >
          Loader Button
        </LoaderButton>
      </div>
    </>
  );
}
