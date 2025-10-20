export function Button({ onClick, children, className }) {
  return (
    <div>
      <button 
        onClick={onClick}
        className={
          `border px-2 rounded-xl cursor-pointer ${className}`
        }>
          {children}
        </button>
    </div>
  );
}