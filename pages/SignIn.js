import Head from 'next/head'
import Image from 'next/image'
import {MenuAlt3Icon,XIcon} from '@heroicons/react/solid'

import bg from '../images/SignUp.svg'

import React from 'react'

function SignIn() {
    return (
        <div className='h-screen w-screen flex items-center justify-center bg-blue-400 overflow-hidden'>
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

            

            <main className='box flex h-[60%] w-[40%] bg-black max-w-[400px] rounded-md min-w-[325px] items-center justify-center'>
                <a href="/"><h1 className='text-4xl text-white font-bold font-zenAntique absolute top-[5%] left-[6%]'>Bux</h1></a>
                <div className='h-[90%] w-[95%] bg-black flex flex-col items-center text-white'>

                    <h1 className='text-center font-roboto text-lg mt-10'>Sign in to your account</h1>

                    <div className='flex w-[80%] flex-col items-center justify-center mt-9'>
                        <h2 className='self-start text-sm font-medium font-roboto ml-1'>Email</h2>
                        <input type="email" name="email" id="email" className='placeholder-transparent rounded-md w-[100%] py-1 px-2 focus:outline-none bg-white border-b-4 border-transparent focus:border-blue-400 text-black' />
                    </div>
                    <div className='flex w-[80%] flex-col items-center justify-center mt-8'>
                        <h2 className='self-start text-sm font-medium font-roboto ml-1'>Password</h2>
                        <input type="password" name="password" id="password" className='placeholder-transparent rounded-md w-[100%] py-1 px-2 focus:outline-none bg-white border-b-4 border-transparent focus:border-blue-400 text-black' />
                    </div>

                    <button className='w-[80%] h-[40px] flex items-center justify-center bg-blue-400 mt-8 rounded-md font-medium hover:brightness-110 hover:scale-105'>Continue</button>

                    <p className='text-xs mt-3 font-roboto hover:cursor-pointer'>Forgot password</p>
                </div>

            </main>



        </div>
    )
}

export default SignIn
