import { MouseEventHandler } from "react";
import HStack from "./hStack";
import FlexFull from "./flexFull";
import BouncingDots from "../specialty/bouncingDots";
import Icon from "./icon";
import { motion } from "framer-motion";
import Text from "./text";

export type ButtonType =
  | "normal"
  | "smallNormal"
  | "largeNormal"
  | "negative"
  | "smallNegative"
  | "largeNegative"
  | "unstyled"
  | "smallUnstyled"
  | "largeUnstyled";

export default function Button({
  className,
  buttonText = "",
  padding = "px-[1vh] py-[0px]",
  onClick,
  iconLeft,
  iconRight,
  ref,
  htmlType = "button",
  iconStyle,
  isLoading,
  isDisabled,
  type = "normal",
  width = "w-fit",
  height,
  textStroke = "text-stroke-0-900 hover:text-stroke-5-900",
}: {
  className?: string;
  buttonText?: string;
  padding?: string;
  ref?: React.MutableRefObject<HTMLButtonElement | null>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  iconLeft?: React.ComponentType<{ className?: string }>;
  iconRight?: React.ComponentType<{ className?: string }>;
  iconStyle?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  htmlType?: "button" | "submit" | "reset";
  width?: string;
  height?: string;
  textStroke?: string;
  type?:
    | "normal"
    | "smallNormal"
    | "negative"
    | "smallNegative"
    | "unstyled"
    | "smallUnstyled";
}) {
  const buttonClass =
    type === "normal"
      ? "normalButtonStyles"
      : type === "smallNormal"
      ? "smallButtonStyles"
      : type === "negative"
      ? "negativeButtonStyles"
      : type === "smallNegative"
      ? "smallNegativeButtonStyles"
      : type === "unstyled"
      ? "unstyledButtonStyles"
      : "smallUnstyledButtonStyles";

  const buttonHeight = height
    ? height
    : type === "normal"
    ? "h-[3.5vh]"
    : type === "smallNormal"
    ? "h-[2.6vh]"
    : type === "negative"
    ? "h-[3.5vh]"
    : type === "smallNegative"
    ? "h-[2.6vh]"
    : type === "unstyled"
    ? "h-[3.5vh]"
    : "h-[2.6vh]";

  const displayIconSize =
    type === "normal"
      ? "text-[2.5vh]"
      : type === "smallNormal"
      ? "text-[1.7vh]"
      : type === "negative"
      ? "text-[2.3vh]"
      : type === "smallNegative"
      ? "text-[1.7vh]"
      : type === "unstyled"
      ? "text-[2.3vh]"
      : "text-[1.7vh]";

  const fontSize =
    type === "normal"
      ? "text-[2.1vh]"
      : type === "smallNormal"
      ? "text-[1.5vh]"
      : type === "negative"
      ? "text-[2.1vh]"
      : type === "smallNegative"
      ? "text-[1.5vh]"
      : type === "unstyled"
      ? "text-[2.1vh]"
      : "text-[1.5vh]";

  // Combine all classes and include conditional classes for disabled state
  const combinedClasses = `hover:cursor-pointer ${buttonClass} ${width} ${buttonHeight} ${className} ${padding} font-500 relative transition-400 ${
    isDisabled ? "opacity-40 cursor-not-allowed" : ""
  }`;

  return (
    <motion.button
      className="hover:cursor-pointer"
      onClick={!isDisabled ? onClick : undefined}
      disabled={isDisabled}
      type={htmlType}
      ref={ref}
      whileHover={{ scale: 1.01, rotate: -1 }}
      whileTap={{ scale: 0.97, rotate: 1 }}
    >
      <HStack
        className={combinedClasses}
        style={{
          transition:
            "background-color 0.4s ease-in-out, color 0.4s ease-in-out, border-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out, text-shadow 0.4s ease-in-out",
        }}
      >
        {isLoading &&
          buttonText !== "" &&
          type !== "unstyled" &&
          type !== "smallUnstyled" && (
            <FlexFull className="absolute top-0 left-0 h-full justify-center items-center z-10">
              <BouncingDots dotCount={3} color="white" dotSize={7} speed="3s" />
            </FlexFull>
          )}

        {iconLeft && (
          <Icon
            icon={iconLeft}
            iconClassName={`${displayIconSize} ${iconStyle}`}
          />
        )}
        <Text className={`${textStroke} ${fontSize} text-nowrap`}>
          {buttonText}
        </Text>
        {iconRight && (
          <Icon
            icon={iconRight}
            iconClassName={`${displayIconSize} ${iconStyle}`}
          />
        )}
      </HStack>
    </motion.button>
  );
}
