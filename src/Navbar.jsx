import styles from "./Navbar.module.css";
import { Link, Element } from 'react-scroll';

function Navbar({isNavOpen,openNav,closeNav}) {
    return (
    <div id={styles.navbar}>
        <div>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="techStack" smooth={true} duration={500}>Tech Stack</Link>
        <Link to="achievements" smooth={true} duration={500}>Achievements</Link>
        <Link to="statistics" smooth={true} duration={500}>Statistics</Link>
        <Link to="getInTouch" smooth={true} duration={500}>Get in Touch</Link>
        </div>
        <div style={{display:isNavOpen ? "flex":"none"}}>
        <Link to="about" smooth={true} duration={500} onClick={closeNav}>About</Link>
        <Link to="projects" smooth={true} duration={500} onClick={closeNav}>Projects</Link>
        <Link to="techStack" smooth={true} duration={500} onClick={closeNav}>Tech Stack</Link>
        <Link to="achievements" smooth={true} duration={500} onClick={closeNav}>Achievements</Link>
        <Link to="statistics" smooth={true} duration={500} onClick={closeNav}>Statistics</Link>
        <Link to="getInTouch" smooth={true} duration={500} onClick={closeNav}>Get in Touch</Link>
        </div>
        <div>
        <i id={styles.bar} class="fa-solid fa-bars" onClick={openNav} style={{display:isNavOpen ? "none" : "block"}}></i>
        <i id={styles.cross} class="fa-solid fa-xmark" onClick={closeNav} style={{display:isNavOpen ? "block" : "none"}}></i>
        </div>
    </div>
    );
}

export default Navbar;