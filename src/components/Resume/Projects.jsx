import './projects.css';

function Projects({ img, tittle}){
    
    return(
    <div className="card__container">
        <div className="browser">
            <div className="circles"></div>
            <div className="circles"></div>
            <div className="circles"></div>
        </div>
        <div  className ="image__container">
            <img src={img} alt="This is a front page of projects" className="card__img" />
            <h2 className='project__name'>{tittle}</h2>
        </div>
    </div>
    );
}

export default Projects;