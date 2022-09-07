import React, {useState} from 'react'
import classes from './Goods.module.scss'
import { PlusGoods } from './PlusGoods';

export const Goods = ({value}) => {
  
  return (
    <div>
      {value.map((e, i) => (
        <div className={classes.block} key={i}>
          <div className={classes.text}>{e.product}</div>
          <div className={classes.price}>
            {e.price}
            <PlusGoods />
          </div>
          <div className={classes.more}>Подробнее</div>
        </div>
      ))}
    </div>
  )
}