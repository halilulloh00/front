import React from 'react'
import cls from './Products.module.scss'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const Products = () => {
  return (
    <div>
        <Navbar />
          <section class={cls.products}>
            <div class={cls.plusAndSearch}>
                <i class="fa-solid fa-sliders"></i>
                <div class={cls.searchOfProducts}>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Поиск..."/>
                </div>
                <button>Сбросить</button>
            </div>
            <div class={cls.filtrs}>
                <select>
                    <option>Направление</option>
                    <option>Добавьте</option>
                </select>
                <select>
                    <option>Стоимость</option>
                    <option>Добавьте</option>
                </select>
                <select>
                    <option>Продолжительность</option>
                    <option>Добавьте</option>
                </select>
            </div>
        </section>

        <Footer />
    </div>
  )
}

export default Products