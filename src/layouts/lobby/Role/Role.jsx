import React from 'react'
import cls from './Role.module.scss'

const Role = () => {
    return (
        <section class={cls.signin}>
            <div class={cls.auto}>
                <h1>Выберите роль</h1>
                <button>Покупатель</button>
                <button>Продавец</button>
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

export default Role