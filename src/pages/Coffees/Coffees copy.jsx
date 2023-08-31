import React from 'react';
import './Coffees.css';

import black from '../../pictures/coffees/black.jpg';
import latte from '../../pictures/coffees/latte.jpg';
import cappuccino from '../../pictures/coffees/cappuccino.jpg';
import Americano from '../../pictures/coffees/Americano.jpg';
import Espresso from '../../pictures/coffees/Espresso.jpg';
import Doppio from '../../pictures/coffees/Doppio.jpg';
import Cortado from '../../pictures/coffees/Cortado.jpg';
import RedEye from '../../pictures/coffees/Red Eye.jpg';
import Galão from '../../pictures/coffees/Galão.jpg';
import Lungo from '../../pictures/coffees/Lungo.jpg';
import Macchiato from '../../pictures/coffees/Macchiato.jpg';
import Mocha from '../../pictures/coffees/Mocha.jpg';
import Ristretto from '../../pictures/coffees/Ristretto.jpg';
import FlatWhite from '../../pictures/coffees/FlatWhite.jpg';
import Affogato from '../../pictures/coffees/Affogato.jpg';
import CaféAuLait from '../../pictures/coffees/CaféAuLait.jpg';
import Irish from '../../pictures/coffees/Irish.jpg';


const coffees = [
    {id:1 ,type: "Black" ,description: "Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir. Since it isn’t doctored up with milk or sugar, the quality of coffee is especially important. Treat yourself to a coffee subscription box to find your favorite style." },
    {id:1 ,type: "Black" ,description: "" },
    {id:1 ,type: "Black" ,description: "" },
    {id:1 ,type: "Black" ,description: "" },
    {id:1 ,type: "Black" ,description: "" },
    {id:1 ,type: "Black" ,description: "" },
    {id:1 ,type: "Black" ,description: "" },
    {id:1 ,type: "Black" ,description: "" },
    {id:1 ,type: "Black" ,description: "" },
    {id:1 ,type: "Black" ,description: "" },
    {id:1 ,type: "Black" ,description: "" },
  ];

const Coffees = () => {
  return (
    <div className="products" id='coffees'>

    <h1 className='products-title'>Types of Coffee</h1>

    <div className="products-boxs">

      <div className="products-boxs-box" key="1">

        <img className='products-boxs-box-img' src={black} alt="" />

        <div className="products-boxs-box-info">

          <h3 className="products-boxs-box-info-title"></h3>

          <p className="products-boxs-box-info-description"></p>

        </div>

      </div>

      <div className="products-boxs-box" key="2">

        <img className='products-boxs-box-img' src={latte} alt="" />

        <div className="products-boxs-box-info">

          <h3 className="products-boxs-box-info-title">Latte</h3>

          <p className="products-boxs-box-info-description">As the most popular coffee drink out there, the latte is comprised of a shot of espresso and steamed milk with just a touch of foam. It can be ordered plain or with a flavor shot of anything from vanilla to pumpkin spice. (Here’s how to make a copycat Starbucks pumpkin spice latte.)</p>

        </div>

      </div>

      <div className="products-boxs-box" key="3">

        <img className='products-boxs-box-img' src={cappuccino} alt="" />

        <div className="products-boxs-box-info">

          <h3 className="products-boxs-box-info-title">Cappuccino</h3>

          <p className="products-boxs-box-info-description">Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top. Sometimes you can find variations that use cream instead of milk or ones that throw in flavor shot, as well.</p>

        </div>

      </div>

      <div className="products-boxs-box" key="4">

        <img className='products-boxs-box-img' src={Americano} alt="" />

        <div className="products-boxs-box-info">

          <h3 className="products-boxs-box-info-title">Americano</h3>

          <p className="products-boxs-box-info-description">With a similar flavor to black coffee, the americano consists of an espresso shot diluted in hot water. Pro tip: if you’re making your own, pour the espresso first, then add the hot water.</p>

        </div>

      </div>

      <div className="products-boxs-box" key="5">

        <img className='products-boxs-box-img' src={Espresso} alt="" />

        <div className="products-boxs-box-info">

          <h3 className="products-boxs-box-info-title">Espresso</h3>

          <p className="products-boxs-box-info-description">An espresso shot can be served solo or used as the foundation of most coffee drinks, like lattes and macchiatos. If you’re an at-home barista, this Breville Bambino and espresso accessories will turn your house into your own coffee shop. Figure out how an espresso is different from coffee. Always on the go? This portable espresso maker lets you brew your coffee without needing a power source, so you can take it with you wherever you need it!</p>
        </div>

      </div>

      <div className="products-boxs-box" key="6">

        <img className='products-boxs-box-img' src={Doppio} alt="" />

        <div className="products-boxs-box-info">

          <h3 className="products-boxs-box-info-title">Doppio</h3>

          <p className="products-boxs-box-info-description">A double shot of espresso, the doppio is perfect for putting extra pep in your step.</p>

        </div>

      </div>

      <div className="products-boxs-box" key="7">

        <img className='products-boxs-box-img' src={Cortado} alt="" />

        <div className="products-boxs-box-info">

          <h3 className="products-boxs-box-info-title">Cortado</h3>

          <p className="products-boxs-box-info-description">Like yin and yang, a cortado is the perfect balance of espresso and warm steamed milk. The milk is used to cut back on the espresso’s acidity.</p>

        </div>

      </div>

      <div className="products-boxs-box" key="8">

        <img className='products-boxs-box-img' src={RedEye} alt="" />

        <div className="products-boxs-box-info">

          <h3 className="products-boxs-box-info-title">Red Eye</h3>

          <p className="products-boxs-box-info-description">Named after those pesky midnight flights, a red eye can cure any tiresome morning. A full cup of hot coffee with an espresso shot mixed in, this will definitely get your heart racing.</p>

        </div>

      </div>

      <div className="products-boxs-box" key="9">

        <img className='products-boxs-box-img' src={Galão} alt="" />

        <div className="products-boxs-box-info">

          <h3 className="products-boxs-box-info-title">Galão</h3>

          <p className="products-boxs-box-info-description">Originating in Portugal, this hot coffee drink is closely related to the latte and cappuccino. Only difference is it contains about twice as much foamed milk, making it a lighter drink compared to the other two.</p>

        </div>

      </div>

      <div className="products-boxs-box" key="10">

        <img className='products-boxs-box-img' src={Lungo} alt="" />

        <div className="products-boxs-box-info">

          <h3 className="products-boxs-box-info-title">Lungo</h3>

          <p className="products-boxs-box-info-description">A lungo is a long-pull espresso. The longer the pull, the more caffeine there is and the more ounces you can enjoy.</p>

        </div>

      </div>

      <div className="products-boxs-box" key="11">

        <img className='products-boxs-box-img' src={Macchiato} alt="" />

        <div className="products-boxs-box-info">

          <h3 className="products-boxs-box-info-title">Macchiato</h3>

          <p className="products-boxs-box-info-description">The macchiato is another espresso-based drink that has a small amount of foam on top. It’s the happy medium between a cappuccino and a doppio.</p>

        </div>

      </div>

      <div className="products-boxs-box" key="12">

        <img className='products-boxs-box-img' src={Mocha} alt="" />

        <div className="products-boxs-box-info">

          <h3 className="products-boxs-box-info-title">Mocha</h3>

          <p className="products-boxs-box-info-description">For all you chocolate lovers out there, you’ll fall in love with a mocha (or maybe you already have). The mocha is a chocolate espresso drink with steamed milk and foam.</p>

        </div>

      </div>

      <div className="products-boxs-box" key="13">

        <img className='products-boxs-box-img' src={Ristretto} alt="" />

        <div className="products-boxs-box-info">

          <h3 className="products-boxs-box-info-title">Ristretto</h3>

          <p className="products-boxs-box-info-description">Ristretto is an espresso shot. It uses less hot water which creates a sweeter flavor compared to the bitter taste of a traditional shot of espresso or a doppio.</p>

        </div>

      </div>

      <div className="products-boxs-box" key="14">

        <img className='products-boxs-box-img' src={FlatWhite} alt="" />

        <div className="products-boxs-box-info">

          <h3 className="products-boxs-box-info-title">Flat White</h3>

          <p className="products-boxs-box-info-description">This Aussie-born drink is basically a cappuccino without the foam or chocolate sprinkle. It’s an espresso drink with steamed milk.</p>

        </div>

      </div>

      <div className="products-boxs-box" key="15">

        <img className='products-boxs-box-img' src={Affogato} alt="" />

        <div className="products-boxs-box-info">

          <h3 className="products-boxs-box-info-title">Affogato</h3>

          <p className="products-boxs-box-info-description">The affogato is an excuse to enjoy a scoop of ice cream any time of day (and any time of year in my opinion). Served with a scoop of ice cream and a shot of espresso, or two. The affogato is extra delicious served over a brownie, as a Brownie Affogato Sundae. If you like this, you must try Eiskaffee or ice cream coffee.</p>

        </div>

      </div>

      <div className="products-boxs-box" key="16">

        <img className='products-boxs-box-img' src={CaféAuLait} alt="" />

        <div className="products-boxs-box-info">

          <h3 className="products-boxs-box-info-title">Café au Lait</h3>

          <p className="products-boxs-box-info-description">Café au lait is perfect for the coffee minimalist who wants a bit more flavor. Just add a splash of warm milk to your coffee and you’re all set!</p>

        </div>

      </div>

      <div className="products-boxs-box" key="17">

        <img className='products-boxs-box-img' src={Irish} alt="" />

        <div className="products-boxs-box-info">

          <h3 className="products-boxs-box-info-title">Irish</h3>

          <p className="products-boxs-box-info-description">Irish coffee consists of black coffee, whiskey and sugar, topped with whipped cream. Here’s an Irish coffee recipe that will warm you right up.</p>

        </div>

      </div>

    </div>

     </div>
  )
}

export default Coffees