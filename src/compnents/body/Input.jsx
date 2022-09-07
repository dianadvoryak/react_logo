import React, { useState } from 'react'
import classes from './Input.module.scss'

export const Input = () => {
  const [value, setValue] = useState('')
  const [count, setCount] = useState(false)
  const [img, setImg] = useState(true)
  
  const verification = (event) => {
    setValue(event)
    if(event.length > 20){
      setCount(true)
    } else {
      setCount(false)
    }
    if(event){
      setImg(false)
    }else{
      setImg(true)
    }
  }

  const cleanForm = () => {
    setValue('')
  }

  const submitHandler = event => {
    event.preventDefault()
    setValue('')
    setCount(false)
    setImg(true)
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={`${classes.input__wrapper} ${count ? classes.active : classes.input__wrapper}`} >
        <input 
          className={classes.input}
          value={value}
          placeholder={'Поиск'}
          type='text'
          onChange={event => verification(event.target.value)}
        />
        {
          img 
          ? <div className={classes.img}><img src="./find.png" alt="" /></div>
          : <div onClick={cleanForm} className={classes.img}><img src="./close.png" alt="" /></div>
        }
      </div>
      {
        count
        ? <p className={classes.message}>Слишком длинный запрос</p>
        : ''
      }
    </form>
  )
}