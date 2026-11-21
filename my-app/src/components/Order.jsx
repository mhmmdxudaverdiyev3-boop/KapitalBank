import React from 'react'
import monBag from '../assets/monBag.png'
import birBank from '../assets/bblogo.png'
import Bank from '../assets/Bank.png'
import Shop from '../assets/Shop.png'
import mega from '../assets/megaPhone.png'
import styles from '../styles/Order.module.css'


const Order = () => {
  return (
    <div>
<div className= {styles.cards}>
  
<div className= {styles.cardOne}>
  <img src={monBag} alt="pul"/>
  <p>Kredit sifariş et</p>
</div>

<div className= {styles.cardOne}>
  <img src={birBank} alt="logo"/>
  <p>Kredit sifariş et</p>
</div>

<div className= {styles.cardOne}>
  <img src={Bank} alt="kassa"/>
  <p>Kredit sifariş et</p>
</div>

<div className= {styles.cardOne}>
  <img src={Shop} alt="magaza"/>
  <p>Kredit sifariş et</p>
</div>

<div className= {styles.cardOne}>
  <img src={mega} alt="megaPhone"/>
  <p>Kredit sifariş et</p>
</div>

</div>      
    </div>
  )
}

export default Order
