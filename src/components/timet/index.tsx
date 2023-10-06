'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import alarm from '../../../public/pics/alarm.png'
import style from './style.module.css'

function Timer({set} : any) {

    const [time, settime] = useState(0)


    useEffect(()=>{
        setTimeout(() => {
            if(time<600) {
                settime(time+1)
            } else {
                set(2)
            }

        }, 10);
    })
  return (
    <div className={`h-[4rem] flex rounded-2xl font-extraboldmt-8 items-center gap-8 text-white`}>
        <div className='animate-bounce duration-1000'>
        <Image src={alarm} alt='' width={50} /> 
        </div>
    <div className='flex items-center px-4 bg-white text-pink-400 border-[6px] border-sky-200 rounded-xl'> 
      <div className={`text-2xl text-center w-[4rem]`}>{5-Math.floor(time/100)}:{100-(time-(Math.floor(time/100)*100))}</div>
      <div className='text-md ms-4 font-bold'>Seconds left</div>
       
    </div>
  </div>
  )
}

export default Timer