import styles from './Button.module.scss';

export default function Button({ children, type = "button"  }) {
    return (
      <button type={type} className={styles.button}>
        {children}
      </button>
  );
}