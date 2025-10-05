import styles from '../styles/App.module.css';

export function Button({ handleClick, children }) {
  return (
  <button
    onClick={handleClick}
    className={styles.descBtn}
  >
    {children}
  </button>
  )
}