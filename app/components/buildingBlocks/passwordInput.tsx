import React, { type ReactNode, type RefObject } from "react";

interface BoxProps {
  children?: ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  style?: React.CSSProperties;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  ref?: RefObject<HTMLDivElement>;
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  tabIndex?: number;
}

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      children,
      onClick,
      onKeyDown,
      style = {},
      className = "",
      onMouseEnter,
      onMouseLeave,
      tabIndex = 0,
    },
    ref
  ) => {
    return (
      <div
        role="button"
        tabIndex={tabIndex}
        className={`${className} hover:cursor-default`}
        style={{ ...style }}
        onClick={onClick}
        onKeyDown={onKeyDown}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

Box.displayName = "Box";

export default Box;
