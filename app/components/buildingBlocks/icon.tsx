import React from "react";

interface IconProps {
  icon: React.ComponentType<{ className?: string; tabIndex?: number }>;
  containerClassName?: string;
  pos?: "absolute" | "relative" | "fixed" | "sticky" | "static" | "inherit";
  t?: string;
  l?: string;
  r?: string;
  b?: string;
  iconClassName?: string;
  hoverCursor?: string;
  w?: string;
  h?: string;
  rounded?: string;
  onClick?: () => void;
  tabIndex?: number;
}

export default function Icon({
  icon: IconComponent,
  tabIndex = -1,
  containerClassName = "",
  iconClassName = "",
  // hoverCursor = "hover:cursor-default",
  hoverCursor = "cursor-pointer",
  w = "w-fit",
  h = "h-fit",
  pos,
  t,
  l,
  r,
  b,
  rounded = "rounded-xs",
  onClick,
}: IconProps) {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      onClick && onClick();
    }
  };

  return (
    <div
      role="button"
      tabIndex={tabIndex}
      className={`${rounded} ${w} ${h} ${pos} ${t} ${b} ${r} ${l} ${containerClassName} ${hoverCursor}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      <IconComponent
        className={`${rounded} ${iconClassName} ${hoverCursor}`}
        tabIndex={tabIndex}
      />
    </div>
  );
}
