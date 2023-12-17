import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import {Link} from "react-scroll"

const Header = () => {

  const mobile = window.innerWidth<=768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <div className='header'>
      <img src={Logo} alt="" className='logo'/>

      {menuOpened === false && mobile === true ? (
        <div
        style=
        {{
          backgroundColor: '#656565', 
          padding: '0.5rem', 
          borderRadius: '5px',
          right: '1rem'
        }}
        
        onClick={()=> setMenuOpened(true)} 
          
        >
          <img src={Bars} alt="" style={{width: '1.5rem', height: '1.5rem'}} />
        </div>
      ) : (
        <div className='header-menu'>
          <a href="#">
            <Link
              onClick={()=> setMenuOpened(false)}
              activeClass="active"
              to='Home'
              spy={true}
              smooth={true}
            >Home</Link>
          </a>
          <a href="#">
          <Link
              onClick={()=> setMenuOpened(false)}
              to='Programs'
              spy={true}
              smooth={true}
            >Programs</Link>
          </a>
          <a href="#">
          <Link
              onClick={()=> setMenuOpened(false)}
              to='Reasons'
              spy={true}
              smooth={true}
            >Why Us</Link>
          </a>
          <a href="#">
          <Link
              onClick={()=> setMenuOpened(false)}
              to='Plans'
              spy={true}
              smooth={true}
            >Plans</Link>
          </a>
          <a href="#">
          <Link
              onClick={()=> setMenuOpened(false)}
              to='Testimonials'
              spy={true}
              smooth={true}
            >Testimonials</Link>
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;