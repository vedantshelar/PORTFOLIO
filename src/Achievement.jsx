import styles from "./Achievement.module.css"
import { Element } from 'react-scroll';
import 'aos/dist/aos.css';
function Achievement() {
    return (
        <Element name="achievements" id={styles.achievementSection}>
            <h1 data-aos="fade-up">Achievements</h1>
            <div id={styles.achievementContainer} >
                <div className={styles.achievementBox} data-aos="fade-right">
                    <a href="https://res.cloudinary.com/dmxgbgmsr/image/upload/v1755274928/certificate1_uzj0vt.jpg" target="_blank">
                        <img src="certificate1.jpeg" alt="certificate" />
                    </a>
                </div>
                <div className={styles.achievementBox} data-aos="fade-right">
                    <a href="https://res.cloudinary.com/dmxgbgmsr/image/upload/v1755274966/certificate2_lqdlwf.jpg" target="_blank">
                        <img src="certificate2.jpeg" alt="certificate" />
                    </a>
                </div>
            </div>
        </Element>
    );
}

export default Achievement;