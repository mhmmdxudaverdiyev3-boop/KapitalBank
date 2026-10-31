import React, { useState } from 'react';
import telShop from '../assets/telShop.png'
import credit from '../assets/kredit.png'


const Slider = () => {

const sliderData =[

{write1:"İndi al, sonra ödə", picture1: "telShop"},
{write2:"Nağd kreditin maksimal məbləğini artırdıq", picture2: "credit"},
{write3:"İndi al, sonra ödə", picture3: "telShop"},
{write4:"Nağd kreditin maksimal məbləğini artırdıq", picture4: "credit"},

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
      
<h2>{sliderData[cariIndex].write1}</h2>

<img src={sliderData[cariIndex].picture1} alt="#" />

    </div>
  )
}

export default Slider
