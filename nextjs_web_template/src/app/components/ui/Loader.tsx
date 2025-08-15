import React from "react";
import type { LoaderProps } from "../../data/type";

const Loader: React.FC<LoaderProps> = ({
  size = "h-8 w-8",
  color = "border-blue-500",
}) => {
  return (
    <div
      className={`animate-spin rounded-full border-4 border-t-transparent ${size} ${color}`}
    />
  );
};

export default Loader;