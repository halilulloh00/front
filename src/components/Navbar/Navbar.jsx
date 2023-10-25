import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import cls from './Navbar.module.scss'

const Navbar = () => {
    return (
        <nav>
            <div className={cls.nav_1}>
                <i className="fa-solid fa-bars"></i>
                <h2>TextileArt</h2>
            </div>

            <ol>
                <li><NavLink to={'/'}>Главная</NavLink></li>
                <li><NavLink to={'/products'}>Продукция</NavLink></li>
                <li><NavLink to={'/aboutUs'}>О нас</NavLink></li>
                <li><NavLink to={'/contacts'}>Контакты</NavLink></li>
            </ol>

            <div className={cls.nav_2}>
                <div className={cls.search}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" />
                </div>
                <button>Войти</button>
                <i className="fa-solid fa-bag-shopping"></i>
                <div className={cls.language}>ru</div>
            </div>
        </nav>
    )
}

export default Navbar
