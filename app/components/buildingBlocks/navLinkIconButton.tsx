import { SpinnerSmall } from "./spinner";
import Icon from "./icon";
import { NavLink } from "@remix-run/react";
import Flex from "./flex";
import Tooltip, { TooltipPlacement } from "./tooltip";
import { motion } from "framer-motion";

export default function NavIconButton({
  icon,
  containerClassName,
  iconClassName,
  onClick,
  ref,
  isLoading,
  type = "normal",
  tooltipPlacement = "bottom",
  label,
  to,
  target,
}: {
  containerClassName?: string;
  iconClassName?: string;
  icon: React.ComponentType<{ className?: string }>;
  ref?: React.RefObject<HTMLDivElement>;
  onClick?: () => void;
  isLoading?: boolean;
  label?: string;
  tooltipPlacement?: TooltipPlacement;
  isDisabled?: boolean;
  htmlType?: "button" | "submit" | "reset";
  to: string;
  target?: string;

  type?:
    | "normal"
    | "smallNormal"
    | "largeNormal"
    | "negative"
    | "smallNegative"
    | "largeNegative"
    | "unstyled"
    | "smallUnstyled"
    | "largeUnstyled";
}) {
  const buttonClass =
    type === "normal"
      ? "normalButtonStyles"
      : type === "smallNormal"
      ? "smallButtonStyles"
      : type === "largeNormal"
      ? "largeButtonStyles"
      : type === "negative"
      ? "negativeButtonStyles"
      : type === "smallNegative"
      ? "smallNegativeButtonStyles"
      : type === "largeNegative"
      ? "largeNegativeButtonStyles"
      : type === "unstyled"
      ? "unstyledButtonStyles"
      : type === "smallUnstyled"
      ? "smallUnstyledButtonStyles"
      : type === "largeUnstyled"
      ? "largeUnstyledButtonStyles"
      : "normalButtonStyles";

  const displayIconSize =
    type === "normal"
      ? "text-[2.5vh]"
      : type === "smallNormal"
      ? "text-[1.6vh]"
      : type === "largeNormal"
      ? "text-[4vh]"
      : type === "negative"
      ? "text-[2.5vh] "
      : type === "smallNegative"
      ? "text-[1.6vh]"
      : type === "largeNegative"
      ? "text-[4vh]"
      : type === "unstyled"
      ? "text-[2.5vh]"
      : type === "smallUnstyled"
      ? "text-[1.6vh]"
      : type === "largeUnstyled"
      ? "text-[3.5vh]"
      : "text-[1.6vh]";

  const iconButtonSize =
    type === "normal"
      ? "w-[3.5vh] h-[3.5vh]"
      : type === "smallNormal"
      ? "w-[3vh] h-[3vh]"
      : type === "largeNormal"
      ? " w-[6vh] h-[6vh]"
      : type === "negative"
      ? " w-[3.5vh] h-[3.5vh]"
      : type === "smallNegative"
      ? "w-[3vh] h-[3vh]"
      : type === "largeNegative"
      ? " w-[6vh] h-[6vh]"
      : type === "unstyled"
      ? "w-[3.5vh] h-[3.5vh]"
      : type === "smallUnstyled"
      ? "w-[3vh] h-[3vh]"
      : type === "largeUnstyled"
      ? " w-[6vh] h-[6vh]"
      : "text-[2vh] w-[3vh] h-[3vh]";

  return (
    <Tooltip label={label} placement={tooltipPlacement}>
      <NavLink to={to} target={target ? target : undefined}>
        <motion.div
          className={`flex ${containerClassName}`}
          ref={ref}
          whileTap={{ rotate: 30, scale: 0.8, transition: { duration: 0.3 } }}
        >
          <Flex
            onClick={onClick}
            className={`
   ${iconButtonSize}
            ${buttonClass}
             ${containerClassName}`}
          >
            {isLoading ? (
              <SpinnerSmall />
            ) : (
              <Icon
                icon={icon}
                iconClassName={`${displayIconSize} ${iconClassName}`}
                containerClassName={`flex w-full h-full justify-center items-center hover:cursor-pointer`}
              />
            )}
          </Flex>
        </motion.div>
      </NavLink>
    </Tooltip>
  );
}
