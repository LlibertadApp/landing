import { useState } from 'react';
import {ReactComponent as ReactLogo} from '../../assets/logo.svg';
import './Navbar.css';
import Button from '../Button/Button';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='navbar-container'>
            <ReactLogo />
            <nav>
                <ul className={isOpen && "open"}>
                    <li><Button caption='Whitepaper' href='#whitepaper' /></li>
                    <li><Button caption='¿quines somos?' href='#quienes-somos' /></li>
                    <li><Button caption='¿como fiscalizar?' href='#como-fiscalizar' /></li>
                </ul>
            </nav>
            <div className={`nav-hamburguer ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Header;