import Link from 'next/link'
import React from 'react'

function Back({title, hr} : any) {
  return (
    <Link href={`${hr}`}>
        <div className='fixed z-50 right-0 text-center font-semibold bg-pink-400 hover:bg-pink-300 text-white rounded-s-full pt-1 mt-1  border-e border-[6px] text-lg border-sky-200 w-[6rem] lg:w-[8rem] h-[3rem]'>{title}</div>
    </Link>
  )
}

export default Back