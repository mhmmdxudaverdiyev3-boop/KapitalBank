import React from 'react';
import styles from '../styles/NavBar.module.css'; 

const NavBar = () => {
  return (
    <>
      <nav className= {styles.info}>
        <ul className={styles.navbar}> 
          <li className={styles.navItem}>
            <a href="#">KARTLAR</a>
            <div className={styles.banner}>
              <p>Bura banner məzmunu gəlir (şəkil, link və s.)</p>
            </div>
          </li>

          <li className={styles.navItem}>
            <a href="#">KREDİTLƏR</a>
            <div className={styles.banner}>
                <p>kjkjjj</p>
            </div>
          </li>

          <li className={styles.navItem}>
            <a href="#">IPOTEKALAR</a>
          </li>

          <li className={styles.navItem}>
            <a href="#">ƏMANƏTLƏR</a>
            <div className={styles.banner}>
                <p></p>
            </div>
          </li>

          <li className={styles.navItem}>
            <a href="#">İSTİQRAZ</a>
        
          </li>

          <li className={styles.navItem}>
            <a href="#">PUL KÖÇÜRMƏLƏRİ</a>
            <div className={styles.banner}>
                <p>kjkjjj</p>
            </div>
          </li>

          <li className={styles.navItem}>
            <a href="#">ONLAYN XİDMƏTLƏR</a>
            <div className={styles.banner}>
                <p>kjkjjj</p>
            </div>
          </li>

          <li className={styles.navItem}>
            <a href="#">KAMPANİYALAR</a>
        
          </li>

          <li className={styles.navItem}>
            <a href="#">FƏRDİ BANKÇILIQ</a>
        
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar; 
