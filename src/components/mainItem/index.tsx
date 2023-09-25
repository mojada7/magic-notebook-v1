import Image from 'next/image'
import React from 'react'
import style from './style.module.css'

import { AppProps } from 'next/app'
import Link from 'next/link'

function MainItem({title, pic, hr} : any) {
  return (
    <Link href={`/${hr}`}>
      <div className='w-[20rem] border-[6px] hover:bg-sky-100  text-sky-400 hover:text-sky-500 bg-transparent border-y-pink-200 bg-white border-sky-200 outline-2 md:w-[25rem] mt-[1vh] lg:mt-[2vh] h-[18vh] lg:h-[35vh]  rounded-3xl font-bold text-center pt-5 lg:pt-0 flex lg:items-center hover:scale-105'>
          <div className='flex '>
            <div className='px-2'>
              <Image src={pic} alt='' width={100}/>
            </div>
            <div className={`text-3xl text-center lg:text-4xl mt-4 lg:w-[18rem] lg:pt-4`}>
              {title} 
            </div>
          </div>
      </div>
    </Link>

  )
}

export default MainItem