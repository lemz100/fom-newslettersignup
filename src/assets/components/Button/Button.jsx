import styles from './Button.module.less';

function Button({ text, dismiss = null }) {

  return (
    <button 
      type='submit'
      className={styles.button}
      onClick={dismiss}
    >
      {text}
    </button>
  );
}

export default Button;
