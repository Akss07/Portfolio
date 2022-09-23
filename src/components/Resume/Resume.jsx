import Eductaion from './Education';
import Experience from './Experience';
import ProjectList from './ProjectList';
import Skills from './Skills';

function Resume({setPage}){
    
    return (
        <div className="resume" id = "resume">
            <Eductaion />
            <Experience />
            <ProjectList setPage = {setPage}/>
            <Skills />
        </div>
    );
}

export default Resume;
