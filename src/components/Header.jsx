import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import s from './Header.module.css'

const Header = () => {
  return (
    <div>
        <Navbar className={s.head}>
            <Container>
                <Navbar.Brand>
                  <div className={s.md}>
                    <div><img src='img/book.png' width={'50%'} alt='фото'></img></div>
                    <div><a>Книжная лавка</a></div>
                    <div><a href='/item'>Главная</a></div>
                    <div><a>Избранное</a></div>
                    <div><a href='/descriptions'>Описание</a></div>
                    <div><a href='/form'>Обратная связь</a></div>
                    <div><a className={s.cart}>Корзина</a></div>
                    </div>
                </Navbar.Brand>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header