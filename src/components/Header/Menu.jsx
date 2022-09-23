import { useState } from 'react';
import './menu.css';

function Menu({setPage, menuOpen, setMenuOpen}){
    const [dropdown, setdropdown] = useState(false);

function handleClick(){
    setPage('Resume');
    setdropdown(false);
}

const dropdownItems = [
    {
        tittle : "Education"
    },
    {
        tittle : "Experience"
    },
    {
        tittle : "Projects"
    },
    {
        tittle : "Skills"
    }
]

    return(
        <div className={`menu__wrapper ${menuOpen ? 'is-active' : ''}`}>
            <div className="menu__section">
                <nav>
                <ul className="menubar">
                    <li className='menu' onClick = { () => setMenuOpen(false) } >
                        <a onClick = { () => setPage('Home') }  href ="#Home" className='menu__items'>Home</a>
                    </li>
                    <li className='menu' onClick = { () => setMenuOpen(false) }>
                        <a onClick = { () => setPage('About') } href ="#About" className='menu__items'>About</a>
                    </li>
                    <li className='menu' onClick = { () => setMenuOpen(false) } >
                        
                        <a onClick = { () => setPage('Resume') } href ="#Resume" className= "menu__items" >Resume</a>
                        <span className={`resume__icon ${dropdown ? 'menu__items--open' : ''}`} onClick={() => setdropdown(!dropdown)}></span>
                        <ul className={`submenu__lists ${dropdown ? 'submenu__lists--open' : ''}`}>
                            {dropdownItems.map((menu, index) =>{
                            return <li className="submenu" key = {index} onClick = { () => handleClick()}><a href={`#m${menu.tittle} `}>{menu.tittle}</a></li>
                        })}
                         </ul>
                    </li>
                    <li className='menu' onClick = { () => setMenuOpen(false) }>
                        <a onClick = { () => setPage('Contact') } href ="#Contact" className='menu__items'>Contact</a>
                    </li>
                    <li className='menu' onClick = { () => setMenuOpen(false) }>
                        <a onClick = { () => setPage('Blogs') } href ="#Blog" className='menu__items'>Blog</a>
                    </li>
                </ul>
                </nav>
            </div>
        </div>
    );
}

export default Menu;