import './footer.css';

function Footer({setPage}){
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__left">
                    <small>
                    <h3 className='footer__tittle'>Copyright</h3>
                    <a href="//undraw.co/license">Home Page Illustration © Undraw.com </a>
                    <a href="#License" onClick={() => setPage('License')}>About Me Image © Website License</a>
                    <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement#license"> Women In Tech © Github License </a>
                    <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement#license"> Dashboard © Github License </a>
                    <a href="https://commons.wikimedia.org/wiki/File:Minesweeper_guess_1_generic.svg">Number Guessing © wikimedia.org </a>
                    <a href="https://www.yourgolftravel.com/our-brands">Travel Managment © yourgolftravel.com </a>
                    <a href="https://www.yourgolftravel.com/our-brands">Hotel Managment © yourgolftravel.com </a>
                    <a href="https://commons.wikimedia.org/wiki/File:Dantman-Skin-modern.png">Exam Portal © wikimedia.org </a>
                    <a href="//undraw.co/license">Contact me Illustration © Undraw.com </a>
                    <a href="//undraw.co/license">Message Recieved Illustration © Undraw.com </a>
                    
                    
                    </small>
                </div>
                <div className="footer__middle">
                    <small>
                    <h3 className='footer__tittle'>Policies</h3>
                    <a href="#PrivacyPolicy" onClick={() => setPage('PrivacyPolicy')}>Privacy Policy</a>
                    <a href = "#License" onClick={() => setPage('License')}>License </a>
                    </small>
                </div>
                <div className="footer__right">
                    <small>
                    <h3 className='footer__tittle'>Social</h3>
                    <div className="media__icons">
                    <a href = 'https://www.facebook.com/' className ='fb__icon' >Facebook</a>
                    <a href = "https://twitter.com/home" className="twitter__icon" >Twitter</a>
                    <a href = "https://www.linkedin.com/in/akanksha-g-0b94b992" className="linkedin__icon">Linkedin</a>
                    <a href = "https://www.instagram.com/" className="insta__icon">Instagram</a> 
                    <a href = "https://github.com/" className="github">Github</a> 
                    </div>
                    </small>
                </div>
            </div>
        </div>
    );
}

export default Footer;