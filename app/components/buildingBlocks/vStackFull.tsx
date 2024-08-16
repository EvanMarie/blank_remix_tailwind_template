import React from "react";
import VStack from "./vStack";

interface VStackFullProps {
  children: React.ReactNode;
  className?: string;
  gap?: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  align?: "items-start" | "items-center" | "items-end";
  tabIndex?: number;
}

const VStackFull = React.forwardRef<HTMLDivElement, VStackFullProps>(
  (
    {
      children,
      className = "",
      gap = "",
      onClick,
      style = {},
      align = "items-center",
      tabIndex = -1,
    },
    ref
  ) => {
    return (
      <VStack
        ref={ref}
        className={`w-full ${gap} ${className}`}
        onClick={onClick}
        style={style}
        align={align}
        tabIndex={tabIndex}
      >
        {children}
      </VStack>
    );
  }
);

export default VStackFull;
