import React from 'react'

function AlphabetCard({alphabet, total, known} : any) {
  return (
    <div className='flex hover:scale-105 bg-white rounded-lg w-[7rem] h-[3.2rem] lg:w-[10rem] lg:h-[4rem] px-1 lg:px-4 py-2 border-[3px] border-sky-200'>
        <div className='text-3xl font-bold text-pink-400'>
            {alphabet}
        </div>
        <div className='flex px-1 items-center pt-2 lg:ms-1 lg:pt-0'>
            <div className='w-[8px] mx-1 h-[8px] rounded-full bg-blue-500'>
            </div>
            <div className='text-pink-500 text-sm font-bold lg:px-2'>
                {total}
            </div>
        </div>
        <div className='flex px-1 items-center pt-2 lg:pt-0'>
            <div className='w-[8px] mx-1 h-[8px] rounded-full bg-green-400'>
            </div>
            <div className='text-pink-500 text-sm font-bold lg:px-2'>
                {known}
            </div>
        </div>
    </div>
  )
}

export default AlphabetCard