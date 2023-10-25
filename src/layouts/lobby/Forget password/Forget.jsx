import React from 'react'
import cls from './Forget.module.scss'

const Forget = () => {
  return (
    <section class={cls.forget}>
      <div class={cls.auto}>
        <h1>Забыли пароль ?</h1>
        <small>E-mail</small>
        <input type="email" />
          <small>
            Вам на почту будет отправлена ссылка для изменения пароля
          </small>
          <button class={cls.orgBtn}>Отправить</button>
      </div>
    </section>
  )
}

export default Forget