import React from 'react';
import styles from '../styles/NavBar.module.css'; 
import Kart from '../assets/AgBirBank.png'
import Pul from '../assets/pulPacka.webp'
import Bank from '../assets/safe.png'
import Circle from '../assets/bblogo.png'
import cashback from '../assets/Cashback.png'


const NavBar = () => {
  return (
    <>
      <nav className= {styles.info}>
        <ul className={styles.navbar}> 
          <li className={styles.navItem}>
            <a href="#">KARTLAR</a>
            <div className={styles.banner}>
              <p>
              <div className= {styles.banner1}>
               <div className={styles.kartService}> 
                <div className= {styles.kart}>
                <a href="#">Birbank kartları</a>
                <a href="#">Premium kartlar</a>
                <a href="#">TələbəPlus</a>
                <a href="#">Təhlükəsizlik qaydaları</a>
                </div>
                <div className= {styles.kart_n}>
                  <a href="#">3D secure</a>
                  <a href="#">Kart sifarişi</a>
                  <a href="#">Birbank kartının eyniləşdirilməsi</a>
                </div>
               </div> 

               <div className= {styles.container}>

                <div className= {styles.credit}>
                <h2>Birbank Star</h2>
                <p>30 000 ₼-dək kredit xətti, limitsiz <br />
                 nağdlaşdırma və köçürmə imkanı, <br />
                  partnyorlardan keşbek və QR <br /> ödənişlərdə 2 qat ƏDV kimi çoxsaylı <br /> 
                  üstünlükləri olan, sadə və unikal bir <br />
                   kartdır.​ ​</p>
                <button className= {styles.post}>Bir kliklə sifariş et</button>
                </div>

                <div>
                  <img src= {Kart} alt="BirBankKarti"  style={{width: '150px', height: '230px' }}/>
                </div>
               </div>
              </div>   
              </p>
            </div>
          </li>

          <li className={styles.navItem}>
            <a href="#">KREDİTLƏR</a>
            <div className={styles.banner}>
                <p>
                  <div>
                  <div className= {styles.banner1}>
                    <div className={styles.kartService}> 
                      <div className= {styles.kart}>
                        <a href="#">Nağd pul krediti</a>
                        <a href="#">Mikro Biznes Kreditləri</a>
                        <a href="#">Sif krediti</a>
                        <a href="#">AKİA kreditləri</a>
                      </div>
                      <div className= {styles.kart_n}>
                        <a href="#">Avtomobil krediti</a>
                        <a href="#">Əmanət təminatlı kredit</a>
                      </div>
                    </div>
                    <div className= {styles.container}>
                      <div className= {styles.credit}>
                        <h2>Nağd pul krediti</h2>
                        <p>80000 AZN dək Nağd pul krediti</p>
                        <button className = {styles.post}>Bir kliklə sifariş et</button>
                      </div>
                      <div>
                        <img src= {Pul} alt="pulPackasi" />
                      </div>
                    </div>
                  </div>
                  </div>
                </p>
            </div>
          </li>

          <li className={styles.navItem}>
            <a href="#">IPOTEKALAR</a>
          </li>

          <li className={styles.navItem}>
            <a href="#">ƏMANƏTLƏR</a>
            <div className={styles.banner}>
                <p>
                  <div className= {styles.banner1}>
                    <div className={styles.kartService}> 
                     <div className= {styles.kart}>
                      <a href="#">Depozit</a>
                      <a href="#">Yığım hesabı</a>
                      <a href="#">Müddətsiz depozit</a>
                      <a href="#">Depozit seyfləri</a>
                     </div>
                    </div>
                  <div className= {styles.container}>
                    <div className= {styles.credit}>
                      <h2>Depozit</h2>
                      <p>Yüksək faizlər əldə etməklə <br />
                       yanaşı, siz müqavilənin bitmə <br />
                       tarixinə 1 ay (30 təqvim günü) <br />
                       qalanadək depozit məbləğini <br />
                        artıra bilərsiniz.</p>
                      <button className = {styles.post} >Daha ətraflı</button>
                    </div>
                    <div>
                      <img src= {Bank} alt="bank" />
                    </div>
                  </div>
                  </div>
                </p>
            </div>
          </li>

          <li className={styles.navItem}>
            <a href="#">İSTİQRAZ</a>
        
          </li>

          <li className={styles.navItem}>
            <a href="#">PUL KÖÇÜRMƏLƏRİ</a>
            <div className={styles.banner}>
                <p>
                  <div className= {styles.banner1}>
                    <div className={styles.kartService}> 
                       <div className= {styles.kart}>
                        <a href="#" style={{color: 'red'}}>Birbank ilə istənilən karta pul köçürün!</a>
                        <a href="#">Xəzri</a>
                        <a href="#">Zolotaya Korona</a>
                        <a href="#">Western Union</a>
                       </div>
                    </div> 
                    <div className= {styles.container}>
                      <div className= {styles.credit}>
                        <h2>Birbank</h2>
                        <p>Birbankla istənilən karta pul <br />
                         köçürün! Artıq Birbankla <br />
                          telefonunuzdan istənilən bank <br />
                           kartına asanlıqla pul göndərə <br />
                            bilərsiniz.</p>
                        <button className = {styles.post}>Daha ətraflı</button>
                      </div>
                      <div>
                        <img src= {Circle} alt="logo" style={{width: '250px', height: '250px'}}/>
                      </div>
                    </div>
                  </div>
                </p>
            </div>
          </li>

          <li className={styles.navItem}>
            <a href="#">ONLAYN XİDMƏTLƏR</a>
            <div className={styles.banner}>
                <p>
                  <div className= {styles.banner1}>
                    <div className={styles.kartService}> 
                       <div className= {styles.kart}>
                        <a href="#">Kart sifarişi</a>
                        <a href="#">Kredit sifarişi</a>
                        <a href="#">Onlayn növbə</a>
                        <a href="#">Arayış və çıxarışların alınması</a>
                       </div>
                    </div> 
                    <div className= {styles.container}>
                      <div className= {styles.credit}>
                        <h2>Birbank Cashback</h2>
                        <p>2 qat ƏDV, şəxsi vəsaitdən pulsuz <br />
                         köçürmə, 30%-dək keşbek, taksit kartı <br />
                          kimi istifadədə isə əlavə olaraq 24 <br />
                           ayadək faizsiz taksit və 63 günədək <br />
                            güzəşt müddəti qazandıran unikal bir <br />
                             kartdır.</p>
                        <button className = {styles.post}>Bir kliklə sifariş et</button>
                      </div>
                      <div>
                        <img src= {cashback} alt="logo" style={{width: '150px', height: '250px'}}/>
                      </div>
                    </div>
                  </div>
                </p>
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
