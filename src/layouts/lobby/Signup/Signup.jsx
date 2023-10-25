import React from 'react'
import cls from './Signup.module.scss'

const Signup = () => {
    return (
        <section class={cls.signin}>
            <div class={cls.auto}>
                <h1>Зарегистрироваться</h1>
                <small>ФИО</small>
                <input type="text" />
                <small>E-mail</small>
                <input type="email" />
                <small>Пароль</small>
                <input type="password" />
                <small class={cls.forgetPass}>Забыли пароль ?</small>
                <button class={cls.orgBtn}>Продолжить</button>
                <button>
                    <i class="fa-brands fa-google"></i>
                    Войти через Google
                </button>
                <small class={cls.doubleSpan}>
                        <span>Есть аккаунт ? </span>
                        <span>Войти</span>
                </small>
            </div>
        </section>
    )
}

export default Signup
