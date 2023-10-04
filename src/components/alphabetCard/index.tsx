import React from 'react'

function AlphabetCard({alphabet, total, known} : any) {
  return (
    <div className='flex items-center justify-between ps-2 hover:scale-105 bg-white rounded-lg w-[7rem] h-[3.2rem] lg:w-[10rem] lg:h-[4rem] px-1 lg:px-4 py-2 border-[3px] border-sky-200'>
        <div className='text-3xl font-bold text-pink-400'>
            {alphabet}
        </div>
        <div className='flex justify-start flex-col items-start'>
            <div className='flex justify-start items-center '>
                <div className='w-[9px] mx-1 h-[8px] rounded-full bg-blue-500'>
                </div>
                <div className='text-black text-[10px] lg:px-2'>
                    total : {total}
                </div>
            </div>
            <div className='flex justify-start items-center lg:pt-0'>
                <div className='w-[9px] justify-start mx-1 h-[8px] rounded-full bg-green-400'>
                </div>
                <div className='text-black text-[10px] lg:px-2'>
                    learned : {known}
                </div>
            </div>
        </div>

    </div>
  )
}

export default AlphabetCard