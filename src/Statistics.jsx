import styles from "./Statistics.module.css"
import ScrollStack, { ScrollStackItem } from './ScrollStack'
import { Element } from 'react-scroll';
import 'aos/dist/aos.css';

function Statistics() {
    return (
        <Element name="statistics" id={styles.statisticsSetion}>
            <h1>Statistics</h1>
            <div id={styles.statisticsContainer}>
                    <div className={styles.statisticsOuterBox}>
                        <div className="statisticsBox">
                            <i class="fa-solid fa-code"></i>
                            <p className="statisticsBoxHead">Projects</p>
                            <p className="statisticsBoxInfo">I have built over 7+ projects, each showcasing creativity, functionality, and problem-solving skills.</p>
                        </div>
                        <p className="statisticsBoxNumber">7+</p>
                    </div>
                    <div className={styles.statisticsOuterBox}>
                        <div className="statisticsBox">
                            <i class="fa-solid fa-trophy"></i>
                            <p className="statisticsBoxHead">Tech Stack</p>
                            <p className="statisticsBoxInfo">I have learned 11+ programming languages, each adding a unique layer to my problem-solving skills.</p>
                        </div>
                        <p className="statisticsBoxNumber">11+</p>
                    </div>
                    <div className={styles.statisticsOuterBox}>
                        <div className="statisticsBox">
                            <i class="fa-solid fa-award"></i>
                            <p className="statisticsBoxHead">Achievements</p>
                            <p className="statisticsBoxInfo">Proudly earned 2+ achievements, including competition certificates and many more.</p>
                        </div>
                        <p className="statisticsBoxNumber">2+</p>
                    </div>
            </div>
        </Element>
    );
}

export default Statistics;