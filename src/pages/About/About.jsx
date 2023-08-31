import React from 'react';
import './About.css';

import img from '../../pictures/background.jpg';


const About = () => {
  return (
    <div className="about" id='about'>

    <img src={img} alt="" />

    <div className="about-info">

      <h1>ABOUT <br /> NGOPISLURR</h1>

      <p>
        Coffee is a beverage prepared from roasted coffee beans.
        Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans,
        primarily due to its caffeine content. It has the highest sales in the world market for hot drinks.
        The seeds of the Coffea plant's fruits are separated to produce unroasted green coffee beans.
        The beans are roasted and then ground into fine particles that are typically steeped in hot water before being filtered out,
        producing a cup of coffee. It is usually served hot, although chilled or iced coffee is common.
        Coffee can be prepared and presented in a variety of ways (e.g., espresso, French press, caffè latte,
        or already-brewed canned coffee). Sugar, sugar substitutes, milk, and cream are often added to mask the bitter taste or enhance the flavor.
      </p>

    </div>

  </div>
  )
}

export default About