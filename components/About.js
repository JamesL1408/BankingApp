import Image from 'next/image'
import Car from '../images/undraw_off_road_-9-oae.svg'
import {ArrowRightIcon} from '@heroicons/react/solid'


function About() {
    return (
        <div id='About' className='h-screen w-screen bg-black p-[8%] flex items-center'>
            <div className='absolute flex flex-col space-y-4  text-white z-10 '>
                <h1 className='font-semibold text-lg text-blue-400 font-zenAntique'>PREMIUM BANK</h1>
                <h1 className='text-5xl font-extrabold font-roboto'>Unlimited<br/> Transactions with<br/> zero fees</h1>
                <h1 className='text-lg font-medium'>Get access to our exclusive app that allows you<br/>  to send unlimited transaction without getting charged any fees</h1>
                <a href=""><button className='group  flex w-min whitespace-nowrap items-center justify-center space-x-2 py-1 px-4 md:text-lg md:py-1 md:px-6 lg:py-1 lg:px-10 bg-blue-400 rounded-full hover:brightness-125 hover:scale-105 '
                ><p>Get Started</p>
                <ArrowRightIcon className='lg:group-hover:translate-x-5 sm:group-hover:translate-x-2 transition-all duration-200 h-4 w-4 md:h-5 md:w-5'/>
                </button></a>
            </div>
            <div className='absolute right-0 h-[40%] w-[40%] opacity-50 sm:opacity-100 '>
                <Image  src={Car}/>
            </div>
            
        </div>
    )
}

export default About
