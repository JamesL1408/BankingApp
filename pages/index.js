import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Discover from '../components/Discover'
import Services from '../components/Services'
import SignUp from '../components/SignUp'

import Image from 'next/image'
import {MenuAlt3Icon,XIcon} from '@heroicons/react/solid'

import { scrollTo } from 'react-scroll/modules/mixins/scroller';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function Home() {

  if (typeof window === 'object'){
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");
    const btnclose = document.querySelector("button.mobile-menu-button-close");
    const linkclose = document.querySelector(".mobile-link");
    const linkclose1 = document.querySelector(".mobile-link1");
    const linkclose2 = document.querySelector(".mobile-link2");
    const linkclose3 = document.querySelector(".mobile-link3");

    btn.addEventListener("click", () => {
        menu.classList.toggle("-translate-y-full");
    });

    btnclose.addEventListener("click", () => {
        menu.classList.toggle("-translate-y-full");
    });

    linkclose.addEventListener("click", () => {
      menu.classList.toggle("-translate-y-full");
    });
    linkclose1.addEventListener("click", () => {
      menu.classList.toggle("-translate-y-full");
    });
    linkclose2.addEventListener("click", () => {
      menu.classList.toggle("-translate-y-full");
    });
    linkclose3.addEventListener("click", () => {
      menu.classList.toggle("-translate-y-full");
    });
}

const toggleHome = () =>{
    scroll.scrollToTop();
  }

  return (
    <div className="flex flex-col items-center min-h-screen font-roboto overflow-hidden">
      <Head>
        <title>Bux</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet"></link>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap" rel="stylesheet"></link>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link>

      </Head>
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
                        <Link className='mobile-link hover:text-blue-400 cursor-pointer ' activeClass="active" to='About' spy={true} smooth={true}>About</Link>
                        <Link className='mobile-link1 hover:text-blue-400 cursor-pointer' activeClass="active" to='Discover' spy={true} smooth={true}>Discover</Link>
                        <Link className='mobile-link2 hover:text-blue-400 cursor-pointer' activeClass="active" to='Services' spy={true} smooth={true}>Services</Link>
                        <Link className='mobile-link3 hover:text-blue-400 cursor-pointer' activeClass="active" to='SignUp' spy={true} smooth={true}>Sign Up</Link>
                        </div>
                        <a href="/SignIn"><button className='absolute top-[85%] py-2 px-12 bg-blue-400 rounded-full text-xl text-black font-medium left-1/2 -translate-x-1/2'>
                            Sign In
                        </button></a>
                    </div>
                </div>
            </div>

            {/*Computer Design*/}
            <div className='hidden xs:flex items-center justify-around w-full'>
                <h1 onClick={toggleHome} className='font-zenAntique text-4xl text-white mb-1 cursor-pointer hover:text-blue-400'>Bux</h1>
                <div className='text-white flex space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-7'>
                    <Link className='hover:text-blue-400 cursor-pointer' activeClass="active" to='About' spy={true} smooth={true}>About</Link>
                    <Link className='hover:text-blue-400 cursor-pointer' activeClass="active" to='Discover' spy={true} smooth={true}>Discover</Link>
                    <Link className='hover:text-blue-400 cursor-pointer' activeClass="active" to='Services' spy={true} smooth={true}>Services</Link>
                    <Link className='hover:text-blue-400 cursor-pointer' activeClass="active" to='SignUp' spy={true} smooth={true}>Sign Up</Link>
                </div>
                <a href="/SignIn"><button className='py-1 px-5 bg-blue-400 rounded-2xl md:px-7 hover:brightness-125 text-white'>Sign In</button></a>
            </div>
        </div>
      <Hero/>
      <About />
      <Discover />
      <Services />
      <SignUp />

      


    </div>
  )
}
