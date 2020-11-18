import React from 'react';
import s from "./Header.module.css";
import {NavLink} from 'react-router-dom';

type PropsType = {
    isAuth: boolean
}

const Header = (props: any) => {
    return (
        <header className={s.header}>
            <img style={{height: 60, width: 60}} src="http://webmentor.gr/wp-content/uploads/2018/11/logo300X300.png" alt="logo"/>

            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    )
}
export default Header;