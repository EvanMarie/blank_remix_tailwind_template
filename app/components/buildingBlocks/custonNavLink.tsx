import { NavLink, useLocation } from "@remix-run/react";

import Box from "./box";
import Text from "./text";

interface CustomNavLinkProps {
  to: string;
  linkText?: string;
  textClassName?: string;
  activeStyles?: string;
  inactiveStyles?: string;
  useHash?: boolean;
  useActive?: boolean;
  className?: string;
}

export default function CustomNavLink({
  to,
  linkText,
  textClassName = "text-col-800 text-stroke-6-800 hover:textGlow hover:transition-300",
  className,
}: CustomNavLinkProps) {
  const hash = useLocation().hash;
  console.log(hash);

  return (
    <Box className={className}>
      <NavLink to={to} className={className}>
        <Text className={textClassName}>{linkText}</Text>
      </NavLink>
    </Box>
  );
}
