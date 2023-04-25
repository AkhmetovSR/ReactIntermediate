import React from 'react'
import Container from 'react-bootstrap/Container'
import '../App.css'
import s from './Footer.module.css'

const Footer = () => {
  return (
    <div>
        <footer className={s.f}>
            <Container>
                <h5>
                    Все права защищены
                </h5>
            </Container>
        </footer>
    </div>
  )
}

export default Footer