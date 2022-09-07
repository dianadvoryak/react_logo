import React, { useState } from 'react'
import classes from './PlusGoods.module.scss'

export const PlusGoods = () => {
  const [add, setAdd] = useState(true)
  const [count, setCount] = useState(0)

  const AddCount = () => {
    setCount(count+1)
    if(count === 0){
      setAdd(false)
    } else {
      setAdd(true)
    }
  }
  const MinusCount = () => {
    setCount(count-1)
    if(count === 0){
      setAdd(false)
    } else {
      setAdd(true)
    }
  }
  console.log(count)

  return (
    <div>
      {
        add
        ? (
            <div className={classes.wrapper}>
              <div onClick={MinusCount}>-</div>
              <div>{count}</div>
              <div onClick={AddCount}>+</div>
            </div>
          )
        : <img onClick={AddCount} className={classes.img} src='./Cars.png' alt="" />
      }
    </div>
  )
}