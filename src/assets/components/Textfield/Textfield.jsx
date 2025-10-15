import styles from './Textfield.module.less';
import ErrorMsg from './ErrorMsg/ErrorMsg';

function Textfield({ id, label, name, errorText, onChange, value, placeholder }) {

/** 
 * label = desired label for the textfield
 * optional = for required or not required fields.
 * error = boolean value for whether there is an error or not
 * errorText = customized text for the error message that appears below.
 */

  return (
    <label 
        className={styles.textLabel}
        htmlFor={id}>
        <span>
            <p className={styles.text}>{label}</p>
            <ErrorMsg text={errorText} />
        </span>
        <input
            className={`${styles.textfield} ${errorText !== '' ? styles.error : ''}`}
            type="text"
            name={name} /** name for input (key) */
            id={id} /** corresponding id for the input */
            value={value} /** value of input - usually state-managed */
            onChange={onChange} /** State-updating function when the value changes */
            placeholder={placeholder}
        />
    </label>
  );
}

export default Textfield

