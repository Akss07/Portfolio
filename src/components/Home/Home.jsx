import './home.css';
import myimage from './img/proud_coder.png'

function Home({setPage}){
    return(
      <div className="main">
      <div className="main-container">
          <div className="main-content">
              <h2 className="greeting">Hello</h2>
              <h1>I'm Akanksha Gupta</h1>
              <div className="intro__title">
                  <div className="title__wrapper">
                      <div className="title__item">Software Developer</div>
                      <div className="title__item">UI/UX Designer</div>
                      <div className="title__item">Web Developer</div>
                      <div className="title__item">Blogger</div>
                  </div>
              </div>
              <p className="intro__desc">
                  Engineer, Dreamer, Developer and Believer.
                  I am a full stack software developer with over 5 years of work experience. 
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites, web services and
                  online stores.
              </p>
              <div className="btn__container">
                  <button className="btn__hireMe" onClick = { () => setPage('Contact') }>Hire Me</button>
                  <button className="btn_viewResume" onClick = { () => setPage('Resume') } >View Resume</button>
              </div>
          </div>
          <div className="main-img-container">
              <img src={myimage} alt="This is a main img" id="main-img" />
          </div>
      </div>
  </div>
    );
}

export default Home;