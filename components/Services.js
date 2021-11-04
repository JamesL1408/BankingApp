import Image from 'next/image'
import Wallet from '../images/wallet.svg'
import {ArrowRightIcon} from '@heroicons/react/solid'


function Services() {
    return (
        <div id='Services' className='h-screen w-screen bg-white p-[8%] flex items-center'>
            <div className='absolute flex flex-col space-y-4  z-10 '>
                <h1 className='font-semibold text-lg text-blue-400 font-zenAntique'>JOIN OUR TEAM</h1>
                <h1 className='text-5xl font-extrabold font-roboto '>Creating an<br/> Account is<br/> extremely easy</h1>
                <h1 className='text-lg font-medium'>Get everything set up and ready in under 10 minutes.<br/>Just add your information and you will be ready to go</h1>
                <button className='group  flex w-min whitespace-nowrap items-center justify-center space-x-2 py-1 px-4 md:text-lg md:py-1 md:px-6 lg:py-1 lg:px-10 bg-black rounded-full hover:brightness-125 hover:scale-105 text-white '
                ><p>Learn More</p>
                <ArrowRightIcon className='lg:group-hover:translate-x-5 sm:group-hover:translate-x-2 transition-all duration-200 h-4 w-4 md:h-5 md:w-5'/>
                </button>
            </div>
            <div className='absolute right-5 h-[65%] w-[45%] opacity-50 sm:opacity-100'>
                <Image  src={Wallet} layout='fill'/>
            </div>
            
        </div>
    )
}

export default Services
