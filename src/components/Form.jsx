import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import {useForm, HookForm} from 'react-hook-form'
import s from './Form.module.css'

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className={s.md}>
      <h2>Форма обратной связи</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div><input {...register("firstName", { required: true, maxLength: 20 })} className={s.field} placeholder="Имя" /></div>
          <div><input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} placeholder="Фамилия" className={s.field}/></div>
          <div><input type="number" {...register("phone", { min: 18, max: 99 })} placeholder="Номер телефона" className={s.field}/></div>
          <div><input {...register("email", { min: 18, max: 99 })} placeholder="E-mail" className={s.field}/></div>
          <div><input {...register("message", { min: 18, max: 250 })} placeholder="Напишите свой вопрос" className={s.message}/></div>
          <div><input type="submit" className={s.button}/></div>
        </form>
      </form>
  </div>
  )
}