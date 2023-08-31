import React from 'react';
import './Last.css';

import img from '../../pictures/background.jpg';
import coffeememe from '../../pictures/coffeememe.jpg';
import coffeememe1 from '../../pictures/coffeememe1.png';

const Last = () => {
  return (
    <div className="last">

    <div className="last-left">

      <h1>ESPICIALTY COFFEE SORTMENTS</h1>

      <img src={coffeememe} alt="" />

      <button>To Offer</button>

    </div>

    <div className="last-right">

      <h1>BARISTA PRO & INDIVDUAL TRAINING</h1>

      <img src={coffeememe1} alt="" />

      <button>To Offer</button>

    </div>

  </div>
  )
}

export default Last