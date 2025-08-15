import styles from "../Project.module.css"
import 'aos/dist/aos.css';

function ProjectCard({showProjectBoxMadal,project}) {
 
    function displayProjectModal(e){
        let projectInfoElement = e.target.parentNode;
        let projectInfo = project.projectInfo;
        let projectName = project.projectName
        let projectImg = project.projectImg;
        let githubLink = projectInfoElement.nextElementSibling.querySelectorAll("a")[0].href;
        let liveDemoLink = projectInfoElement.nextElementSibling.querySelectorAll("a")[1].href;

        showProjectBoxMadal(e,{projectName,projectInfo,githubLink,liveDemoLink,projectImg});
    }
    return (
        <div className={styles.projectBox} data-aos="fade-right">
            <img src={project.projectImg} alt="project img" className={styles.projectImg} />
            <p className={styles.projectName}>{project.projectName}</p>
            {project.projectInfo.length > 70 ?  <p className={styles.prjectInfo}>{project.projectInfo.slice(0,70)}<span style={{ textDecoration: "underline", color: "black" }} onClick={displayProjectModal}> read more&#x2192;</span></p>:  <p className={styles.prjectInfo}>{project.projectInfo}</p>}
            <div>
                <button className={styles.projectBtn}><a href={project.gitHubLink} target="_blank">Git Hub</a></button>
                <button className={styles.projectBtn} style={{visibility:project.isProjectLive ? "visible":"hidden"}}><a href={project.liveDemoLink} target="_blank">Live Demo</a></button>
            </div>
        </div>
    );
}

export default ProjectCard;