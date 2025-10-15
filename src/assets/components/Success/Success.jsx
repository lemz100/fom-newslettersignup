import styles from './Success.module.less';
import Button from '../Button/Button';
import icon from '@/assets/images/icon-success.svg'

function Success({ dismiss, email }) {
  return (
    <section className={styles.success}>
        <section className={styles.content}>
          <article>
            <img src={icon} alt="icon" />
            <p className={styles.title}>Thanks for subscribing!</p>
            <p className={styles.desc}>A confirmation email has been sent to <span>{email}</span>. Please open it and click the button inside to confirm your subscription</p>
          </article>
          <Button text={'Dismiss message'} dismiss={dismiss}/>
        </section>
    </section>
  );
}

export default Success;
