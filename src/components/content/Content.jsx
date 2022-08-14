import React from 'react';
import styles from './content.module.css';

const Content = () => {
    return (
        <div className={styles.content_container}>
            <div className={styles.core}>
                <div className={styles.background_core}></div>
                <div className={styles.core_shining}></div>
            </div>

            <div className={styles.introduce}>
                <p className={styles.first}>WE ARE</p>
                <p className={styles.second}>Research Center</p>
                <p className={styles.third}>
                    An internation space research
                    oraganisation that involve to <span className={styles.underline}>discover</span>
                    <br/>the new space things.
                </p>
            </div>

            <div className={styles.subscribe_container}>
                <input type="text" className={styles.subscribe_input} placeholder="Enter your email"/>
                <input type="submit" className={styles.subscribe_btn} value="Send"/>
            </div>
        </div>
    );
};

export default Content;