import React from 'react'
import { Selector } from './Selector'
import classes from './Header.module.scss'

export const Header = () => {

  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <div className={classes.header__inner}>
          <div className={classes.header__black}>
            <div className={classes.header__wrapper}>
              <p className={classes.header__tel}>+(373) 22 83-87-87</p>
              <p className={classes.header__separator}>|</p>
              <p className={classes.header__icons}>
                <img className={classes.header__icon} src="./ig.png" alt="" />
                <img className={classes.header__icon} src="./fb.png" alt="" />
                <img className={classes.header__icon} src="./tl.png" alt="" />
                <img className={classes.header__icon} src="./ws.png" alt="" />
              </p>
            </div>
          </div>
          <div className={classes.header__white}>
            <div className={classes.header__wrapper}>
              <Selector />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}