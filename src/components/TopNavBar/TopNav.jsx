import './topnav.css';

function TopNav({menuOpen, setMenuOpen, setPage}){
    return (
        <div className="topnav">
            <div className="topnav__wrapper">
                <div className="topnav__left">
                    <div className='topnav__contact'>
                        <a href='#contact' className='mob__icon' onClick = { () => setPage('Contact') }></a>
                        <span className="topnav__contact--info ">+123456789</span>
                    </div>
                    <div className='topnav__contact'>
                       <a href='#contact' className='mail__icon' onClick = { () => setPage('Contact')}></a>
                        <span  className="topnav__contact--info">akanksha0207gupta@gmail.com</span>
                    </div>
                </div>
                <div className="topnav__right">
                   <div className={`hamburger ${menuOpen ? 'is-active' : ''}`} id="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                       <span className='bar'></span>
                       <span className='bar'></span>
                       <span className='bar'></span>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default TopNav;