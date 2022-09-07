import React from 'react'
import classes from './SubHeader.module.scss'

export const SubHeader = () => {

  return (
    <div className={classes.prise}>
      <div className={classes.container}>
      <div className={classes.prise__inner}>
      <img className={classes.prise__img} src="./menu.png" alt="" />
      <img className={classes.prise__logo} src="./logo.png" alt="" />
      <div className={classes.prise__block}>
        <img className={classes.prise__src} src="./search.png" alt="" />
        <p className={classes.prise__name}>Прайс-лист</p>
      </div>
    </div>
    </div>
    </div>
  )
}