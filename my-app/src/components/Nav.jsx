import React, { useState } from 'react';
import styles from '../styles/Nav.module.css';
import KapitalBankLogo from '../assets/KapitalBankLogo.png';

const Nav = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Axtarılır:', searchQuery);
    }
  };

  return (
    <>
      <div className={styles.logo}>
        <img src={KapitalBankLogo} alt="logo" />
        <h2>Kapital Bank</h2>
      </div>

      {isSearchOpen ? (
        /* AXTARIŞ PANELİ AÇIQ OLDUQDA */
        <div className={styles.searchContainer}>
          <form className={styles.searchBox} onSubmit={handleSearch}>
            <span className={styles.searchIcon}>⌕</span>
            <input
              type="text"
              placeholder="Sorğunuzu daxil edin"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
          </form>

          <div className={styles.searchActions}>
            <button className={styles.searchBtn} onClick={handleSearch}>
              Axtar
            </button>
            <button
              className={styles.closeBtn}
              onClick={() => {
                setIsSearchOpen(false);
                setSearchQuery('');
              }}
            >
              ✕
            </button>
          </div>
        </div>
      ) : (
        /* SƏNİN MÖVCUD MENYUN */
        <div className={styles.menu}>
          <a href="#">Fiziki</a>
          <a href="#">Biznes</a>
          <a href="#">Invest</a>
          <a href="#">Xidmət şəbəkəsi</a>
          <a href="#">EN</a>
          <a href="#">RU</a>
          <button onClick={() => setIsSearchOpen(true)}>⌕</button>
        </div>
      )}

      {/* AXTARIŞ AÇIQ OLDUQDA AŞAĞIDA ÇIXAN TEQLƏR */}
      {isSearchOpen && (
        <div className={styles.quickTags}>
          <button>Birbank kartı al</button>
          <button>kredit əldə et</button>
          <button>Kart sifarişi</button>
        </div>
      )}
    </>
  );
};

export default Nav;