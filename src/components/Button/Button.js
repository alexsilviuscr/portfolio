import styles from "./Button.module.scss";

export default function Button({ children, href, type = "button" }) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={styles.button}>
      {children}
    </button>
  );
}
