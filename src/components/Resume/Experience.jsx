import './education.css';
import './experience.css';

function Experience(){
    return(
        <div className="experience" id = "mExperience">
           <div className="container">
                <h3 className="tittle">Experience</h3>
                <div className="edu__content">
                    <div className='edu__container'>
                        <div className="edu__wrapper">
                            <div className="experience__info--left">
                                <h4 className='degree'>April 2019- January 2021</h4>
                            </div>
                        </div>
                        <div className="experience__info--right">
                            <h5 className='company'>
                                <span className="exp__icon"></span>Infosys Limited, Pune </h5>
                                <p className='degree__tittle'>Technology Analyst in the Customer Onboarding team.</p>
                            </div>
                          </div>
                          <div className='edu__container'>
                        <div className="edu__wrapper">
                            <div className="experience__info--left">
                                <h4 className='degree'>April 2018 - March 2019</h4>
                            </div>
                        </div>
                        <div className="experience__info--right">
                            <h5 className='company'>
                                <span className="exp__icon"></span>Infosys Limited, Pune </h5>
                                <p className='degree__tittle'>Senior Software Developer in the Customer Onboarding team.</p>
                            </div>
                          </div>
                          <div className='edu__container'>
                        <div className="edu__wrapper">
                            <div className="experience__info--left">
                                <h4 className='degree'>January 2016 - April 2018</h4>
                            </div>
                        </div>
                        <div className="experience__info--right">
                            <h5 className='company'>
                                <span className="exp__icon"></span>Zensar Technologies, Pune </h5>
                                <p className='degree__tittle'>Software Developer in the Customer Onboarding team.</p>
                            </div>
                          </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;