import React, { useState } from 'react';
import telShop from '../assets/telShop.png'
import credit from '../assets/kredit.png'
import styles from '../styles/Slider.module.css'


const Slider = () => {

const sliderData =[

{write1:"İndi al, sonra ödə", picture1: telShop , teg1:"Trendyolda rahatlıqla alış-veriş et" , button1: "alış-veriş et"},
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
<p>{sliderData[cariIndex].teg1}</p>
<button className= {styles.btn}>{sliderData[cariIndex].button1}</button>

</div>
<div className= {styles.picOne}>
  <div>
    <img src={sliderData[cariIndex].picture1} alt="#" />
  </div>
</div>

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
