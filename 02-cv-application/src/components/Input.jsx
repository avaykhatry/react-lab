import styles from '../styles/App.module.css'

export function Input({ type, id, label, handleChange, placeholder }) {
  
  return (
    <div className={styles.hero}>
      <label htmlFor={id}>{label}</label>
      <input placeholder={placeholder} onChange={handleChange} id={id} type={type} />
    </div>
  );
}