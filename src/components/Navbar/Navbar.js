import { useState } from 'react';
import {ReactComponent as ReactLogo} from '../../assets/logo.svg';
import './Navbar.css';
import Button from '../Button/Button';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onClickHandler = () => {
        if(isOpen){
            setIsOpen(false);
        }
    }

    return (
        <div className='navbar-container'>
            <ReactLogo />
            <nav>
                <ul className={isOpen && "open"}>
                    <li><Button caption='Whitepaper' href='#whitepaper' type={isOpen && 'mobile'} onClick={onClickHandler} /></li>
                    <li><Button caption='¿quines somos?' href='#quienes-somos'  type={isOpen && 'mobile'} onClick={onClickHandler} /></li>
                    <li><Button caption='¿como fiscalizar?' href='#como-fiscalizar'  type={isOpen && 'mobile'} onClick={onClickHandler} /></li>
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