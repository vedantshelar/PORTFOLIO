import './App.css';
import Hero from './Hero';
import Aurora from './Aurora';
import Navbar from './Navbar';
import About from './About';
import Project from './Project';
import TechStack from './TechStack';
import Achievement from './Achievement';
import GetInTouch from './GetInTouch';
import Greet from './Greet';
import Statistics from './Statistics';
import { useRef, useState } from 'react';
import ProjectBoxMoadal from './components/ProjectBoxModal';

function App() {
  let [isNavOpen,setIsNavOpen] = useState(false);
  let projectBoxModal = useRef(null);

  function showProjectBoxMadal(e,projectData){
    projectBoxModal.current.style.display="flex";
    let projectBox = projectBoxModal.current.firstElementChild;
    projectBox.style.top=e.pageY+"px";
    projectBox.querySelector("#projectName").innerText=projectData.projectName;
    projectBox.querySelector("#projectInfo").innerText=projectData.projectInfo;
    projectBox.querySelector("#githubLink").href=projectData.githubLink;
    projectBox.querySelector("#liveDemoLink").href=projectData.liveDemoLink;
    projectBox.querySelector("#projectImg").src=projectData.projectImg;
  }

  function closeProjectBoxModal(e){
    projectBoxModal.current.style.display="none";
  }

  function openNav(){
    setIsNavOpen(true);
  }

  function closeNav(){
    setIsNavOpen(false);
  }
  return (
    <div id='appMainContainer'>
      <div id='appContainer'>
      <Aurora
        colorStops={["#7CFF67", "#B19EEF", "#5227FF"]}
        blend={0.5}
        amplitude={1.0}
        speed={1.0}
      />
      <Navbar isNavOpen={isNavOpen} openNav={openNav} closeNav={closeNav}/>
      {!isNavOpen && <Hero  />}
      </div>
      <About/>
      <Project showProjectBoxMadal={showProjectBoxMadal}/>
      <TechStack />
      <Achievement />
      <Statistics />
      <GetInTouch />
      <Greet /> 
      <ProjectBoxMoadal myReference={projectBoxModal} closeProjectBoxModal={closeProjectBoxModal} />
    </div>
  )
}

export default App;