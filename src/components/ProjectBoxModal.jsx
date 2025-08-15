import styles from "./ProjectBoxMoadal.module.css";

function ProjectBoxMoadal({myReference,closeProjectBoxModal}) {
    return (
        <div ref={myReference} id={styles.projectBoxMoadalMainContainer}>
            <div className={styles.projectBox}>
                <img id="projectImg" src="/restaurantProject1.png" alt="project img" className={styles.projectImg} />
                <p className={styles.projectName} id="projectName">QR-Dine</p>
                <p className={styles.prjectInfo} id="projectInfo">Always curious, I enjoy learning new technologies and working on innovative projectvs. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente odio eaque suscipit et commodi similique </p>
                <div>
                    <button className={styles.projectBtn}><a href="#" id="githubLink">Git Hub</a></button>
                    <button className={styles.projectBtn}><a href="#" id="liveDemoLink">Live Demo</a></button>
                </div>
                <i  className="fa-solid fa-circle-xmark" id={styles.closeBtn} onClick={closeProjectBoxModal}></i>
            </div>
        </div>
    );
}

export default ProjectBoxMoadal;