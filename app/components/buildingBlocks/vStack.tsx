import React from "react";

interface VStackProps {
  children?: React.ReactNode;
  gap?: string;
  style?: React.CSSProperties;
  align?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  tabIndex?: number;
}

// Use React.forwardRef to forward the ref to the div element
const VStack = React.forwardRef<HTMLDivElement, VStackProps>(
  (
    {
      children,
      gap = "gap-2",
      className = "",
      style = {},
      align = "items-center",
      onClick,
      tabIndex = -1,
    },
    ref
  ) => {
    return (
      <div
        tabIndex={tabIndex}
        onClick={onClick}
        className={`flex flex-col ${align} ${gap} ${className}`}
        ref={ref} // The forwarded ref is applied here
        style={style}
      >
        {children}
      </div>
    );
  }
);

VStack.displayName = "VStack"; // Assigning a display name for debugging purposes

export default VStack;
