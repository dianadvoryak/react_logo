import React from 'react'
import { useState } from 'react'
import classes from './Select.module.scss'

export const Selector = () => {
  const allLanguage = ['RU', 'ENG', 'MOL']
  const [value, setValue] = useState('RU')
  const [lang, setLang] = useState(false)

  const chooseLanguage = () => {
    setLang(!lang)
  }

  const chooseLanguageVar = (item) => {
    setValue(item)
  }

  return (
    <div className={classes.select__block}>
      {lang 
      ? 
        (<div className={classes.select}>
          {allLanguage.map((item) => (
            <div className={classes.item}>
              <div 
                className={classes.item__wrapper}
                key={item} 
                onClick={() => (chooseLanguageVar(item), chooseLanguage())}
              >{item}</div>
            </div>
          ))}
        </div>)
      : 
        (<div className={classes.selected} onClick={chooseLanguage}>
          {value}
        </div>)
      }

    </div>
  )
}