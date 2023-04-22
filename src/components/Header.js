import React from 'react';

import { useContext } from 'react';
//sidebar context
import { SidebarContext } from '../contexts/SidebarContext';

//cart context
import { CartContext } from '../contexts/CartContext';

//import icons
import { BsBag } from 'react-icons/bs';

//import link
import { Link } from 'react-router-dom';

//import Logo
import Logo from '../img/logo.svg';


const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const { itemAmount } = useContext(CartContext);

  return <header className=' bg-pink-200  '>
    <Link>
      <div>
        <img src='' to="/" alt="home" />
      </div>
    </Link>
    <div onClick={() => setIsOpen(!isOpen)} className=' cursor-pointer flex relative max-w-[50px]'> <BsBag className='text-2xl  ' /> </div>
    <div className='bg-red-500 absolute -right-2 -bottom-2 text-[2px] h-[18px]
     w-[18px] text-white rounded-full justify-center flex items-center'>{itemAmount}</div>
  </header>;
};

export default Header;
