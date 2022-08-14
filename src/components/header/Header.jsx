import React from 'react';
import styles from './header.module.css';
import { NavLink } from 'react-router-dom';
import "./active.css";

const Header = () => {
    return (
        <div className={styles.header_container} >
            <div className={styles.logo}>
                <div className={styles.logoImg}></div>
                <div className={styles.logoText}>
                    <span>SPACE <span className={styles.ninja} >NINJA</span> </span>
                </div>
            </div>

            
            <div className={styles.nav_container}>
                <ul className={styles.nav}>
                    <li className={styles.navItem}><NavLink class="active" to="/home">Home</NavLink></li>
                    <li className={styles.navItem}><NavLink to="/about">About Us</NavLink></li>
                    <li className={styles.navItem}><NavLink to="/signin">Sign In</NavLink></li>
                    <li className={styles.navItem}><NavLink to="/signup" className={styles.signBorder}>Sign Up</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;