"use client";

// Visit https://kaif-ui.vercel.app/ for more components like this

import * as React from "react";
import { LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type LoaderButtonProps = {
  isLoading: boolean;
  className?: string;
  buttonVariant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const LoaderButton: React.FC<LoaderButtonProps> = ({
  buttonVariant,
  isLoading,
  className,
  children,
  onClick,
}) => {
  return (
    <Button
      variant={buttonVariant}
      className={className}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
};

export default LoaderButton;
