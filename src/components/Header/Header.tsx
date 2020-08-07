import React from 'react';
import s from "./Header.module.css";
import { NavLink } from 'react-router-dom';

type PropsType = {
    isAuth: boolean
}

const Header = (props: any) => {
    return (
        <header className={s.header}>
            <img src="http://webmentor.gr/wp-content/uploads/2018/11/logo300X300.png" alt="logo"/>

            <div className={s.loginBlock}>
                { props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink> }
            </div>
        </header>
    )
}
export default Header;