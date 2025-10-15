import './App.less';
import Button from './assets/components/Button/Button'
import Success from './assets/components/Success/Success'
import Textfield from './assets/components/Textfield/Textfield';
import listIcon from './assets/images/icon-list.svg';
import imgMobile from './assets/images/illustration-sign-up-mobile.svg';
import imgTablet from './assets/images/illustration-sign-up-tablet.svg';
import imgDesktop from './assets/images/illustration-sign-up-desktop.svg';
import { useState } from 'react';

function App() {
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: ''
  })
  const [email, setEmail] = useState('');

  function handleSubmitted() {
    setSubmitted(prev => !prev);
  }

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  /** Form validation method - includes error messages for each form input */
  function validateForm() {
    let err = '';
    const emptyErr = 'This field is required';

    if(formData.email === '') {
        err = emptyErr;
      } else if((validateEmail(formData.email)) === false) {
        err = 'Please enter a valid email address';
      }
    setError(err);

    // Returns true if newErrors is empty (no errors - can be submitted.)
    return err.length === 0;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  function handleSubmit(e) {
    e.preventDefault();
    const isValid = validateForm();
    if(isValid) {
      /** Form + error resets */
      setEmail(formData.email);
      setFormData({ email: "" });
      setError('');
      setSubmitted(true);
  }
}

  return (
    <>
    {
      submitted ?
    <Success dismiss={handleSubmitted} email={email}/>
      :
    <main>
      <section className="main-cont">
        <picture>
          <source media="(max-width: 767px)" srcSet={imgMobile} />
          <source media="(max-width: 1439px)" srcSet={imgTablet} />
          <img src={imgDesktop} alt="hero" />
        </picture>
        <section className="container">
          <section className="content">
            <p className="title">Stay updated!</p>
            <p className="desc">Join 60,000+ product managers receiving monthly updates on:</p>
            <div className="features">
              <span className="feature">
                <img src={listIcon} />
                <p>Product discovery and building what matters</p>
              </span>
              <span className="feature">
                <img src={listIcon} />
                <p>Measuring to ensure updates are a success</p>
              </span>
              <span className="feature">
                <img src={listIcon} />
                <p>And much more!</p>
              </span>
            </div>
          </section>
          <form
            action={"#"}
            noValidate
            onSubmit={handleSubmit}
          >
            <Textfield
              id={'email-addr'}
              label={'Email Address'}
              name={'email'}
              errorText={error}
              onChange={(e) => handleChange(e)}
              value={formData.email}
              placeholder={"email@company.com"} />
            <Button text={'Subscribe to monthly newsletter'} />
          </form>
        </section>
      </section>
    </main>
    }
    </>
  );
}

export default App
