import React from 'react'
import classes from './App.module.scss'
import { Header } from './compnents/headers/Header'
import { SubHeader } from './compnents/headers/SubHeader'
import { Body } from './compnents/body/Body'

const App = () => {

  return (
    <div className={classes.app}>
      <Header />
      <SubHeader />
      <Body />
    </div>
  )
}

export default App