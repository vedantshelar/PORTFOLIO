import styles from "./Project.module.css"
import { Element } from 'react-scroll';
import 'aos/dist/aos.css';
import ProjectCard from "./components/ProjectCard";

function Project({showProjectBoxMadal}) {
    return (
        <Element name="projects" className={styles.projectSection}>
           <h1 data-aos="fade-up">Projects</h1>
           <div id={styles.projectsContainer}>
                <ProjectCard showProjectBoxMadal={showProjectBoxMadal} project={{projectName:"QR-Dine",projectInfo:"The QR Code-Based Ordering System is a smart restaurant solution enabling customers to scan QR codes or use NFC tags to view menus, place orders, and track status seamlessly. Admins get real-time dashboards, profit analytics, and menu management tools, ensuring a faster, contactless, and efficient dining experience.",gitHubLink:"https://github.com/vedantshelar/FULL-STACK-PROJECT3",liveDemoLink:"https://full-stack-project3.onrender.com/user/landing",projectImg:"/qrcode.webp",isProjectLive:true}}/>

                <ProjectCard showProjectBoxMadal={showProjectBoxMadal} project={{projectName:"PRO-SKILLHUB",projectInfo:"PRO-SKILLHUB is a collaborative web app for college students to showcase skills, share projects, post educational content, and chat in real-time. It helps students connect, discover talent, and form teams for projects or hackathons, creating a community-driven platform to learn, collaborate, and grow together.",gitHubLink:"https://github.com/vedantshelar/PRO-SKILLHUB",liveDemoLink:"https://pro-skillhub.netlify.app/",projectImg:"/skillhub3.jpg",isProjectLive:true}}/>

                <ProjectCard showProjectBoxMadal={showProjectBoxMadal} project={{projectName:"RENTO",projectInfo:"RENTO is a web application that enables users to upload, manage, and browse properties. The platform also provides filtering and searching functionality to find properties easily and includes an admin panel for property management.",gitHubLink:"https://github.com/vedantshelar/FULL-STACK-PROJECT-1",liveDemoLink:"https://full-stack-project-1-1z4c.onrender.com/list",projectImg:"/rent5.png",isProjectLive:true}}/>

                <ProjectCard showProjectBoxMadal={showProjectBoxMadal} project={{projectName:"EchoChat",projectInfo:"EchoChat is a real-time chat web app for one-to-one and group messaging. Built with the MERN stack and powered by Socket.IO, it offers instant communication, user authentication, and message history in a clean, responsive interface. Perfect for teams, friends, and communities.",gitHubLink:"https://github.com/vedantshelar/EchoChat-Frontend",liveDemoLink:"https://echochat-web.netlify.app/",projectImg:"/chat.avif",isProjectLive:true}}/>

                <ProjectCard showProjectBoxMadal={showProjectBoxMadal} project={{projectName:"Zerodha Clone",projectInfo:"A simplified clone of Zerodha's Kite trading platform, created using the MERN stack. It includes a user dashboard, portfolio viewer, and responsive charts.",gitHubLink:"https://github.com/vedantshelar/ZERODHA_LANDING_PAGE",liveDemoLink:"https://zerodha-landing-page-web.netlify.app",projectImg:"/zerodha.png",isProjectLive:true}}/>

                <ProjectCard showProjectBoxMadal={showProjectBoxMadal} project={{projectName:"Weather App",projectInfo:"A simple and user-friendly weather app where you can enter any city name to instantly view its current weather conditions, including temperature, humidity, and more.",gitHubLink:"https://github.com/vedantshelar/Web-Project-4",liveDemoLink:"#",projectImg:"/weatherapp.png",isProjectLive:false}}/>

                <ProjectCard showProjectBoxMadal={showProjectBoxMadal} project={{projectName:"ToDo List App",projectInfo:"An easy-to-use To-Do List app that helps you add, manage, and track your daily tasks to stay organized and productive.",gitHubLink:"https://github.com/vedantshelar/Web-Project-3",liveDemoLink:"#",projectImg:"/todolist.webp",isProjectLive:false}}/>

                <ProjectCard showProjectBoxMadal={showProjectBoxMadal} project={{projectName:"QR-Code Generator",projectInfo:"A simple web app that instantly creates a QR code from any text or URL entered by the user, ready to download and share.",gitHubLink:"https://github.com/vedantshelar/Web-Project-3",liveDemoLink:"#",projectImg:"/qr-code-generator.avif",isProjectLive:false}}/>
           </div>
        </Element>
    );
}

export default Project;