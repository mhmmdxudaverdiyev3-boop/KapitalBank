import React, { useState } from 'react';
import telShop from '../assets/telShop.png'
import credit from '../assets/kredit.png'
import styles from '../styles/Slider.module.css'


const Slider = () => {

  const sliderData = [
    { write1: "İndi al, sonra ödə", picture1: telShop, teg1: "Trendyolda rahatlıqla alış-veriş et", button1: "alış-veriş et", button3: "irəli", button4: "geri" },
    { write2: "Nağd kreditin maksimal məbləğini artırdıq", picture2: credit, button2: "Sifariş et" },
  ]

  const [cariIndex, setCariIndex] = useState(0);

  const handleNext = () => {
    if (cariIndex === sliderData.length - 1) {
      setCariIndex(0); 
    } else {
      setCariIndex(cariIndex + 1); 
    }
  };

  const handleBefore = () => {
    if (cariIndex === 0) {
      setCariIndex(sliderData.length - 1); 
    } else {
      setCariIndex(cariIndex - 1); 
    }
  };

  return (
    <div>
      <div className={styles.data}> 
        
    
        {sliderData[cariIndex].write1 && (
          <div className={styles.buy}>
            <h2>{sliderData[cariIndex].write1}</h2>
            <p>{sliderData[cariIndex].teg1}</p>
            {sliderData[cariIndex].button1 && (
              <button className={styles.btn}>{sliderData[cariIndex].button1}</button>
            )}
          </div>
        )}

       
        {sliderData[cariIndex].picture1 && (
          <div className={styles.picOne}>
            <img src={sliderData[cariIndex].picture1} alt="#" />
          </div>
        )}


        {sliderData[cariIndex].write2 && (
          <div className={styles.max}>
            <h2>{sliderData[cariIndex].write2}</h2>
            {sliderData[cariIndex].button2 && (
              <button className={styles.btn}>{sliderData[cariIndex].button2}</button>
            )}
          </div>
        )}

        
        {sliderData[cariIndex].picture2 && (
          <div className={styles.picOne}>
            <img src={sliderData[cariIndex].picture2} alt="#" />
          </div>
        )}

        <div className={styles.sliders}>
          <button onClick={handleBefore}>&lt;</button>
          <button onClick={handleNext}>&gt;</button>
        </div>

      </div> 
    </div>
  )
}

export default Slider
