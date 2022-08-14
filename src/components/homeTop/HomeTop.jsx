import React from 'react'
import styles from './hometop.module.css';

 function HomeTop() {
  return (
    <div className={styles.homeTop}>
        <div className={styles.progress}>
            <div className={styles.topText}>Hello, Victor</div>
            <div className={styles.centerText}>
            Complete your profile to get the achievement:
            </div>

            <div className={styles.progress_circle}>
              <div className={styles.bottomText}> 
                <span>50%</span>
              </div>
            </div>  
        </div>

        <div className={styles.new}>
            <div className={styles.btn}>
                <span>New Planet ٩(͡๏̯͡๏)۶ </span><br/>
                <span>Click to see new information</span>
            </div>
        </div>

        <div className={styles.community}>
            <div className={styles.leftSide}>
                <div className={styles.community_text}>
                    Space Travel
                    is not a dream
                    anymone.
                </div>
                <div className={styles.community_btn}>
                    <span>Join Our Community</span>
                </div>
            </div>
            <div className={styles.rightSide}></div>
        </div>
    </div>
  )
}
export default HomeTop;