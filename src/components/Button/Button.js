import styles from './Button.module.scss';

export default function Button({ children }) {
    return (
    <button type="button" className={styles.button}>
      {children}
    </button>
  );
}