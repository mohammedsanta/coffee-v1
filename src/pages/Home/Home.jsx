import React from 'react';
import './Home.css';

import Welcome from '../Welcome/Welcome';
import Coffees from '../Coffees/Coffees';
import About from '../About/About';
import Menu from '../Menu/Menu';
import Last from '../Last/Last';
import Footer from '../Footer/Footer';

import scroll from '../../pictures/scroll.jpg'

const backScroll = () => {
  window.scrollTo(0,0);
}

const Home = () => {
  return (

    <>

      <button className='scroll'
        onClick={backScroll}
      ><img src={scroll} alt="" /></button>
    
      <Welcome />

      <Coffees />

      <About />

      <Menu />

      <Last />

      <Footer />

    </>

  )
}

export default Home