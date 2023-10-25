import React from 'react'
import cls from './Salesman.module.scss'

const Salesman = () => {
    return (
        <section class={cls.signin}>
            <div class={cls.auto}>
                <h1>Данные продавца</h1>
                <small>Фамилия</small>
                <input type="text" />
                <small>Имя</small>
                <input type="text" />
                <small>Отчество</small>
                <input type="text" />
                <small>ИНН</small>
                <input type="text" />
                <small>Название компании / магазина</small>
                <input type="text" />
                <small>Должность в компании / магазине</small>
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
                    <small>
                        <span>Ещё нет аккаунта ? </span>
                        <span>Создать аккаунт</span>
                    </small>
                </small>
            </div>
        </section>
    )
}

export default Salesman