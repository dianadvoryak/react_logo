import React, { useState } from 'react'
import { Goods } from './Goods'
import classes from './SideMenu.module.scss'


export const SideMenu = () => {
  
  const menuItem1 = {
    name: 'Химчистка',
    submenu: ['Ремонт одежды', 'Верхняя одежда', 'Деловой костюм', 'Джинса', 'Куртка и пуховик', 'Пальто и плащ'],
    goods: [
      {
        product: 'Пальто, полупальто с подстежкой из натурального меха', 
        price: '1 400₽'
      },
      {
        product: 'Ветровка',
        price: '520₽'
      },
      {
        product: 'Ветровка (натуральный шелк)', 
        price: '1 400₽'
      },
      {
        product: 'Пальто, полупальто с подстежкой из натурального меха',
        price: '1 400₽'
      },
    ]
  }
  const [menu1, useMenu1] = useState(true)
  const [goods1, useGoods1] = useState(true)
  const ShowHandler1 = () => {
    useMenu1(!menu1)
    useMenu2(false)
    useMenu3(false)
    useMenu4(false)
    useMenu5(false)
    useMenu6(false)
  }

  const menuItem2 = {
    name: 'Аквачистка',
    submenu: ['Деловой костюм', 'Верхняя одежда', 'Аксессуары', 'Джинса', 'Куртка и пуховик', 'Пальто и плащ'],
    goods: [
      {
        product: 'Пальто, полупальто с подстежкой из натурального меха', 
        price: '1 400₽'
      },
      {
        product: 'Ветровка',
        price: '520₽'
      },
      {
        product: 'Ветровка (натуральный шелк)', 
        price: '1 400₽'
      },
      {
        product: 'Пальто, полупальто с подстежкой из натурального меха',
        price: '1 400₽'
      },
    ]
  }
  const [menu2, useMenu2] = useState(false)
  const [goods2, useGoods2] = useState(false)
  const ShowHandler2 = () => {
    useMenu2(!menu2)
    useMenu1(false)
    useMenu3(false)
    useMenu4(false)
    useMenu5(false)
    useMenu6(false)
  }

  const menuItem3 = {
    name: 'Ремонт одежды',
    submenu: ['Деловой костюм', 'Верхняя одежда', 'Аксессуары', 'Джинса', 'Куртка и пуховик', 'Пальто и плащ'],
    goods: [
      {
        product: 'Пальто, полупальто с подстежкой из натурального меха', 
        price: '1 400₽'
      },
      {
        product: 'Ветровка',
        price: '520₽'
      },
      {
        product: 'Ветровка (натуральный шелк)', 
        price: '1 400₽'
      },
      {
        product: 'Пальто, полупальто с подстежкой из натурального меха',
        price: '1 400₽'
      },
    ]
  }
  const [menu3, useMenu3] = useState(false)
  const [goods3, useGoods3] = useState(false)
  const ShowHandler3 = () => {
    useMenu3(!menu3)
    useMenu1(false)
    useMenu2(false)
    useMenu4(false)
    useMenu5(false)
    useMenu6(false)
  }

  const menuItem4 = {
    name: 'Химчистка',
    submenu: ['Деловой костюм', 'Верхняя одежда', 'Аксессуары', 'Джинса', 'Куртка и пуховик', 'Пальто и плащ'],
    goods: [
      {
        product: 'Пальто, полупальто с подстежкой из натурального меха', 
        price: '1 400₽'
      },
      {
        product: 'Ветровка',
        price: '520₽'
      },
      {
        product: 'Ветровка (натуральный шелк)', 
        price: '1 400₽'
      },
      {
        product: 'Пальто, полупальто с подстежкой из натурального меха',
        price: '1 400₽'
      },
    ]
  }
  const [menu4, useMenu4] = useState(false)
  const [goods4, useGoods4] = useState(false)
  const ShowHandler4 = () => {
    useMenu4(!menu4)
    useMenu1(false)
    useMenu2(false)
    useMenu3(false)
    useMenu5(false)
    useMenu6(false)
  }

  const menuItem5 = {
    name: 'Аквачистка',
    submenu: ['Деловой костюм', 'Верхняя одежда', 'Аксессуары', 'Джинса', 'Куртка и пуховик', 'Пальто и плащ'],
    goods: [
      {
        product: 'Пальто, полупальто с подстежкой из натурального меха', 
        price: '1 400₽'
      },
      {
        product: 'Ветровка',
        price: '520₽'
      },
      {
        product: 'Ветровка (натуральный шелк)', 
        price: '1 400₽'
      },
      {
        product: 'Пальто, полупальто с подстежкой из натурального меха',
        price: '1 400₽'
      },
    ]
  }
  const [menu5, useMenu5] = useState(false)
  const [goods5, useGoods5] = useState(false)
  const ShowHandler5 = () => {
    useMenu5(!menu5)
    useMenu1(false)
    useMenu2(false)
    useMenu3(false)
    useMenu4(false)
    useMenu6(false)
  }

  const menuItem6 = {
    name: 'Ремонт одежды',
    submenu: ['Деловой костюм', 'Верхняя одежда', 'Аксессуары', 'Джинса', 'Куртка и пуховик', 'Пальто и плащ'],
    goods: [
      {
        product: 'Пальто, полупальто с подстежкой из натурального меха', 
        price: '1 400₽'
      },
      {
        product: 'Ветровка',
        price: '520₽'
      },
      {
        product: 'Ветровка (натуральный шелк)', 
        price: '1 400₽'
      },
      {
        product: 'Пальто, полупальто с подстежкой из натурального меха',
        price: '1 400₽'
      },
    ]
  }
  const [menu6, useMenu6] = useState(false)
  const [goods6, useGoods6] = useState(false)
  const ShowHandler6 = () => {
    useMenu6(!menu6)
    useMenu1(false)
    useMenu2(false)
    useMenu3(false)
    useMenu4(false)
    useMenu5(false)
  }
  
  

  return (
    <div className={classes.beetwen}>
      <div>
        <div onClick={ShowHandler1} className={classes.menu__item}>
            {menuItem1.name}
            {
              menu1
              ? menuItem1.submenu.map((item, i) => (
                <div key={i} className={classes.submenu__item} onClick={e => e.stopPropagation()}>{item}</div>
              ))
              : ''
            }
        </div>
        <div onClick={ShowHandler2} className={classes.menu__item}>
            {menuItem2.name}
            {
              menu2
              ? menuItem2.submenu.map((item, i) => (
                <div key={i} className={classes.submenu__item} onClick={e => e.stopPropagation()}>{item}</div>
              ))
              : ''
            }
        </div>
        <div onClick={ShowHandler3} className={classes.menu__item}>
            {menuItem3.name}
            {
              menu3
              ? menuItem3.submenu.map((item, i) => (
                <div key={i} className={classes.submenu__item} onClick={e => e.stopPropagation()}>{item}</div>
              ))
              : ''
            }
        </div>
        <div onClick={ShowHandler4} className={classes.menu__item}>
            {menuItem4.name}
            {
              menu4
              ? menuItem4.submenu.map((item, i) => (
                <div key={i} className={classes.submenu__item} onClick={e => e.stopPropagation()}>{item}</div>
              ))
              : ''
            }
        </div>
        <div onClick={ShowHandler5} className={classes.menu__item}>
            {menuItem5.name}
            {
              menu5
              ? menuItem5.submenu.map((item, i) => (
                <div key={i} className={classes.submenu__item} onClick={e => e.stopPropagation()}>{item}</div>
              ))
              : ''
            }
        </div>
        <div onClick={ShowHandler6} className={classes.menu__item}>
            {menuItem6.name}
            {
              menu6
              ? menuItem6.submenu.map((item, i) => (
                <div key={i} className={classes.submenu__item} onClick={e => e.stopPropagation()}>{item}</div>
              ))
              : ''
            }
        </div>
      </div>
      {
        menu1
        ? <Goods value={menuItem1.goods} className={classes.right}/>
        : ''
      }
      {
        menu2
        ? <Goods value={menuItem2.goods} className={classes.right}/>
        : ''
      }
      {
        menu3
        ? <Goods value={menuItem3.goods} className={classes.right}/>
        : ''
      }
      {
        menu4
        ? <Goods value={menuItem4.goods} className={classes.right}/>
        : ''
      }
      {
        menu5
        ? <Goods value={menuItem5.goods} className={classes.right}/>
        : ''
      }
      {
        menu6
        ? <Goods value={menuItem6.goods} className={classes.right}/>
        : ''
      }
      
    </div>
  )
}