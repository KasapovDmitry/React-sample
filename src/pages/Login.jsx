import React, { useContext } from 'react'
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/botton/MyButton';
import { AuthContext } from '../context/index.js';

export default function Login() {
    const {setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

  return (
    <div>
        <h2>Страница авторизации</h2>
        <form onSubmit={login}>
            <MyInput type="text" placeholder='Введите логин'/>
            <MyInput type="text" placeholder='Введите пароль'/>
            <MyButton>Войти</MyButton>
        </form>
    </div>
  )
}
 