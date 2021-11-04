import Image from 'next/image'
import {MenuAlt3Icon,XIcon} from '@heroicons/react/solid'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { scrollTo } from 'react-scroll/modules/mixins/scroller';


function Header() {

    if (typeof window === 'object'){
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");
    const btnclose = document.querySelector("button.mobile-menu-button-close");

    btn.addEventListener("click", () => {
        menu.classList.toggle("-translate-y-full");
    });

    btnclose.addEventListener("click", () => {
        menu.classList.toggle("-translate-y-full");
    });
}

const toggleHome = () =>{
    scroll.scrollToTop();
  }
  const toggleAbout = () => {
    scroll.scrollTo(700);
  }

    return (
        <div className='w-full flex h-auto bg-black py-2 px-3 fixed z-20'>

            {/*Mobile Design*/}
            <div className='xs:hidden flex items-center justify-between px-2 w-full'>
                <h1 onClick={toggleHome} className='font-zenAntique text-4xl text-white mb-1 cursor-pointer '>Bux</h1>
                <button className='mobile-menu-button h-8 w-8 text-white cursor-pointer'><MenuAlt3Icon /></button>

                {/*Dropdown Menu*/}
                <div className='mobile-menu h-[200%] w-full bg-black bg-opacity-50 fixed left-0  -translate-y-full transition-all duration-500 ease-in-out '>
                    <div className='flex flex-col h-full w-full bg-black items-center justify-center relative text-white'>
                        <button className='mobile-menu-button-close h-8 w-8 text-white cursor-pointer absolute right-5'><XIcon/></button>
                        <div className='flex flex-col w-full text-2xl items-center justify-center text-center absolute top-[60%] space-y-6 '>
                        <h1 >About</h1>
                        <h1>Discover</h1>
                        <h1>Services</h1>
                        <h1>Sign Up</h1>
                        </div>
                        <button className='absolute top-[85%] py-2 px-12 bg-blue-400 rounded-full text-xl text-black font-medium'>
                            Sign In
                        </button>
                    </div>
                </div>
            </div>

            {/*Computer Design*/}
            <div className='hidden xs:flex items-center justify-around w-full'>
                <h1 onClick={toggleHome} className='font-zenAntique text-4xl text-white mb-1 cursor-pointer hover:text-blue-400'>Bux</h1>
                <div className='text-white flex space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-7'>
                    <Link activeClass="active" to='About' spy={true} smooth={true}><h2 className='cursor-pointer hover:text-blue-400 '>About
                    </h2></Link>
                    <h2 to='Discover' className='cursor-pointer hover:text-blue-400'>Discover</h2>
                    <h2 to='Services' className='cursor-pointer hover:text-blue-400'>Services</h2>
                    <h2 to='SignUp' className='cursor-pointer hover:text-blue-400'>Sign Up</h2>
                </div>
                <button className='py-1 px-5 bg-blue-400 rounded-2xl md:px-7 hover:brightness-125 text-white'>Sign In</button>
            </div>
        </div>
    )
}

export default Header
