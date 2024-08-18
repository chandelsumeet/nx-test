import styles from './button.module.css';
export function Button() {
  return (
    <div className={styles['container']}>
      <button>Hello</button>
    </div>
  );
}
export default Button;
