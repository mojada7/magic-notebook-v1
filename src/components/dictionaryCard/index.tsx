'use client'
import Image from 'next/image'
import React from 'react'
import mainpic2 from '../../../public/pics/mainpic2.png'

function DictionaryCard({tw, lw} : any) {

  return (
    <div className='flex items-center justify-center gap-2 px-4 rounded-2xl py-4 w-[95vw] md:w-fit'>
        <div className='flex flex-col lg:flex-row lg:gap-4 bg-white px-4 rounded-xl border-4 border-sky-200 py-4 lg:text-xl'>
            <div className='flex items-center'>
            <div className='bg-blue-500 w-[15px] h-[15px] rounded-full me-2'></div>
                total words: {tw}
            </div>
            <div className='flex items-center'>
                <div className='bg-green-500 w-[15px] h-[15px] rounded-full me-2'></div>
                learned words: {lw}
            </div>
        </div>
        <div className='ps-4 hover:scale-110 hover:cursor-pointer'>
            <Image src={mainpic2} alt='' width={100} />
        </div>
    </div>
  )
}

export default DictionaryCard