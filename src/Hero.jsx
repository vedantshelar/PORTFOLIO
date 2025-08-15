import styles from "./Hero.module.css"
import { Element } from 'react-scroll';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ShinyText from "./components/ShinyText";

function Hero() {

    useEffect(() => {
        AOS.init({
          duration: 1000,  // animation duration in ms
          once: false       // whether animation should happen only once
        });
      }, []);

    return (
        <Element name="home" className={styles.heroSection} data-aos="fade-up">
            <span>Hi, i'm Vedant 👋</span>
            <p>Full Stack Web Developer</p>
            <p id={styles.para2}>Passionate about coding</p>
            <div>
                <button><a href="https://res.cloudinary.com/dmxgbgmsr/image/upload/v1755278620/Blue_and_Gray_Simple_Professional_CV_Resume_mx0rqd.jpg" target="_blank">View Resume</a></button>
                <button><a href="https://github.com/vedantshelar" target="_blank">Git hub</a></button>
            </div>
        </Element>
    );
}

export default Hero;
