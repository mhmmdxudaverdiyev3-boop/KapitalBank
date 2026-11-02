import React, { useState } from 'react';
import telShop from '../assets/telShop.png'
import credit from '../assets/kredit.png'
import styles from '../styles/Slider.module.css'


const Slider = () => {

const sliderData =[

{write1:"İndi al, sonra ödə", picture1: telShop},
{write2:"Nağd kreditin maksimal məbləğini artırdıq", picture2: credit},


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
<div className= {styles.data}>   

<div className= {styles.buy}>

<h2>{sliderData[cariIndex].write1}</h2>
<p>Trendyolda rahatlıqla alış-veriş et</p>
<button className= {styles.btn}>alış-veriş et</button>

</div>

<img src={sliderData[cariIndex].picture1} alt="#" />

<div className= {styles.sliders}>
<button onClick={handleBefore}>Geri</button>
<button onClick={handleNext}>İrəli</button>
</div>

</div> 

<div>

<h2>{sliderData[cariIndex].write2}</h2>

</div>


    </div>
  )
}

export default Slider
