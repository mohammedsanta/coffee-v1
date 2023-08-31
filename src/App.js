import { NavLink, Outlet } from 'react-router-dom';
import './App.css';
import logo from './pictures/logo.png'

function App({ error }) {


  return (
    
    <>
    
      <header>

        <div className='header-links'>

          <NavLink to="/">Home</NavLink>
          <a href="#about">About us</a>

        </div>

        <div className='logo'>
          <img src={logo} />
        </div>

        <div className='header-links'>
          
          <a href="#menu">Menu</a>
          <a href="#coffees">Coffees</a>

        </div>

      </header>

      
      <div className="App">

        <Outlet />

      </div>
      
    
    </>
  );
}

export default App;
