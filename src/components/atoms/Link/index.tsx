import NextLink from "next/link";

import styles from "./styles.module.scss";
import type LinkProps from "./interface";

export default function Link({
  variant,
  size,
  underline,
  children,
  ...props
}: Readonly<LinkProps>) {
  return (
    <NextLink
      className={styles.link}
      data-variant={variant}
      data-size={size}
      data-underline={underline}
      {...props}
    >
      {children}
    </NextLink>
  );
}

