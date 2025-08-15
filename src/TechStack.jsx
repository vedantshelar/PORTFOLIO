import styles from "./techStack.module.css"
import { Element } from 'react-scroll';
import 'aos/dist/aos.css';
import GlareHover from "./components/GlareHover"

function TechStack() {
    return (
        <Element name="techStack" className={styles.techStackSection}>
            <h1 id={styles.techStackHeading} data-aos="fade-up">Tech Stack</h1>
            <div id={styles.techStackContainer}>
                
                <div className={styles.techStackBox} data-aos="fade-right">
                        <img src="html.png" alt="htmlLogo" />
                        <span>HTML</span>
                    </div>
                <div className={styles.techStackBox} data-aos="fade-right">
                    <img src="css-3.png" alt="htmlLogo" />
                    <span>CSS</span>
                </div>
                <div className={styles.techStackBox} data-aos="fade-right">
                    <img src="js.png" alt="htmlLogo" />
                    <span>Javascript</span>
                </div>
                <div className={styles.techStackBox} data-aos="fade-right">
                    <img src="MongoDB.png" alt="htmlLogo" />
                    <span>MongoDB</span>
                </div>
                <div className={styles.techStackBox} data-aos="fade-right">
                    <img src="express1.png" alt="htmlLogo" />
                    <span>Express</span>
                </div>
                <div className={styles.techStackBox} data-aos="fade-right">
                    <img src="React.png" alt="htmlLogo" />
                    <span>React Js</span>
                </div>
                <div className={styles.techStackBox} data-aos="fade-right">
                    <img src="nodejs.png" alt="htmlLogo" />
                    <span>Node Js</span>
                </div>
                <div className={styles.techStackBox} data-aos="fade-right">
                    <img src="MySQL.png" alt="htmlLogo" />
                    <span>MySQL</span>
                </div>
                <div className={styles.techStackBox} data-aos="fade-right">
                    <img src="C.png" alt="htmlLogo" />
                    <span>C</span>
                </div>
                <div className={styles.techStackBox} data-aos="fade-right">
                    <img src="C++.png" alt="htmlLogo" />
                    <span>C++</span>
                </div>
                <div className={styles.techStackBox} data-aos="fade-right">
                    <img src="Java.png" alt="htmlLogo" />
                    <span>Java</span>
                </div>
                <div className={styles.techStackBox} data-aos="fade-right">
                    <img src="Python.png" alt="htmlLogo" />
                    <span>Python</span>
                </div>
            </div>
        </Element>
    );
}

export default TechStack;