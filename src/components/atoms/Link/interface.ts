import { PropsWithChildren } from "react";
import { type LinkProps as NextLinkProps } from "next/link";

type LinkVariantsType = "primary" | "secondary";

type LinkSizesType = "small" | "medium" | "large" | "x-large";

export default interface LinkProps extends PropsWithChildren<NextLinkProps> {
  variant: LinkVariantsType;
  size: LinkSizesType;
  underline?: boolean;
}

