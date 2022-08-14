import HomeBottom from '../components/homeBottom/HomeBottom';
import HomeTop from '../components/homeTop/HomeTop';
import styles from './pageStyles/homePage.module.css';
function HomePage() {
  return (
    <>
        <div className={styles.home_container}>
           <HomeTop/>
           <HomeBottom/>
        </div>
    </>
  )
}

export default HomePage;
