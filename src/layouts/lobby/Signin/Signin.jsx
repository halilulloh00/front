import React from 'react'
import cls from './Signin.module.scss'

const Signin = () => {
    return (
        <section class={cls.signin}>
            <div class={cls.auto}>
                <h1>Авторизация</h1>
                <small>E-mail</small>
                <input type="email" />
                <small>Пароль</small>
                <input type="password" />
                <small class={cls.forgetPass}>Забыли пароль ?</small>
                <button class={cls.orgBtn}>Войти</button>
                <button>
                    <i class="fa-brands fa-google"></i>
                    Войти через Google
                </button>
                <small class={cls.doubleSpan}>
                    <small>
                        <span>Ещё нет аккаунта ? </span>
                        <span>Создать аккаунт</span>
                    </small>
                </small>
            </div>
        </section>
    )
}

export default Signin