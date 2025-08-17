import styles from "./Statistics.module.css"
import { Element } from 'react-scroll';
import 'aos/dist/aos.css';

function Statistics() {
    return (
        <Element name="statistics" id={styles.statisticsSetion}>
            <h1 data-aos="fade-up">Statistics</h1>
            <div id={styles.statisticsContainer}>
                    <div className={styles.statisticsOuterBox} data-aos="flip-up">
                        <div className="statisticsBox">
                            <i class="fa-solid fa-code"></i>
                            <p className={styles.statisticsBoxHead}>Projects</p>
                            <p className={styles.statisticsBoxInfo}>I have built over 7+ projects, each showcasing creativity, functionality, and problem-solving skills.</p>
                        </div>
                        <p className="statisticsBoxNumber">7+</p>
                    </div>
                    <div className={styles.statisticsOuterBox} data-aos="flip-up">
                        <div className="statisticsBox">
                            <i class="fa-solid fa-trophy"></i>
                            <p className={styles.statisticsBoxHead}>Tech Stack</p>
                            <p className={styles.statisticsBoxInfo}>I have learned 11+ programming languages, each adding a unique layer to my problem-solving skills.</p>
                        </div>
                        <p className="statisticsBoxNumber">11+</p>
                    </div>
                    <div className={styles.statisticsOuterBox} data-aos="flip-up">
                        <div className="statisticsBox">
                            <i class="fa-solid fa-award"></i>
                            <p className={styles.statisticsBoxHead}>Achievements</p>
                            <p className={styles.statisticsBoxInfo}>Proudly earned 2+ achievements, including competition certificates and many more.</p>
                        </div>
                        <p className="statisticsBoxNumber">2+</p>
                    </div>
            </div>
        </Element>
    );
}

export default Statistics;
