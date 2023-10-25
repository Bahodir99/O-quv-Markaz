import React from 'react'
import './Header.scss'
import logo from '../../assets/img/english time.jpg'

function Header() {
    return (
        <header>
            <div className="container">
                <nav className='header__nav'>
                    <a href="#">
                        <img className='header__logo' src={logo} alt="" />
                    </a>
                    <ul className='header__list'>
                        <li className='header__item'>
                            <a href="#">О нас</a>
                        </li>
                        <li className='header__item'>
                            <a href="#">Курсы</a>
                        </li>
                        <li className='header__item'>
                            <a href="#">Котакты</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header