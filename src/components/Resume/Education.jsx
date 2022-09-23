import './education.css';

function Eductaion(){
    return(
        <div className="education" id = "mEducation">
            <div className="container">
                <h3 className="tittle">Education</h3>
                     <div className="edu__content">
                         <div className='edu__container'>
                             <div className="edu__wrapper">
                                 <div className="education__info--left">
                                     <h4 className='degree'>Master's degree - 2022 -Present</h4>
                                    </div>
                                </div>
                            <div className="education__info--right">
                                <h5 className='university'>
                                    <span className="edu__icon"></span>Northeastern University, Seattle </h5>
                                        <p className='degree__tittle'>Master's Degree in Information Systems</p>
                            </div>
                          </div>
                          <div className='edu__container'>
                              <div className="edu__wrapper">
                                  <div className="education__info--left">
                                      <h4 className='degree'>Bachelor's degree - 2011 - 2015</h4>
                                    </div>
                                </div>
                                <div className="education__info--right">
                                    <h5 className='university'>
                                        <span className="edu__icon"> </span>Rajiv Gandhi University, Indore </h5>
                                             <p className='degree__tittle'>Bachelors's Degree in Computer Science</p>
                                </div>
                            </div>
                            <div className='edu__container'>
                              <div className="edu__wrapper">
                                  <div className="education__info--left">
                                      <h4 className='degree'>School - 2011</h4>
                                    </div>
                                </div>
                                <div className="education__info--right">
                                    <h5 className='university'>
                                        <span className="edu__icon"> </span>St Pius Hie. Sec. School, Indore</h5>
                                             <p className='degree__tittle'>Major in Math and Science</p>
                                </div>
                            </div>
                     </div>
             </div>
        </div>
    );
}

export default Eductaion;