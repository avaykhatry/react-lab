import styles from '../styles/App.module.css';

export function Button({ handleClick, style, children }) {
  return (
  <button
    onClick={handleClick}
    style={style}
    className={styles.descButton}
  >
    {children}
  </button>
  )
}