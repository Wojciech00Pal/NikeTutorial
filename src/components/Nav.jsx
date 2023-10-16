import React, {useState} from 'react'
import images from '../assets/images';
import icons from '../assets/icons';
import { navLinks } from '../constants';

function Nav(){

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const showMenu = () => {
    setIsMenuVisible(!isMenuVisible); // Toggle the menu's visibility
  };


  return (
    <header className='padding-x py-6 fixed bg-white z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href='/'>
                <img src={images.headerLogo} alt="company sign" 
                width={130}
                height={29}
                />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item)=>(
                    <li key={item.label}>
                        <a href={item.href}
                        className='font-montserrat leading-normal text-lg'
                        >{item.label}</a>
                    </li>
                ))}
            </ul>
            <div className={`hidden max-lg:block ${isMenuVisible ? 'scale-[1.1]':''}`}>
                <img 
                src={icons.hamburger}
                alt="hamburger"
                width={25}
                height={25}
                onClick={showMenu}
                />
            </div>
        </nav>
        {isMenuVisible && (
        <div className=" mb-2 flex flex-col">
         {navLinks.map((item)=>(
                    <p className='w-full bg-slate-600 text-white-400 justify-center py-2 text-center hover:bg-blue-500' key={item.label}>
                        <a href={item.href}
                        className='font-montserrat leading-normal text-xl'
                        >{item.label}</a>
                    </p>
                ))}
        </div>
        )}
    </header>
  );
}

export default Nav