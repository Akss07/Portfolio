import './about.css';
import myimage from './img/myimage.jpg';

function About(){
    return(
        <div className="about" id="about">
            <div className="container">
                <h3 className="tittle">About Me</h3>
                <div className="inner__container">
                <div className="content__container">
                    <div className="content__left">
                        <p className="content__introduction">
                        Thanks for visiting. I am a small town girl with big dreams and I plan on making them happen.
                        At present, I am pursuing Master's in information systems from Northeastern University.
                        I have over 5 years of work experience, in building real-time, multi-tier software applications. 
                        My forte is Java and Python. I have also worked on Microservice-based architecture, 
                        Cloud Computing and Distributed systems. Besides that, I have good experience with various software development phases 
                        like Requirements Gathering, Application Development, End to End Testing, and Production Support.
                        <a href = "https://github.com/Akss07" >My Github</a>
                        </p>
                    </div>
                    <div className="content__right">
                        <img  src = {myimage} className="my__image" alt='A girl'/>
                        <h2 className='designation'>Technology Analyst</h2>
                    </div>
                </div>
                <div className="certificates">
                    <ul>
                        <h2>Awards and Certificates</h2>
                        <li className="list__items"> Aptech Certified Web Developer </li>
                        <li className="list__items"> Awarded with “Insta Award” from client for bringing creativity and innovation in the workplace.</li>
                        <li className="list__items"> Secured 4th position among 30 participating college groups in a coding competition held at IIT Bombay Techfest 2012.</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    );
}

export default About;