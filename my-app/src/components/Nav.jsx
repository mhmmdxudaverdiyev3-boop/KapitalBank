import React from 'react'
import styles from '../styles/Nav.module.css';
import  KapitalBankLogo from '../assets/KapitalBankLogo.png';


const Nav = () => {
  return (
    <>
      <div className={styles.logo}>
        <img src= {KapitalBankLogo } alt="logo" />
        <h2>Kapital Bank</h2>
      </div>

      <div className={styles.menu}>
        <a href='#'>Fiziki</a>
        <a href='#'>Biznes</a>
        <a href='#'>Invest</a>
        <a href='#'>Xidmət şəbəkəsi</a>
        <a href='#'>EN</a>
        <a href='#'>RU</a>
        <button>⌕</button>
      </div>
    </>
  );
};

export default Nav;