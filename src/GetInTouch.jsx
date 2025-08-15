import styles from "./GetInTouch.module.css"
import { Element } from 'react-scroll';
import 'aos/dist/aos.css';

function GetInTouch() {
    return ( 
        <Element name="getInTouch" id={styles.getInTouchSection}>
                 <h1 data-aos="fade-up">Get in Touch</h1>
                 <div id={styles.getInTouchContainer} >
                    <div id={styles.getInTouchLeftContainer}>
                       <p id={styles.para1} data-aos="fade-right">I’m always open to discussing new <br /> projects, opportunities, or <br />collaborations.</p>
                       <p id={styles.email} data-aos="fade-right">Email: vedantshelar871@gmail.com</p>
                       <p id={styles.phone} data-aos="fade-right">Phone: +919321677312</p>
                       <div id={styles.mediaLinks}>
                            <a href="https://github.com/vedantshelar" target="_blank" data-aos="fade-right"><i class="fa-brands fa-github"></i></a>
                            <a href="#" target="_blank" data-aos="fade-right"><i class="fa-brands fa-linkedin"></i></a>
                            <a href="https://www.instagram.com/its_ved_0_1/" target="_blank" data-aos="fade-right"><i class="fa-brands fa-square-instagram"></i></a>
                       </div>
                    </div>
                    <img src="getInTouch.png" alt="get in touch img" id={styles.getInTouchImg} data-aos="fade-left"/>
                 </div>
        </Element>
     );
}

export default GetInTouch;