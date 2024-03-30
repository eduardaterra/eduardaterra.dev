import { type HTMLAttributes } from "react";

type LogoVariantsType = "small" | "medium" | "large";

export default interface LogoProps extends HTMLAttributes<HTMLSpanElement> {
  size: LogoVariantsType;
}

