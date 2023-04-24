import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import cl from './Navbar.module.css'
import MyButton from '../botton/MyButton';
import { AuthContext } from '../../../context/index.js';

export default function Navbar() {

  const {setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  }

  return (
    <div className={cl.navbar}>
      <div className={cl.navbar__links}>
        <Link className={cl.navbar__items} to="/about">О сайте</Link>
        <Link className={cl.navbar__items} to="/posts">Посты</Link>
      </div>
      <MyButton onClick={logout}>
        Выйти
      </MyButton>
    </div>
    
  )
}

