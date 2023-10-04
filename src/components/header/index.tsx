import Image from 'next/image'
import React from 'react'
import unicorn from '../../../public/pics/unicorn4.png'
import style from './style.module.css'
import Cloud from '../cloudbg'
function Header() {
  return (
    <>
    <div className='border-b-[8px] lg:border-b-[16px] bg-sky-200 text-black border-yellow-300'>
      <div className='border-b-[8px] lg:border-b-[16px] border-pink-300'>
        <div className='w-full flex ps-2 lg:ps-5 pt-2 items-end h-[8vh] lg:h-[12vh] border-b-[8px] lg:border-b-[16px] border-sky-400 z-50'>
            <div className='mb-2 lg:scale-150'>
              <Image className='scale-75 lg:scale-75' src={unicorn} alt='feriBella-noteBooK' width={50} />
            </div>
            <div className={`ps-2 lg:ps-4 text-2xl lg:text-4xl pb-2 lg:pb-0 text-black ${style.font}`}>magic-noteBook</div>
        </div>
      </div>
    </div>


      <div>

      </div>
    </>

  )
}

export default Header