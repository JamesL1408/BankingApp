import Image from 'next/image'
import {ArrowRightIcon} from '@heroicons/react/solid'

function Hero() {

 if (typeof window === 'object'){
    const arrow = document.querySelector(".arrow");
    const button = document.querySelector(".button");
}
    

    return (
        <div className='h-screen w-screen bg-black object-fill'>
            <video className='h-full w-full object-cover' src='https://static.videezy.com/system/resources/previews/000/055/031/original/data-analysis-digital.mp4' muted loop autoPlay >Video Not Supported</video>
            <div className='absolute flex flex-col items-center justify-center bottom-1/2 left-1/2 -translate-x-1/2 text-center translate-y-1/2 font-roboto text-white space-y-3'>
                <h1 className=' text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold lg:whitespace-nowrap'>Virtual banking has never been easier</h1>
                <p className=' text-base sm:text-lg md:text-xl lg:text-2xl font-medium'>Sign up for a new account now and recieve £250 in credit towards your next transaction.</p>
                <button className='group flex items-center justify-center space-x-2 py-1 px-4 md:text-lg md:py-1 md:px-6 lg:py-1 lg:px-10 bg-blue-400 rounded-full hover:brightness-125 hover:scale-105'
                ><p>Get Started</p>
                <ArrowRightIcon className='lg:group-hover:translate-x-5 sm:group-hover:translate-x-2 transition-all duration-200 h-4 w-4 md:h-5 md:w-5'/>
                </button>
            </div>
        </div>
    )
} 

export default Hero
