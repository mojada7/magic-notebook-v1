import Image from 'next/image'
import React from 'react'
import style from './style.module.css'

import { AppProps } from 'next/app'
import Link from 'next/link'

function MainItem({title, pic, hr, text} : any) {
  return (
    <Link href={`/${hr}`}>
      <div className='w-[85vw] border-[6px] hover:bg-sky-100 text-sky-400 hover:text-sky-500 bg-transparent border-y-pink-300 bg-white border-sky-400 outline-2 md:w-[40vw] lg:w-[25vw] mt-[1vh] lg:mt-[2vh] h-[22vh] lg:h-[30vh]  rounded-3xl font-bold text-center flex justify-center items-center hover:scale-105'>
          <div className='flex items-center justify-center lg:ps-4'>
            <div className='px-2 h-fit'>
              <Image src={pic} alt='' width={100}/>
            </div>
            <div className={`text-xl text-start ms-2 lg:ms-6 lg:text-2xl lg:w-[18rem]`}>
              <div className='w-[10rem] lg:w-[12rem]'>              
                {title} 
              </div>
              <div className='text-xs mt-2 text-left md:text-md w-[10rem] lg:w-[12rem]'>              
                {text}
              </div>


            </div>
          </div>
      </div>
    </Link>

  )
}

export default MainItem