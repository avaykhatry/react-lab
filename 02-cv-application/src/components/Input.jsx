import styles from './Input.module.css'

export function Input({ type, id, label, handleChange, placeholder, style }) {
  
  return (
    <div className={styles.inputComponent}>
      <label htmlFor={id}>{label}</label>
      <input style={style} className={styles.mainInput} placeholder={placeholder} onChange={handleChange} id={id} type={type} />
    </div>
  );
}