import styles from "./styles.module.scss";
import LogoProps from "./interface";


export default function Logo({ size }: LogoProps) {
  return (
    <span className={styles.wrapper} data-size={size}>
      eduarda<b>terra {"</>"}</b>
    </span>
  );
}

