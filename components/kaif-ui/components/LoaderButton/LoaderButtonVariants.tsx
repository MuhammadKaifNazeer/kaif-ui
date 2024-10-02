"use client";

import * as React from "react";
import LoaderButton from "@/components/kaif-ui/ui/loaderButton";

export default function LoaderButtonVariants() {
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
      <div className="px-4 py-10 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <LoaderButton
          buttonVariant={"default"}
          onClick={onSubmit}
          isLoading={isLoading}
          className="my-class"
        >
          Loader Button
        </LoaderButton>
        <LoaderButton
          buttonVariant={"outline"}
          onClick={onSubmit}
          isLoading={isLoading}
          className="my-class"
        >
          Loader Button
        </LoaderButton>
        <LoaderButton
          buttonVariant={"secondary"}
          onClick={onSubmit}
          isLoading={isLoading}
          className="my-class"
        >
          Loader Button
        </LoaderButton>
        <LoaderButton
          buttonVariant={"ghost"}
          onClick={onSubmit}
          isLoading={isLoading}
          className="my-class"
        >
          Loader Button
        </LoaderButton>
        <LoaderButton
          buttonVariant={"link"}
          onClick={onSubmit}
          isLoading={isLoading}
          className="my-class"
        >
          Loader Button
        </LoaderButton>
        <LoaderButton
          buttonVariant={"destructive"}
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
