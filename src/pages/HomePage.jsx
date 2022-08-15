import HomeBottom from '../components/homeBottom/HomeBottom';
import HomeTop from '../components/homeTop/HomeTop';
import styles from './pageStyles/homePage.module.css';
import Header from '../components/header/Header';
function HomePage() {
  return (
    <>
        <div className={styles.home_container}>
           <Header/>
           <HomeTop/>
           <HomeBottom/>
        </div>
    </>
  )
}

export default HomePage;
