import React from 'react';
import styles from './pageStyles/signup.module.css';

function SignUpPage() {
  return (
    <div className={styles.signupform_container}>
       <form>
          <div className={styles.sign_up}>
              <input type="text" className={styles.inputForm} placeholder="Your Email" required/>
              <input type="email" className={styles.inputForm} placeholder="Your Username" required/>
              <input type="password" className={styles.inputForm} placeholder="Your Password" required/>
              <input type="password" className={styles.inputForm} placeholder="Repeat Password" required/>
              <button type="submit" className={styles.do_signup}>SIGN UP</button>
          </div>
      </form>
    </div>
  )
}

export default SignUpPage;