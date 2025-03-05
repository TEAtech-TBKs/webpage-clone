import React from 'react'
// import { faHome } from '@fortawesome/free-solid-svg-icons'
import style from './Grid.module.css'
import Image1 from './google.png'
import Image2 from './Interswitch.png'
import Image3 from './Andela-log-landscape-blue-400px.png'
import Image4 from './Microsoft_logo.png'
import Image5 from './Paystack.png'
import Image6 from './brewery.png'
import Image7 from './Wema-Bank-Logo.png'
import Image8 from './clan-logo.png'
import Image9 from './edozzier.png'
import Image10 from './moneymie.png'
import Image11 from './Nigerian_Army.png'
import Image12 from './aella-credit.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Grid = () => {
  return (
      <>
    <div className={style.main}>
    <h2>Our alumni work at world-class companies around the world including
    </h2>
<div className={style.container}>
  <div className={style.icon}>
    <div className={style.google}>
      <img src={Image1} alt="" />
    </div>
    <div className={style.google}>
      <img src={Image2} alt="" />
    </div>
    <div className={style.google}>
      <img src={Image3} alt="" />
    </div>
    <div className={style.google}>
      <img src={Image4} alt="" />
    </div>
  </div>
  <div className={style.icon}>
    <div className={style.paystack}>
      <img src={Image5} alt="" />
    </div>
    <div className={style.paystack}>
      <img src={Image6} alt="" />
    </div>
    <div className={style.paystack}>
      <img src={Image7} alt="" />
    </div>
    <div className={style.paystack}>
      <img src={Image8} alt="" />
    </div>
  </div>
  <div className={style.icon}>
  <div className={style.edozzier}>
      <img src={Image9} alt="" />
    </div>
  <div className={style.edozzier}>
      <img src={Image10} alt="" />
    </div>
  <div className={style.edozzier}>
      <img src={Image11} alt="" />
    </div>
  <div className={style.edozzier}>
      <img src={Image12} alt="" />
    </div>
  
  </div>
</div>
    </div>
    </>
  )
}

export default Grid