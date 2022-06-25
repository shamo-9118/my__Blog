import type { ButtonProps } from "@mantine/core";
// eslint-disable-next-line no-restricted-imports
import { Button as MantineButton } from "@mantine/core";
import { cloneElement, forwardRef } from "react";

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps<"button" | "a"> & { dent?: boolean }
>(({ dent, sx, ...props }, ref) => {
  return cloneElement(<MantineButton />, {
    sx: {
      ...sx,
      "&:not(:disabled):active": dent ? undefined : { transform: "none" },
    },
    ref,
    ...props,
  });
});

Button.displayName = "Button";