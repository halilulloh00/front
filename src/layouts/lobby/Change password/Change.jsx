import React from 'react'
import cls from './Change.module.scss'

const Change = () => {
    return (
        <section class={cls.change}>
            <div class={cls.auto}>
                <h1>Изменить пароль ?</h1>
                <small>Новый пароль</small>
                <input type="password" />
                <small>Повторить пароль</small>
                <input type="password" />
                <button class={cls.orgBtn}>Отправить</button>
            </div>
        </section>
    )
}

export default Change