import React from 'react'
import styles from './homebottom.module.css';

function HomeBottom() {
  return (
    <div className={styles.homeBottom}>

        <div className={styles.planets_container}>
            <div className={styles.planets}>
                <div className={styles.planet}>
                    <div className={styles.planetImg}>
                        <img src="https://i.ibb.co/bXFmNnS/mars.png" alt="mars"/>
                    </div>
                    <div className={styles.planetText}>
                        <h1>Mars </h1>
                        <p>Mars is the fourth planet from the Sun and the second-smallest 
                        planet in the Solar System, being larger than only Mercury.
                         </p>
                    </div>
                    <div className={styles.planetLearn}> 
                        <span>Learn More</span>
                    </div>
                </div>





                <div className={styles.planet}>
                    <div className={styles.planetImg}>
                        <img src="https://i.ibb.co/PcwqKdY/venera.png" alt="venera"/>
                    </div>
                    <div className={styles.planetText}>
                        <h1>Venera </h1>
                        <p>Venera is the second farthest from the Sun and the
                             sixth largest planet in the solar system, 
                             it belongs to the family of terrestrial planets.
                         </p>
                    </div>
                    <div className={styles.planetLearn}> 
                        <span>Learn More</span>
                    </div>
                </div>


                <div className={styles.planet}>
                    <div className={styles.planetImg}>
                        <img src="https://i.ibb.co/LdnmRYg/saturn.png" alt="Saturn"/>
                    </div>
                    <div className={styles.planetText}>
                        <h1>Saturn </h1>
                        <p>Saturn is the sixth planet from the Sun
                        and the second largest planet in the
                        solar system after Jupiter. Most Popular planet.

                         </p>
                    </div>
                    <div className={styles.planetLearn}> 
                        <span>Learn More</span>
                    </div>
                </div>


                <div className={styles.planet}>
                    <div className={styles.planetImg}>
                        <img src="https://i.ibb.co/3dD71Bm/jupiter.png" alt="Jupiter"/>
                    </div>
                    <div className={styles.planetText}>
                        <h1>Jupiter </h1>
                        <p>Jupiter is the largest planet in the solar system 
                        and the fifth furthest from the sun.
                        Along with Saturn, 
                        Jupiter is classified as a gas giant..
                         </p>
                    </div>
                    <div className={styles.planetLearn}> 
                        <span>Learn More</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}


export default HomeBottom;