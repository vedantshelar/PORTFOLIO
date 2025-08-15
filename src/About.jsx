import styles from "./About.module.css"
import { Element } from 'react-scroll';
import 'aos/dist/aos.css';
import SplitText from "./components/SplitText";

function About() {
    return (
        <Element name="about" className={styles.aboutSection}>
            <img src="myphoto.jpeg" alt="myPhoto" id={styles.aboutImg} data-aos="fade-right" />
            <div id={styles.aboutSectionInfoContainer}>
                <p id={styles.aboutHeading} data-aos="fade-left">
                <SplitText
                    text="About Me"
                    className="text-2xl font-semibold text-center"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                />
                </p>
                <p id={styles.aboutInfo} data-aos="fade-left">Hi, I’m Vedant Shelar, a full-stack web developer skilled in the MERN stack. I love building interactive, user-friendly applications and turning ideas into real-world digital solutions. Always curious, I enjoy learning new technologies and working on innovative projects.</p>
            </div>
        </Element>
    );
}

export default About;