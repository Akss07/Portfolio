import './projectList.css';
import {projects} from './../../data';
import Projects from './Projects';

function ProjectList({setPage}){
    return(
        <div className="projectList" id = "mProjects">
            <div className="container">
                <h3 className="tittle">Projects</h3>
                <p className="pl__desc">
                    These are the list of projects which I have worked upon. If you are interested to learn more about them
                   <a className = 'contactme__link' href="#contact" onClick={() => setPage('Contact')}>Please contact me!</a>
                </p>
                <div className="pl__list">
                {projects.map( (item) =>(
                    <Projects key = {item.id} img = {item.img} tittle = {item.tittle} />
                ))}
            </div>
            </div>
            
        </div>
    );
}

export default ProjectList;