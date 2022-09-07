import React from 'react'
import classes from './Body.module.scss'
import { Input } from './Input';
import { SideMenu } from './SideMenu';


export const Body = () => {

  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <div className={classes.body__inner}>
          <div className={classes.title__block}>
            <h1 className={classes.title}>Услуги</h1>
            <Input />
          </div>
          <p className={classes.text}>Из-за ежедневного использования повседневная одежда быстро изнашивается и нуждается в профессиональном уходе. То, что чаще носится, должно и чаще чиститься! Подбирать для повседневной одежды правильные программы обработки – это задача профессионалов.</p>
          <div>
            <SideMenu />
          </div>
        </div>
      </div>
    </div>
  )
}